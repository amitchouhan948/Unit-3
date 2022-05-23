function append (){  // function for appending data to add
let data=JSON.parse(localStorage.getItem("products")) ||[];

let container= document.getElementById("all_products")
container.innerHTML=null;

data.forEach(function(el,index){

    let div =document.createElement("div")

    let type=document.createElement("p")
    type.innerText=el.type
    let desc =document.createElement("p")
    desc.innerText=el.desc
    let price =document.createElement("p")
    price.innerText=el.price
    let image=document.createElement("image")
    image.src=el.image
    image.setAttribute("id","image")
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function() {remove(el,index)})

    div.append(type,desc,price,image,btn);
    container.append(div)
})

}
append();

// To remove product from the display

function remove(el,index){


    let data=JSON.parse(localStorage.getItem("products"))||[];
   

    let newdata=data.filter(function(el,i){
        if(i!==index){
            return el;
        }
      
        
    })
    // console.log(data, newdata)

    localStorage.setItem("products",JSON.stringify(newdata))
   append()
}
