let input_form_btn=document.querySelector("#all_entry form");
input_form_btn.addEventListener("submit",async (e)=>{
    try {
        e.preventDefault();
        let obj={};
        let all_input_tag=document.querySelectorAll("#all_entry input");
        for(let i=0;i<all_input_tag.length-1;i++){
            obj[all_input_tag[i].id]=all_input_tag[i].value;
        }
        let res=await fetch("http://localhost:3000/userAddressDetails",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(res.ok){
            let out=await res.json();
            console.log(out);
            alert("Address added sucessfully!!")
            
        }
    } catch (error) {
        console.log(error);
    }
   
})

const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
const pay_btn=document.getElementById("pay");
pay_btn.addEventListener("click",()=>{
  window.location.href="payment.html";
})