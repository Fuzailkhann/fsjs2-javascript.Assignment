// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// false value
console.log(Boolean(null));
console.log(Boolean(0))
console.log(Boolean(NaN))

if (null) {
    console.log("if block not executed ")
}else {
    console.log(" else block executed")
}

if (0){
    console.log("if block is not executed") // 0 will evaluated as false so this will not execute
}else {
    console.log("esle block execute")
}
if (NaN){
    console.log("if block is not execute")
}else{
    console.log("else block execute")
}

// true value
console.log(Boolean(1));
console.log(Boolean("anirudh"));
console.log(Boolean({}));
if (1){
    console.log("1 will be evaluated as true so this will execute");

}else{
    console.log("else is not execute")
}
if("anirudh"){
    console.log("string will be evaluated as true so this will execute")
}else{
    console.log("not execute")
}
if({}){
    console.log("if will be evaluated as true so this will execute");

}else{
    console.log("not execute");
}