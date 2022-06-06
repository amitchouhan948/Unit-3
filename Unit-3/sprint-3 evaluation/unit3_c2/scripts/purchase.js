


function bal(){
    let wallet=JSON.parse(localStorage.getItem("user"))
    let wallentBal=document.getElementById("balance");
    wallentBal.innerText=wallet.amount;
    
}

function append(){

    let data= JSON.parse(localStorage.getItem("purchase"))
    let container=document.getElementById("purchased_vouchers")
    data.forEach(function(el){

        let div= document.createElement("div")
        
        let image=document.createElement('img')
        image.src=el.image;
        
        let title=document.createElement("p");
        title.innerText=el.name;
        
        let price=document.createElement("p")
        price.innerText=el.price;

        div.append(image,title,price)
        container.append(div)      

});

}








bal()
append();