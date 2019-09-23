"use strict";

let a,b,c;
a=Number(prompt("Задание 1.1\na=", ' '));
b=Number(prompt("Задание 1.1\nb=", ' '));
c=Number(prompt("Задание 1.1\nc=", ' '));
let D=b*b-4*a*c;
if(D<0) console.log("Нет решения");
else{
     if(D==0) console.log("1 решение " + (-b/(2*a)));
     else console.log("2 решения " + ((-b-D**(0.5))/(2*a)) + " и " + ((-b+D**(0.5))/(2*a)));
}
let numb=Number(prompt("Задание 1.2\nnumber=", ' '));
let isSimple=true;
for(let i=2;i<numb/2;i++){
    if((numb%i)===0) isSimple=false;
}
if(numb===1)  console.log(false);
else console.log(isSimple);
let n=Number(prompt("Задание 1.3\nn=", ' '));
let sum=0;
for(let i=1;i<=n;i++){
    sum+=1/i;
}
console.log(sum);
numb=Number(prompt("Задание 1.4\nnumber=", ' '));
let rev=0;
while(numb!==0){
    rev*=10;
    rev+=numb%10;
    numb-=numb%10;
    numb/=10;
}
console.log(rev);

function arr1(A){
    let B=[];
    let C=[];
    for(let i=0;i<A.length;i++){
        if(A[i]>0) B.push(A[i]);
        else if(A[i]<0) C.push(A[i]);
    }
    console.log(B);
    console.log(C);
}
function arr2(arr){
    let key=[];
    let amount=[];
    let wasAlready=false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<key.length;j++){
            if(arr[i]===key[j]) {
                wasAlready=true;
                amount[j]++;
            }
        }
        if(!wasAlready){
            key.push(arr[i]);
            amount.push(1);
        }
        else wasAlready=false;
    }
    let str="";
    for(let i=0;i<key.length;i++){
        str+=key[i]+"-"+amount[i];
        if(i!=key.length-1) str+=", ";
    }
    console.log(str);
}
function anagramma(str1, str2){
    let isAnagramma=true;
    if(str1.length!=str2.length) isAnagramma=false;
    else{
        for(let i=0;i<str1.length;i++){
            if(str1[i]!=str2[str2.length-1-i]) isAnagramma=false;
        }
    }
    console.log(isAnagramma);
}

function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true; };
    this.disable = function() { self._enabled = false; };
}
function Fridge(power){
    Machine.call(this, power);
    this._food=[];
    this.addFood = function(...items){
        if(this._enabled==false) console.log("Error, fridge is disabled");
        else{
            for(let i=0;i<items.length;i++){
                if(this._food.length<(this._power/100)) this._food.push(items[i]);
                else console.log("Error, fridge is full");
            }
        }
    }
    this.getFood = function(){
        let newFood=[];
        for(let i=0;i<this._food.length;i++){
            newFood.push(this._food[i]);
        }
        return newFood;
    }
}