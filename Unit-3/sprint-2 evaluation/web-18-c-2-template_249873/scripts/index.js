// Add the coffee to local storage with key "coffee"


async function append(){
let url="https://masai-mock-api.herokuapp.com/coffee/menu"

try{

    let res= await fetch(url)
    let data= await res.json();

    // console.log(data)

    menu(data.menu.data);
} catch (err){
    console.log(err)
}




}

function menu(data){
let menu=document.getElementById("menu")

// console.log(data)

data.forEach(function(el){

    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image;

    let title=document.createElement("p")
    title.innerText=el.title

    let price=document.createElement("p")
    price.innerText=el.price;

    let btn=document.createElement("button")
    btn.innerText="Add to Bucket";
    btn.addEventListener("click",function(){
        addToBucket(el)
        bucketcount()
    })


    div.append(image,title,price,btn)

    menu.append(div);

})
    


}


let arr=JSON.parse(localStorage.getItem("coffee")) || [];
function addToBucket(el){

   

    console.log(el);

    let coffeedata=el;
    arr.push(coffeedata)

    localStorage.setItem("coffee",JSON.stringify(arr));




}



function bucketcount(){

    let data=JSON.parse(localStorage.getItem("coffee"));

    let count=document.getElementById("coffee_count")

    count.innerText=(data.length);
}



append()
bucketcount()
