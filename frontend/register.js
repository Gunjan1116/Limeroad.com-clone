const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="login.html";
})
const sign_btn=document.querySelector("#sign");
sign_btn.addEventListener("click",()=>{
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let gender=document.querySelector("#gender").value;
    let password=document.querySelector("#password").value;
    let obj={
        name,
        email,
        gender,
        password
    }
    postdata(obj);
})
async function postdata(obj){
    try {
        let res=await fetch("http://localhost:5006/users/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        let out =await res.json();
        console.log(out);
        if(out=="user register successfully!"){
            alert('You have register! Now please login');
            window.location.href="login.html"
        }else{
            alert('Please fill all the details!')
        }
    } catch (error) {
        console.log(error);
    }
}