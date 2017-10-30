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

  if (string.toUpperCase() === uppercase) {
    return("YES INDEED!")
  } else if (string.toLowercase() === lowercase) {
    return("I can\'t hear you!")
  } else if (string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}
