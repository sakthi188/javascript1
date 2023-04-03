const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    }
})();
console.log(sum(1,2,3));

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
   arr2=[...arr1];
   arr1[0]='potato';
})();
console.log(arr2);