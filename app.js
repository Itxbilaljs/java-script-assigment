var names=prompt("enter you names");
var urdusubject=+prompt("enter urdu number");
var mathsubject=+prompt("enter math number");
var sindhisubject=+prompt("enter sindhi number");
 var englsubject=+prompt("enter english number");
var chemistrysubject=+prompt("enter chemistry number");
var totalnumber= 500;
var studentMarks=urdusubject+mathsubject+sindhisubject+englsubject+chemistrysubject;
var percentage=studentMarks/totalnumber*100;
console.log(names,urdusubject,mathsubject,sindhisubject,englsubject,chemistrysubject)
console.log(names+"total number is"+"studentMarks"+"out of"+totalnumber+"and percentage is"+percentage+"&")