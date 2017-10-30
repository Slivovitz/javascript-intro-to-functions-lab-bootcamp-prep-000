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
  var uppercase = "HELLO!"
  var lowercase = "hello!"
  var loveYou = "I love you, Grandma"
  if (uppercase.toUpperCase() === uppercase) {
    return uppercase
  } else if (lowercase.toLowercase() === lowercase) {
    return lowercase
  }else if (loveYou === "I love you, Grandma") {
    return loveYou
  }
}
