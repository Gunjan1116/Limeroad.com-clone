const filt=document.querySelector("#Category");
const cont=document.querySelector("#all_data");
const price=document.querySelector("#price");
const search=document.querySelector("#search");
const search_btn=document.querySelector("#search_btn")
search_btn.addEventListener("click",()=>{
  let value=search.value;
  //console.log(value);
  getSearchData(value);
})
price.addEventListener("change",()=>{
  let value=price.value;
  if(value=="Price"){
    getAlldata()
  }else if(value=="HTL"){
      getPriceData(-1)
  }else if(value=="LTH"){
    getPriceData(1)
  }
})
filt.addEventListener("change",()=>{
    //console.log(filt.value);
    let value=filt.value;
    if(value=="category"){
      getAlldata()
    }else{
      getFilterdata(value)
    }
    
})

async function getFilterdata(value){
    try {
      const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens?title=${value}`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(res.ok){
        const out=await res.json();
        console.log(out);
        render(out);
      }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}
async function getAlldata(){
  try {
    const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens`,{
      method:"GET",
      headers:{
          'Content-Type':'application/json'
      }
    })
    if(res.ok){
      const out=await res.json();
      console.log(out);
      render(out);
    }
  } catch (error) {
      console.log(error);
      console.log(error.message);
  }
}
async function getPriceData(value){
  try {
    const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens?sortby=${value}`,{
      method:"GET",
      headers:{
          'Content-Type':'application/json'
      }
    })
    if(res.ok){
      const out=await res.json();
      console.log(out);
      render(out);
    }
  } catch (error) {
      console.log(error);
      console.log(error.message);
  }
}
async function getSearchData(value){
  try {
    const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens?q=${value}`,{
      method:"GET",
      headers:{
          'Content-Type':'application/json'
      }
    })
    if(res.ok){
      const out=await res.json();
      console.log(out);
      render(out);
    }
  } catch (error) {
      console.log(error);
      console.log(error.message);
  }
}
window.addEventListener("load",(e)=>{
  e.preventDefault();
  getAlldata()
})

function render(arr){
  cont.innerHTML=null
  arr.forEach((el)=>{
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.setAttribute("src",el.imageLink);
      img.setAttribute("width","70%")
      let h4=document.createElement("h4");
      h4.innerText="₹"+el.price;
      let p=document.createElement("p");
      p.innerText=el.author;
      let btn=document.createElement("button");
      btn.innerText="Add to Cart";
      btn.addEventListener("click",()=>{
        let obj={
          title:el.title,
          imageLink:el.imageLink,
          price:el.price,
          author:el.author
        }
        addToCart(obj);
      })
      div.append(img,h4,p,btn);
      cont.append(div);
  })
}
async function addToCart(obj){
  const token=sessionStorage.getItem("token");
  if(token==undefined){
    alert("Please login First!")
  }else{
    try {
      const res=await fetch("https://lazy-gold-gopher-wig.cyclic.app/cart/add",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            Authorization:sessionStorage.getItem("token")
        },
        body:JSON.stringify(obj)
      })
      const out=await res.json();
      if(out=="Data add successfully!"){
        alert("Product added to the cart!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}
const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})