const magic = () => new Date();
console.log(magic());

const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

const realNum=[2,-7,89,-12.8,2,-97,5.6];
const squareList = (arr) =>{
  const SquaredIntegers=arr;
  return SquaredIntegers;
}
const SquaredIntegers=squareList(realNum);
console.log(SquaredIntegers);

const realNum1=[2,-7,89,-12.8,2,-97,5.6];
const squareList1 = (arr) =>{
  const SquaredIntegers1=arr.filter(num => Number. isInteger(num) && num>0).map(x=> x*x);
  return SquaredIntegers1;
}
const SquaredIntegers1=squareList1(realNum1);
console.log(SquaredIntegers1);

