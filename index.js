function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  var loveYou = "I love you, Grandma"
  if (uppercase.toUpperCase() === uppercase) {
    console.log("YES INDEED!")
  } else if (lowercase.toLowercase() === lowercase) {
    console.log("I can\'t hear you!")
  } else if (loveYou === "I love you, Grandma") {
    console.log("I love you, too.")
  }
}
