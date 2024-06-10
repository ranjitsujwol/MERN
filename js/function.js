function sum (a,b){
    console.log("the sum of "+ a +" and "+ b +" is "+ (a + b) );
}
sum(1,2);

let genders = ["male","female","mixed"]
let religions = ["hindu","christian","islam","buddhist"]

function random(topic){
    return console.log(topic[Math.floor( Math.random() * topic.length )])
}

random(genders)
random(religions)

function sum(a,b){
    return a+b
}

function double (x){
    return x*2
}

console.log ("sum of 50 and 50 is",sum(50,50))
console.log ("double of 100 is",double(100))


