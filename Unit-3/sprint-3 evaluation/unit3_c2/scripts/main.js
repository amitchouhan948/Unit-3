function submit(e){
    e.preventDefault();

    let obj={};
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let address=document.getElementById("address").value;
let amount=document.getElementById("amount").value;

obj.name=name;
obj.email=email;
obj.address=address;
obj.amount=amount;

localStorage.setItem("user",JSON.stringify(obj));


document.getElementById("name").value=null;
document.getElementById("email").value=null;
document.getElementById("address").value=null;
document.getElementById("amount").value=null;

}