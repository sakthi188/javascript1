const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list)
{
    const [,,...arr]=list;
    return arr;
}
const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);


const person ={
    name: "Zodiac HashBro",
    age: 54
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);