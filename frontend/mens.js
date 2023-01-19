const filt=document.querySelector("#Category");

filt.addEventListener("change",()=>{
    //console.log(filt.value);
    getAlldata(filt.value);
})

async function getAlldata(value){
    try {
      const res=await fetch(`http://localhost:5006/mens?title=${value}`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(res.ok){
        const out=await res.json();
        console.log(out);
        //render(out);
      }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}