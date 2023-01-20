const filt=document.querySelector("#Category");
const cont=document.querySelector("#all_data")
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
      const res=await fetch(`http://localhost:5006/womens?title=${value}`,{
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
    const res=await fetch(`http://localhost:5006/womens`,{
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
      h4.innerText=el.price;
      let p=document.createElement("p");
      p.innerText=el.author;
      let btn=document.createElement("button");
      btn.innerText="Add to Cart"
      div.append(img,h4,p,btn);
      cont.append(div);
  })
}