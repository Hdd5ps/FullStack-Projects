/* Create a business name generator by combining list of adjectives and shop name and another word */

let random = Math.random(1);

let a = prompt{ "click adjectives"};
let b = prompt{ "click sname"};
let c = prompt{ "click word"};
let adjectives = {
    adj1=crazy
    adj2=amazing
    adj3=fire
}
let sname = {
    sname1=engine
    sname2=foods
    sname3=garments
}

let word = {
    word1=bros
    word2=limited
    word3=hub
}

let obj = {
    a=adj1, adj2, adj3
    b=sname1, sname2, sname3
    c=word1, word2, word3
    a2=adj2, adj3, adj1
    b2=sname2, sname3, sname1
    c2=word2, word3, word1
    a3=adj3, adj1, adj2
    b3=sname3, sname1, sname2
    c3=word3, word1, word2
}

if (random > 0.33) {
    alert(`The name is generated as follows `a b c``)
}
else if{
    alert(`The name is generated as follows `a2 b2 c2``)
}
else {
    alert(`The name is generated as follows `a3 b3 c3``)
}


let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
a1.concat(a2,a3)
