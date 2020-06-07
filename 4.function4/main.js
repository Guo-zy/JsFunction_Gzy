/*
## requirement 
    
- Create a new main.js file and write a function that calculates how many words a string contains.

```
function countWords(message){
  // wirte your code here
}
countWords('Good morning, I love JavaScript.'); // should return 5
```
*/

function countWords(message){
    //假设这是一个正常的字符串，即不包含多余的空格
    let res = 0;
    for (const c of message.trim()) {
         if(c == ' ') res ++;
    }
    return res + 1;
 }
 console.log(countWords('Good morning, I love JavaScript.')); // should return 5
 