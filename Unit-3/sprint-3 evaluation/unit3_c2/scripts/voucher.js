
function bal(){
    let wallet=JSON.parse(localStorage.getItem("user"))
    let wallentBal=document.getElementById("wallet_balance");
    wallentBal.innerText=wallet.amount;
    
}




async function append(){
let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
try {
let res= await fetch(url);
let data=await res.json();

// console.log(data)
voucher(data[0].vouchers)

} catch(err){
    console.log(err)
}



}


function voucher(d){

let container=document.getElementById("voucher_list");
container.innerHTML=null;
// console.log(d)
d.forEach(function(el){

let div= document.createElement("div")
div.setAttribute("class","voucher")

let image=document.createElement('img')
image.src=el.image;

let title=document.createElement("p");
title.innerText=el.name;

let price=document.createElement("p")
price.innerText=el.price;

let btn=document.createElement("button")
btn.setAttribute("class","buy_voucher");
btn.innerText="Buy";
btn.onclick=() =>{  
    store(el);
}

div.append(image,title,price,btn)
container.append(div)


});

}

function store(el){
   



    let wallet=JSON.parse(localStorage.getItem("user"));
    let balance=wallet.amount;

    let price=(el.price);
    if(balance>=price){
        let vouchersPur=JSON.parse(localStorage.getItem("purchase")) || [];
        let pur=el;
        vouchersPur.push(pur);
     
        localStorage.setItem("purchase",JSON.stringify(vouchersPur));

        let update=balance-price;

        wallet.amount=update;
        console.log(wallet.amount)
        localStorage.setItem("user",JSON.stringify(wallet));

        window.alert("Hurray! purchase successful")
        bal();



    }
    else{
        window.alert("Sorry! insufficient balance")

    }
   

}

bal()
append()





