const speak = (greeting) => {
  console.log(greeting);
}

const speakSimple = (name) => {
  return "Good Bye " + name;
};

let byeSpeaker = {
  speak,
  speakSimple
};

export default byeSpeaker;
