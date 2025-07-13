const contextMenu=document.getElementById("contextMenu")

window.addEventListener("contextmenu",function(e){

e.preventDefault();


const menuWidth=contextMenu.offsetWidth;
const menuHeight=contextMenu.offsetHeight;
const winWidth=this.window.innerWidth;
const winHeight=this.window.innerHeight;
let x = e.pageX;
let y = e.pageY;   
if (x + menuWidth > winWidth) {
    x = winWidth - menuWidth - 10;
}

if (y + menuHeight > winHeight) {
    y = winHeight - menuHeight - 10;
}

contextMenu.style.left=`${x}px`
contextMenu.style.top=`${y}px`
contextMenu.style.display="block";
})

window.addEventListener("click",()=>{
  contextMenu.style.display="none";
  
})


const newBtn = document.getElementById("newBtn");
const newSubmenu = document.getElementById("newSubmenu");

newBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent click from hiding it
  newSubmenu.style.display =
    newSubmenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function () {
  contextMenu.style.display = "none";
  newSubmenu.style.display = "none";
});


