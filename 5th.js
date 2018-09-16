let a=[1,2,3,4,5] ,y;
 var i,sum=0;
console.log(a);
console.log("max value of a is "+Math.max(...a));
  
var sum=a.reduce((a, b) => a + b, 0);
console.log( 'sum is ',sum)
y=(sum/5)
console.log('average is',y);





