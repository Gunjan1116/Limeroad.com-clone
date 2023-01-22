const body_right=document.querySelector("#body_right");

const user_detais_btn=document.querySelector("#user_detais");
user_detais_btn.addEventListener("click",()=>{
    getAlluserData();
})
const user_address_btn=document.querySelector("#user_address");
user_address_btn.addEventListener("click",()=>{
    getAlluserAddress();
})
const search_btn=document.querySelector("#search_btn")
search_btn.addEventListener("click",()=>{
  let value=search.value;
  //console.log(value);
  getSearchData(value);
})
async function getAlluserData(){
    try {
        const res=await fetch("https://lazy-gold-gopher-wig.cyclic.app/users/",{
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
getAlluserData();
async function getAlluserAddress(){
    try {
        const res=await fetch("https://lazy-gold-gopher-wig.cyclic.app/address/",{
          method:"GET",
          headers:{
              'Content-Type':'application/json',
              Authorization:sessionStorage.getItem("token")
          }
        })
        if(res.ok){
          const out=await res.json();
          if(out.length!=undefined){
            console.log(out);
            renderAddress(out);
          }else{
            alert("please login first!")
          }
          
        }
      } catch (error) {
          console.log(error);
          console.log(error.message);
      }
}
function render(arr){
    body_right.innerHTML=null;
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
        delete_btn.addEventListener("click",()=>{
            if(el.email=="gunjan@gmail.com"){
                alert("You are not authorized!");
            }else{
                deleteReqData(el._id);
            }
            
        })
        div.append(h3,h4,p,delete_btn);
        body_right.append(div);
    })
}
async function deleteReqData(ID){
    try {
        const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/users/remove/${ID}`,{
          method:"DELETE",
          headers:{
              'Content-Type':'application/json',
              
          }
        })
        if(res.ok){
          const out=await res.json();
          if(out==`user of id${ID} is deleted`){
            console.log(out);
            alert(`User deleted!`)
            render(out);
          }else{
            alert("please login first!")
          }
          
        }
      } catch (error) {
          console.log(error);
          console.log(error.message);
      }
}

function renderAddress(arr){
    body_right.innerHTML=null;
    arr.forEach((el)=>{
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText="Name:"+el.name;
        let h4=document.createElement("h4");
        h4.innerText="MobileNo:"+el.mobileno;
        let p=document.createElement("p");
        p.innerText="FlatNo:"+el.flatno;
        let p1=document.createElement("p");
        p1.innerText="Area:"+el.area;
        let p2=document.createElement("p");
        p2.innerText="Landmark:"+el.landmark;
        let p3=document.createElement("p");
        p3.innerText="City:"+el.city;
        let p4=document.createElement("p");
        p4.innerText="State:"+el.state;
        let p5=document.createElement("p");
        p5.innerText="Pincode:"+el.pincode;
        let p6=document.createElement("p");
        p6.innerText="Country:"+el.country;
        div.append(h3,h4,p,p1,p2,p3,p4,p5,p6);
        body_right.append(div);
    })
}
async function getSearchData(value){
    try {
      const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/users?q=${value}`,{
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
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="admin.html";
})