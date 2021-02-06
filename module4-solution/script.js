// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

import helloSpeaker from './SpeakHello.js';
import byeSpeaker from './SpeakGoodBye.js';

let separateNames = (name) => {
  let firstChar = name.charAt(0).toLowerCase();
  return (firstChar === 'j')?
      byeSpeaker.speak(byeSpeaker.speakSimple(name)) : helloSpeaker.speak(helloSpeaker.speakSimple(name));
};

let sayHello = () => {
  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  /** Using forEach **/
  names.forEach(name => {
    let firstChar = name.charAt(0).toLowerCase();
    (firstChar === 'j')?
        byeSpeaker.speak(byeSpeaker.speakSimple(name)) : helloSpeaker.speak(helloSpeaker.speakSimple(name));
  });

  /** Using map **/
  names.map(separateNames);

  /** Using reduce **/
  let initialValue = {
    hello: [],
    bye: []
  };

  let reduced = names.reduce((accumulator, currentValue, currentIndex, array) => {
    let firstChar = currentValue.charAt(0).toLowerCase();
    let hello = accumulator.hello;
    let bye = accumulator.bye;
    if(firstChar === 'j'){
      bye.push(byeSpeaker.speakSimple(currentValue));
    }else{
      hello.push(helloSpeaker.speakSimple(currentValue));
    }
    return {hello, bye};
  }, initialValue);

  reduced.bye.forEach(greeting => byeSpeaker.speak(greeting));
  reduced.hello.forEach(greeting => helloSpeaker.speak(greeting));

}

sayHello();
