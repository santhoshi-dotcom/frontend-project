 function highlight(field){
     field.style.backgroundColor="lightgreen";
    }

/* Quote */

function showQuote(){
document.getElementById("donateQuote").style.display="block";
}

function hideQuote(){
document.getElementById("donateQuote").style.display="none";
}

/* Show Form */

function showForm(){
document.getElementById("donationForm").style.display="block";
document.getElementById("donationForm").scrollIntoView({behavior:"smooth"});
}

/* Phone Validation */

function checkNumber(){

let num=document.getElementById("mobile").value;
let msg=document.getElementById("msg");

if(num.length===10){
msg.innerHTML="✔ Correct Number";
msg.style.color="green";
}else{
msg.innerHTML="Enter 10 digit number";
msg.style.color="red";
}

}

/* Food Type */

function selectProduct(){

let pro=document.getElementById("product").value;
let res=document.getElementById("resu");

if(pro==="Vegetarian"){
res.textContent="🥦 Vegetarian Food Selected";
}

else if(pro==="Non-Vegetarian"){
res.textContent="🍗 Non-Vegetarian Food Selected";
}

}

/* Save Donation */

function saveDonation(event){

event.preventDefault();

const formData={

Name:document.querySelector('input[placeholder="Donator Name"]').value,
Phone:document.querySelector('input[placeholder="Phone Number"]').value,
Food:document.querySelector('input[placeholder="Food Name"]').value,
Quantity:document.querySelector('input[placeholder="Quantity (kg / plates)"]').value

};

let donations=JSON.parse(localStorage.getItem("donations")) || [];

donations.push(formData);

localStorage.setItem("donations",JSON.stringify(donations));

alert("Donation Submitted Successfully ❤️");

document.querySelector("form").reset();

}

/* Floating Emojis */

const foods=["🍎","🍕","🍔","🥗","🍞","🍲","🥙" ,"🥘","🍛","🥗","🥕","🥝","🥫"];

setInterval(()=>{

let emoji=document.createElement("div");

emoji.className="emoji";

emoji.innerHTML=foods[Math.floor(Math.random()*foods.length)];

emoji.style.left=Math.random()*100+"%";

document.body.appendChild(emoji);

setTimeout(()=>emoji.remove(),6000);

},1000);

