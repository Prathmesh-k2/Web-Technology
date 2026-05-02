let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    console.log("btn clicked")
    let fact=await getFacts();
    console.log(fact)
})
async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
 
    }
    catch(e){
        console.log("reeor  :",e)
        return "no fact found";
    }
}