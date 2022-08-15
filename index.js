function scuberGreetingForFeet(someValue){
  let result
   if (someValue> 2500) {
    result = 'No can do.';
  }
  else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
 
 else if (someValue <= 400) {
    result = 'This one is on me!';
  }
 
  return result
}

  // Write your code here!


function ternaryCheckCity(city){
  
   if (city === 'NYC') {
    return 'Ok, sounds good.';
   }
   
  else {
    return'No go.';
   }
   
 
  }
  // Write your code here!


function switchOnCharmFromTip(generous) {
  if (generous === 'generous') {
   return 'Thank you so much.';
 }
 else if (generous === 'not as generous'){
  return 'Thank you.';
 }
 else {
  return 'Bye.';
 }
 }
  // Write your code here!
