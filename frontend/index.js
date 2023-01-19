let cont=document.querySelector("#data");

async function getAlldata(){
    try {
      const res=await fetch("http://localhost:5006/homepageproduct/",{
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
getAlldata()

    
// title:{type:String,require:true},
//     imageLink:{type:String,require:true},
//     author:{type:String,require:true},
//     followers

function render(arr){
    arr.forEach((el)=>{
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        let img=document.createElement("img");
        img.setAttribute("src",el.imageLink);
        img.setAttribute("width","70%")
        let h4=document.createElement("h4");
        h4.innerText=el.author;
        let p=document.createElement("p");
        p.innerText=el.followers;
        div.append(h3,img,h4,p);
        cont.append(div);
    })
}
const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
    