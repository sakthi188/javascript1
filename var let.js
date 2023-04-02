let cat="Quincy"
let quote;
cat="Beau";
function catTalk()
{
    "use strict";

    cat="oliver";
    quote=cat+" says meow!";
    return quote;
}
console.log(catTalk());

//scope
function checkScope()
{
    "use strict";
    //let i="function scope";
    if(true)
    {
        var i="block scope";
        console.log("Block scope i is: "+i);
    }
    console.log("function scope i is: "+i);
    return i;
}
checkScope();