// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = name.toUpperCase();
// TODO write your code here...


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
sentence = sentence.split(" ").map(x => x.substring(0,1).toUpperCase() + x.substring(1)).join(" ");
//TODO write your code here...


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
money = parseInt(money.substring(1));
//TODO write your code here...
