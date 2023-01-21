const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
const sign_btn=document.querySelector("#sign");
sign_btn.addEventListener("click",()=>{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let obj={
        email,
        password
    }
    postdata(obj);
})
async function postdata(obj){
    try {
        let res=await fetch("http://localhost:5006/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        let out =await res.json();
        console.log(out);
        sessionStorage.setItem("token",out.token)
        if(out.message=="Login Successful!"){
            alert('You are successfully login!');
            //window.location.href="index.html"
        }else if(out=="Wrong Credentials!"){
            alert('Wrong Credentials!')
        }else{
            alert('Register First!')
        }
    } catch (error) {
        console.log(error);
    }
}