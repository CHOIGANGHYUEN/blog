console.log(redColor);
//변수에 함수를 할당
console.log(blueColor());
//function
console.log(greenColor());
//호이스팅 영향받음
var redColor="red";
//이름이 없는 함수 ( 호이스팅 영향 안 받음)
var blueColor=function(){
    return "blue";
}
//이름이 있는 함수 (호이스팅 영향 받음)
function greenColor(){
    return "green";
}