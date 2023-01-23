const cont=document.querySelector("#right");
const search=document.querySelector("#search");
const search_btn=document.querySelector("#search_btn");
const add=document.querySelector("#Add");
add.addEventListener("click",()=>{
    let title=document.getElementById("title").value;
    let imageLink=document.getElementById("imageLink").value;
    let price=document.getElementById("price").value;
    let author=document.getElementById("author").value;
    let obj={
        title,
        imageLink,
        price,
        author
    }
    if(title!=""&&imageLink!=""&&price!=""&&author!=""){
        addNewProduct(obj)
    }else{
        alert(`please fill all the details!`)
    }
})
search_btn.addEventListener("click",()=>{
  let value=search.value;
  //console.log(value);
  getSearchData(value);
})
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
        btn.innerText="Delete";
        btn.addEventListener("click",()=>{
          
          deleteItem(el._id);
        })
        div.append(img,h4,p,btn);
        cont.append(div);
    })
  }
  async function deleteItem(ID){
    
    
      try {
        const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens/remove/${ID}`,{
          method:"DELETE",
          headers:{
              "Content-type":"application/json"
              
          }
          
        })
        const out=await res.json();
        if(out==`Mens data of id ${ID} was deleted successfully!`){
          alert("Product removed!");
          getAlldata()
        }else{
            alert(`Something went wrong!`)
        }
      } catch (error) {
        console.log(error);
      }
    
    
  }
  async function addNewProduct(value){
    try {
      const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/mens/add`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(value)
      })
      if(res.ok){
        const out=await res.json();
        console.log(out);
        if(out==`Data add successfully!`){
            alert(`product added succesfully!`)
            getAlldata()
        }else{
            alert(`Something went wrong!`)
        }
        
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
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="./admin.html";
})