# Welcome to Manuel's Page

## EN.605.787 Front End Web App Development

The following repository contains the assignment solutions prepared by **Manuel E. Santiago Laboy**.

## Assignment Solutions:
### Module 2: Assignment #1

- **Instructions:**
    - [Module 2 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module2)
    - [JHU-EP-Coursera GitHub: Module 2 Assignment](https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment2/Assignment-2.md)

- **Solution Link:**
    - [Module 2 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/module2-solution)

- **Description:** The first assigment was dedicated to learn the basics of the Cascading Style Sheets (CSS) language used to describe the presentation of an HTML document.


### Module 3: Assignment #2

- **Instructions:**
    - [Module 3 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module3)
    - [JHU-EP-Coursera GitHub: Module 3 Assignment](https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment3/Assignment-3.md)

- **Solution Link:**
    - [Module 3 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/module3-solution)

- **Description:** The second assigment was dedicated to learn the basics of the using Bootstrap for styling a static website.

### Module 4: Assignment #3

- **Instructions:**
    - [Module 4 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module4)
    - [JHU-EP-Coursera GitHub: Module 4 Assignment](https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment4/Assignment-4.md)

- **Solution Link:**
    - [Module 4 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/module4-solution)

- **Description:** This assigment was dedicated to learn the basics of using JavaScript to add interaction to the static website.

### Module 5: Assignment #4

- **Instructions:**
    - [Module 5 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module5)
    - [JHU-EP-Coursera GitHub: Module 5 Assignment](https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment5/Assignment-5.md)

- **Solution Link:**
    - [Module 5 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/module5-solution)

- **Description:** This assigment was dedicated to learn the basics of using JavaScript to manipulate the DOM (Document Object Model) and using Ajax.

### Module 6: Assignment #5

- **Instructions:**
    - [Module 6 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module6)
    - [JHU-EP-Coursera GitHub: Module 6 Assignment](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment1/Assignment-1.md)

- **Solution Link:**
    - [Module 6 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/mod1_solution)

- **Description:** This assigment was dedicated to learn the basics of using AngularJS (Version 1).

- **Key Takeaways:**
    - **M-V-VM:** Common design pattern for structuring UIs with functionality
    - **Model:** Represents and holds raw data
    - **View:** UI that never changes data, declares events
    - **ViewModel:** Data representation of the state of the UI
    - **Declarative Binder:** Binds the ViewModel to the View
    - **Minification:** Process of removing all unnecessary characters from source code without changing its functionality
    - **Interpolation:** Process of evaluating a string literal containing one or more placeholders, which are replaced with values
    - **Expression:** Something that evaluates to some value
        - Executed in the context of the scope and has access to properties on `$scope`
        - It does not throw errors if it results in a TypeError or ReferenceError
        - It does not allow control functions (e.g., 'if statements', ...)
        - Accepts a filter or filter chains to format the output

### Module 7: Assignment #6

- **Instructions:**
    - [Module 7 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module7)
    - [JHU-EP-Coursera GitHub: Module 7 Assignment](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment2/Assignment-2.md)

- **Solution Link:**
    - [Module 7 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/mod2_solution)

- **Description:** This assigment was dedicated to learn the basics of using Filters, Digest Cycle and Data Binding, Looping, Controller as Syntax and Creating and Configuring custom services in AngularJS (Version 1).

- **Key Takeaways:**
    - **Digest Cycle:** Running digest loops until all watchers report that nothing has changed
        - It does not get triggered automatically if events are unaware of Angular. To trigger the digest cycle, use `$digest` afer the custom code or wrap the custom code inside `$apply`.
    - **Set up watchers:**
        - **$scope.watch :** Should not be done inside a controller!
        - **{property} :** Interpolating sets up a watcher
        - **<input ..ng-model="property"> :** An input model with ng-model will have a watcher
    - **`$scope` is based on prototypal inheritance**
        - Child controller's `$scope` inherits from parent controller's `$scope`
    - Angular creates a property 'label' on the `$scope`
        - The 'label' is a reference to `this`
    - **Rules for Controllers:**
        - Controllers are the **ViewModel** in the **Model-View-ViewModel (MVVM)** architectural pattern.
        - They set up the initial state of `$scope` and add behavior to it.
        - **Do NOT** use them to handle business logic directly, nor to share code or state across controllers.
    - **Singleton Design Pattern:**
        - It restricts an object to always having a single instance. Meaning that each dependent component will get a reference to the same instance.
        - They enable sharing data between different controllers or other components within our application.
        - AngularJS custom services are **Always* singletons
    - **Factory Design Pattern:**
        - It can produce any type of objects, not just singletons.
        - It can be used to produce dynamically customizable services.
    - **Factory-vs-Service:**
        - `.factory()` is NOT just another way of creating the same. service you can create with `.service()`, but it can be
        - `.service()` is also a factory, but a much more limited one. It is a factory that always produces the same type of service - a singleton, without an easy way to configure its behavior.


### Module 8: Assignment #7

- **Instructions:**
    - [Module 8 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module8)
    - [JHU-EP-Coursera GitHub: Module 8 Assignment](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md)

- **Solution Link:**
    - [Module 8 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/mod3_solution)

- **Description:** This assigment was dedicated to learn the basics of using Promises, Ajax, and Custom Directives in AngularJS (Version 1).

- **Key Takeaways:**
    - **[Directives](https://docs.angularjs.org/guide/directive):** These are markers on a DOM element hat tells Angular's HTML compiler to attach a specified behavior to that DOM element.

### Module 9: Assignment #8

- **Instructions:**
    - [Module 9 Assignment](https://ychaikin.github.io/jhu-ajax-course/Module9)
    - [JHU-EP-Coursera GitHub: Module 9 Assignment](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment4/Assignment-4.md)

- **Solution Link:**
    - [Module 9 Solution](https://manuelsanti1986.github.io/jhu-front-end-dev/mod4_solution)

- **Description:** This assigment was dedicated to learn the basics of creating components, event system and modules, and routing in AngularJS (Version 1).

- **Key Takeaways:**
    - **[Components](https://docs.angularjs.org/guide/component):** These are a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.
        - They only control their own view and data
        - They have well-defined public API
        - They have a well-defined lifecycle.
        - The entire application should be viewed as a tree of components
        - They should never modify data or DOM that doesn't belong to them.


### Assignment Submission Reminders

1. Submit the assignment here on Blackboard with the following information:

    - GitHub.com link to your repository (do NOT share this link or your GitHub username with the class)
    - GitHub.io link to the deployed solution.
    - Make sure to check that your deployed assignment works as you intended it to.

**Make sure both of these are done before the due date/time. (See info below on late submissions).**


### Useful Links
- [Course Syllabus](https://ychaikin.github.io/jhu-ajax-course/Syllabus)
- [Coursera: HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/welcome)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



### Contact Information
- School Email: msanti16@jhu.edu
