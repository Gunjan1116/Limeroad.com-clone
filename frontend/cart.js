const cart_btn=document.getElementById("cart");
const cont=document.querySelector("#cont");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
const pay_btn=document.getElementById("pay");
pay_btn.addEventListener("click",()=>{
  window.location.href="address.html";
})
async function getAllCartData(){
  const token=sessionStorage.getItem("token");
  if(token==undefined){
    alert("Please login First!")
  }else{
    try {
      const res=await fetch("https://lazy-gold-gopher-wig.cyclic.app/cart/",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            Authorization:sessionStorage.getItem("token")
        },
        
      })
      const out=await res.json();
      render(out);
    } catch (error) {
      console.log(error);
    }
  }
  
}
getAllCartData()
function render(arr){
  cont.innerHTML=null
  document.querySelector("#items").innerText="";
  document.querySelector("#price").innerText="";
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
      btn.innerText="Delete";
      btn.addEventListener("click",()=>{
        deleteReqData(el._id);
      })
      
      div.append(img,h4,p,btn);
      cont.append(div);
  })
  let count=arr.length;
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i].price;
  }
  document.querySelector("#items").innerText=`Count:${count}`
  document.querySelector("#price").innerText=`Total Price:₹${sum}`
}
async function deleteReqData(ID){
  const token=sessionStorage.getItem("token");
  if(token==undefined){
    alert("Please login First!")
  }else{
    try {
      const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/remove/${ID}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:sessionStorage.getItem("token")
        },
        
      })
      const out=await res.json();
      if(out==`Mens data of id ${ID} was deleted successfully!`){
        alert("Product deleted for your cart!");
        getAllCartData()
      }else{
        alert("Something went wrong!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}