const body_right=document.querySelector("#body_right");

const user_detais_btn=document.querySelector("#user_detais");
user_detais_btn.addEventListener("click",()=>{
    getAlluserData();
})

async function getAlluserData(){
    try {
        const res=await fetch("http://localhost:5006/users/",{
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
function render(arr){
    arr.forEach((el)=>{
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText="Name:"+el.name;
        let h4=document.createElement("h4");
        h4.innerText="Email:"+el.email;
        let p=document.createElement("p");
        p.innerText="Gender:"+el.gender;
        let delete_btn=document.createElement("button");
        delete_btn.innerText="Delete";
        
        div.append(h3,h4,p,delete_btn);
        body_right.append(div);
    })
}