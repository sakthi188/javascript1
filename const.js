function printManyTimes(str)
{
    "use strict";

    const SENTENCE= str+ " is cool!";

    //sentence= str+ " is amazing!";

    for(var i=0;i<str.length;i+=2)
    {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

const s=[8,7,5];
function edit()
{
   s[0]=7;
   s[1]=0;
   s[2]=3;
}
edit();
console.log(s);

function freezeObj()
{
    "use strict";
    const MATH_CONSTS={
        PI:3.14
    };
    Object.freeze(MATH_CONSTS);
    try{
        MATH_CONSTS.PI=99;
    }
    catch(ex)
    {
       console.log(ex);
    }
    return MATH_CONSTS.PI;

}
console.log(freezeObj());