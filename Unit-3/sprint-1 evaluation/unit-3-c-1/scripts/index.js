//store the products array in localstorage as "products"
function AddProducts(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}


function storedata(e){
    e.preventDefault();

    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let product1= new AddProducts(type,desc,price,image)

    let data=JSON.parse(localStorage.getItem("products")) || [];

    data.push(product1);
   

    localStorage.setItem("products",JSON.stringify(data));
    form.type.value=null;
    form.desc.value=null;
    form.price.value=null;
    form.image.value=null;


}