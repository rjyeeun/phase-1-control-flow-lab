function scuberGreetingForFeet(aNumber){
  // Write your code here!
  if (aNumber <= 400) {
    return 'This one is on me!'
  }
  else if (aNumber <2000) {
    return 'That will be twenty bucks.'
  }
  else if (aNumber > 2000 && aNumber < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (aNumber > 2500) {
    return 'No can do.'
  }
  

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {return 'No go.'}
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much."
    // Write your code here!
}
 else if (tip === "not as generous") {
  return 'Thank you.'
 }
 else {return 'Bye.'}
 }