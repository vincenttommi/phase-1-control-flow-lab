function scuberGreetingForFeet(feet) {
  let feedback;
  if (feet <= 400) {
    feedback = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    feedback = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    feedback = 'No can do.';
  } else {
    feedback = 'This is an invalid distance.';
  }
  return feedback;
}



function ternaryCheckCity(city){
  // Write your code here!

  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
    
 switch(tip){
    case 'generous':
    return "Thank you so much.";
    break;
    case 'not as generous':
    return "Thank you.";
    default:
      return "Bye.";

}
}