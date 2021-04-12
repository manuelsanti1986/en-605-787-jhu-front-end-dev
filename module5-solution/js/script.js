$(() => { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur((event) => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

((global) => {

let dc = {};

let homeHtmlUrl = "snippets/home-snippet.html";
let allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
let categoriesTitleHtml = "snippets/categories-title-snippet.html";
let categoryHtml = "snippets/category-snippet.html";
let menuItemsUrl = "http://davids-restaurant.herokuapp.com/menu_items.json?category=";
let menuItemsTitleHtml = "snippets/menu-items-title.html";
let menuItemHtml = "snippets/menu-item.html";
let aboutPageHtml = "snippets/about.html";

// Convenience function for inserting innerHTML for 'select'
let insertHtml = (selector, html) => {
  let targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
let showLoading = (selector) => {
  let html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
let insertProperty = (string, propName, propValue) => {
  let propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

// Remove the class 'active' from home and switch to Menu button
let switchMenuToActive = () => {
  // Remove 'active' from home button
  let classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", (event) => {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(allCategoriesUrl, (response) => buildAndShowHomeHTML(response) );
});

// Builds HTML for the home page based on categories array
// returned from the server.
let buildAndShowHomeHTML = (categories) => {
  // Load home snippet page
  $ajaxUtils.sendGetRequest(homeHtmlUrl, (homeHtml) => {
    let category = chooseRandomCategory(categories);
    let categoryShortName = "'" + category.short_name + "'";
    let newCategory = insertProperty(homeHtml.responseText, "randomCategoryShortName", categoryShortName);
    let newHtmlComponent = newCategory;
    insertHtml("#main-content", newHtmlComponent);
      // Use the existing insertHtml function for that purpose. Look through this code for an example
      // of how to do that.
      // ....

    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}

// Given array of category objects, returns a random category object.
let chooseRandomCategory = (categories) => {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  let randomArrayIndex = Math.floor(Math.random() * categories.length);
  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
}

let generateRandomRatingNumber = () => {
  // Produces a random number from 1 to 5 (inclusively).
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

// Load the menu categories view
dc.loadMenuCategories = () => {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
};

// Load the about page view
dc.loadAboutPage = () => {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(aboutPageHtml, buildAndShowRatingsHTML, false);
}

// Load the menu items view
// 'categoryShort' is a short_name for a category
dc.loadMenuItems = (categoryShort) => {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(menuItemsUrl + categoryShort, buildAndShowMenuItemsHTML);
};

let buildAndShowRatingsHTML = (aboutPageHtml) => {
  // Load title snippet of about us page
  let html = aboutPageHtml.responseText;
  let randomNum = generateRandomRatingNumber();
  let textRating = randomNum + "-star rating";
  html = insertProperty(html, "text-rating", textRating);

  for(let i = 1; i <= 5; i++){
    let starIconClass = "fa fa-star";
    let aboutClassNum = "span-class-" + i;
    if(i > randomNum){
      starIconClass += "-o";
    }
    html = insertProperty(html, aboutClassNum, starIconClass);
  }
  insertHtml("#main-content", html);
}

// Builds HTML for the categories page based on the data
// from the server
let buildAndShowCategoriesHTML = (categories) => {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(categoriesTitleHtml, (categoriesTitleHtml) => {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(categoryHtml, (categoryHtml) => {
          // Switch CSS class active to menu button
          switchMenuToActive();
          let categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
let buildCategoriesViewHtml = (categories, categoriesTitleHtml, categoryHtml) => {
  let finalHtml = categoriesTitleHtml.responseText;
  finalHtml += "<section class='row'>";

  categories.forEach(category => {
    let html = categoryHtml.responseText;
    let name = "" + category.name;
    let short_name = category.short_name;
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "short_name", short_name);
    finalHtml += html;
  });

  finalHtml += "</section>";
  return finalHtml;
}

// Builds HTML for the single category page based on the data
// from the server
let buildAndShowMenuItemsHTML = (categoryMenuItems) => {
  // Load title snippet of menu items page
  $ajaxUtils.sendGetRequest(menuItemsTitleHtml, (menuItemsTitleHtml) => {
      // Retrieve single menu item snippet
      $ajaxUtils.sendGetRequest(menuItemHtml, (menuItemHtml) => {
          // Switch CSS class active to menu button
          switchMenuToActive();
          let menuItemsTitleHtmlString = menuItemsTitleHtml.responseText;
          let menuItemsViewHtml = buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtmlString, menuItemHtml);
          insertHtml("#main-content", menuItemsViewHtml);
        },
        false);
    },
    false);
}

// Using category and menu items data and snippets html
// build menu items view HTML to be inserted into page
let buildMenuItemsViewHtml = (categoryMenuItems, menuItemsTitleHtml, menuItemHtml) => {
  menuItemsTitleHtml =
    insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
  menuItemsTitleHtml =
    insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);

  let finalHtml = menuItemsTitleHtml;
  finalHtml += "<section class='row'>";

  // Loop over menu items
  let menuItems = categoryMenuItems.menu_items;
  let catShortName = categoryMenuItems.category.short_name;
  for (let i = 0; i < menuItems.length; i++) {
    // Insert menu item values
    let html = menuItemHtml.responseText;
    html = insertProperty(html, "short_name", menuItems[i].short_name);
    html = insertProperty(html, "catShortName", catShortName);
    html = insertItemPrice(html, "price_small", menuItems[i].price_small);
    html = insertItemPortionName(html, "small_portion_name", menuItems[i].small_portion_name);
    html = insertItemPrice(html, "price_large", menuItems[i].price_large);
    html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
    html = insertProperty(html, "name", menuItems[i].name);
    html = insertProperty(html, "description", menuItems[i].description);

    // Add clearfix after every second menu item
    if (i % 2 !== 0) {
      html += "<div class='clearfix visible-lg-block visible-md-block'></div>";
    }
    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}

// Appends price with '$' if price exists
let insertItemPrice = (html, pricePropName, priceValue) => {
  // If not specified, replace with empty string
  if (!priceValue) {
    return insertProperty(html, pricePropName, "");
  }
  priceValue = "$" + priceValue.toFixed(2);
  html = insertProperty(html, pricePropName, priceValue);
  return html;
}

// Appends portion name in parens if it exists
let insertItemPortionName = (html, portionPropName, portionValue) => {
  // If not specified, return original string
  if (!portionValue) {
    return insertProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = insertProperty(html, portionPropName, portionValue);
  return html;
}


global.$dc = dc;

})(window);
