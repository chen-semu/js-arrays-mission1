// var arrey=[5,3,7,8,11]
// function toArrey(x){
//     var sum=0
//     for(i=0;i<x.length;i++){
//         sum+=x[i]
//     }
//     var avg=sum/x.length
//     return sum, avg
// }
//     console.log(arrey)
//     console.log(toArrey(arrey))
// var names=['solomon','znavo','dalia','chen','or']
// for(i=0;i<names.length;i++){
//     console.log(names[i])
// }
// var arreyNum=[3,9,6,2,1,4,5,7,8]
// function forArreyNum(x){
// for(i=0;i<x.length;i++){
//     var num=+prompt()
//     if(num==x[i]){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// }
// console.log(forArreyNum(arreyNum))
// var onlyEven=[2,34,'chen','batel','yonatan',59,69,74,'or',546,'dalia',78,97,24]
// for(i=0;i<onlyEven.length;i++){
//     if(onlyEven[i]&2==0){
//         console.log(onlyEven[i])
//     }
// }
// var onlyNum=[1,9,2,8,4,7,5,6]
// for(i=0;i<onlyNum.length;i++){
//     if(onlyNum[i]>onlyNum[i+1]){
//         onlyNum.unshift(onlyNum.splice([i+1,1])[1])
//         i=-1
// }
// }
// console.log(onlyNum)
// var maxArr=[12,54,22,11,56,42]
// function forMax(x){
//     var num=0
//    for(i=0;i<x.length; i++){
//        if(num<x[i]){
//            num=x[i]
//        }
//    }
//    return num
// }
// console.log(formax(maxArr))
//
// var minArr=[12,58,25,13,56,43]
// function forMin(x){
//     var num=minArr[0]
//    for(i=0;i<x.length; i++){
//        if(num>x[i]){
//            num=x[i]
//            var index=i
//        }
//    }
//    return num
// }
// console.log(forMin(minArr))
// //
// var sumArr=[12,58,25,13,56,43]
// function forSum(x){
//     var sum=x[0]
//    for(i=0;i<x.length; i++){
//        sum+=x[i]
//    }
//    return sum
// }
// console.log(forSum(sumArr))
// //
// function maxMoltiplyMin(x) {
//     var max=x[0]
//     var mun=x[0]
//     for(i=0;i<x.length;i++){
//         if(max<x[i]){
//             max=x[i]
//         }
//         else if(min>x[i]){
//             min=x[i]
//         }
//     }
//     return max*min
// }
// var maxMin=[1,2,3,4,5,6,7,8,9]
// console.log(maxMoltiplyMin(maxMin))
// //quistion 14
// var x=[]
// function arreyAboveTewen(y,j){
//     for(i=0;i<y.length;i++){
//         if(y[i]>20)
//         x.push(y[i])
//     }
// }
// console.log(arreyAboveTewen([1,2,22,52,66,21,29,12],x))
// //quistion 31
// function spratingArrsy() {
//     var num= parseInt(prompt())
//     while(num/10 !=0){
//         var result=num%10;
//         console.log(result)
//         num=(num-result)/10;
//     }
// }
// var mixed=[1,"you","me",32,78,"okay"]
// for(i=0;i<mixed.length;i++){
//     if (mixed[i]*0!=0) {
//         mixed[i]="not_number"
//     }
// }
// console.log(mixed)
// var strangeSum=[1,23,45,44,33,56,87,554,0,2,5]
// function strange(x){
//     var sum=0
//     for(i=0;i<x.length;i++){
//         if(x[i]%2==1){
//             sum+=x[i]
//         }
//     }
//     return sum
// }
// console.log(strange(strangeSum))

// function pushesArrays(x,y){
//     x.push(y)
//     return x
// }
// console.log(pushesArrays(["bro","hungry","power"],"chen"))
// //quistion 15
// function indexNum(x) {
//     var newPushArray=[]
//     for(i=0;i<x.length;i++){
//         newPushArray.push(i+x[i])
//     }
//     return newPushArray
// }
// console.log(indexNum(["bro","hungry","power"]))
// //quistion 16
// function answerTo16(strangeSum) {
//     var arrayanswer16=[]
//     for(i=0;i<strangeSum.length;i++){
//         if(strangeSum[i]%2==0){
//             arrayanswer16.push(strangeSum[i])
//         }
//     }
//     console.log(arrayanswer16)
// }
// function nonsense(v,p) {
//     console.log(v)
//     console.log(p)
//     if (v*p>=13) {
//       return  console.log("bar mitzva")
//     }
//     else if(v*p==12){
//       return  console.log("bat mitzva")
//     }
//     else{
//       return  console.log("kid")
//     }
// }
// function tofes() {
//     var myTofes=[];
//     myTofes[0]=+prompt()
//     for(i=1;i<3;i++){
//         myTofes.push(prompt())
//     }
//     if(myTofes[0]>18){
//         for(i=0;i<myTofes[0];i++){
//             console.log(myTofes[1]+myTofes[2])
//         }
//     }
//     else{
//         console.log(myTofes[1]+myTofes[2])
//     }
// }
// function javaIsntJs() {
//     for(i=1;i<=1000;i++){
//         console.log("JAVA is not java script!!!")
//     }
// }
// function myselfOnly(k,b) {
//     k=+prompt("your age")
//     b=prompt("full name please")
//     if(b=="Chen Semu"){
//         alert("Hi Boss Mr. "+b)
//     }
//     else{alert("no entry")}
//     for(i=0;i<k;i++){
//         console.log(b)
//     }
// }
//
// var striing="hello"
// function digits(striing) {
//         for(i=0;i<striing.length;i++){
//             console.log(striing[i])
//         }
// }
// function newstring() {
//     var newString=""
//     for(i=0;i<striing.length;i++){
//         newString += striing[i]
//         newString+=i
//     }
//     console.log(newString)
// }
// function helloA(x) {
//     if(x[0]=="A"){
//         console.log(striing)
//     }
//     else{
//         console.log("bye")
//     }
// }
// console.log(helloA(prompt("first name")))
// function yesOrNo(x) {
//     for(i=0;i<x.length;i++)
//     if(x[i]=="E"&& i==x.length-1){
//         console.log("yes")
//     }
//     else if(x[i]!="E"&& i==x.length-1){
//         console.log("no")
//     }
// }
// console.log(yesOrNo(prompt("last name")))
