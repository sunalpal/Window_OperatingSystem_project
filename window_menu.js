
    const grid = document.getElementById('startGrid');
document.getElementById('menu').addEventListener("click",()=>{

    
        grid.classList.toggle('show');
      
    console.log("1st one");
 
})


document.getElementById('image').addEventListener("click",()=>{
 grid.classList.remove('show');
 
})


//edge logic

document.getElementById("edgeIcon").addEventListener("click", () => {
    window.open("https://www.microsoft.com/edge", "_blank");
  });