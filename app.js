function lifeInWeeks(age) {
    var age = parseInt(prompt('Input your current age')); //29
    const years = 90 - age;  //61
    var Sam = years * 365;
    var Tew = years * 52;
    var Tom = years * 12;
    var output = "You have " + Sam + " days, " + Tew + " weeks " + "and " + Tom + " months left if you live until 90 years old.";
    
    return output;
}
var my_age = lifeInWeeks();
alert(my_age)