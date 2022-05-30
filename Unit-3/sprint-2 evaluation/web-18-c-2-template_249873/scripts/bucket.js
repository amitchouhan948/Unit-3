// On clicking remove button the item should be removed from DOM as well as localstorage.

append();

function append(){
let amount=0;
let total=document.getElementById("total_amount")
let bucket=document.getElementById("bucket")
bucket.innerHTML=null;
let data= JSON.parse(localStorage.getItem("coffee"));
console.log(data)
data.forEach(function(el,index){

    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image;

    let title=document.createElement("p")
    title.innerText=el.title

    let price=document.createElement("p")
    price.innerText=el.price;
    amount=amount+(+(el.price))

    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        removethisorder(index);

    })

    div.append(image,title,price,btn)
    bucket.append(div)
    total.innerText=amount;
});

}


async function removethisorder(index){

    let data=JSON.parse(localStorage.getItem("coffee"));

    let remCoffee= await data.splice(index,1);

   

    let newdata=data.filter(function(el){

        if(el!==remCoffee){
            return el
        }
    })
    console.log(data)
    localStorage.setItem("coffee",JSON.stringify(newdata));

    append();


}






