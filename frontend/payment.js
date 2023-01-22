const cart_btn=document.getElementById("cart");

const user_btn=document.getElementById("user");


const btn_pay=document.getElementById("btnp");
//console.log(btn_pay);
btn_pay.addEventListener("click",()=>{
  let card=document.getElementById("first").value;
  let valid=document.getElementById("second").value;
  let cvv=document.getElementById("third").value;
  let name=document.getElementById("fouth").value;
  if(card!=""&&valid!=""&&cvv!=""&&name!=""){
    alert(`Your order has been placed successfully!`)
    window.location.href="index.html";
  }else{
    alert(`Please fill all the details!`)
  }
})
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})