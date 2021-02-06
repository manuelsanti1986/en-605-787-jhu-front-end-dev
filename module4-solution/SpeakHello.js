const speak = (greeting) => {
  console.log(greeting);
};

const speakSimple = (name) => {
  return "Hello " + name;
};

let helloSpeaker = {
  speak,
  speakSimple
};

export default helloSpeaker;
