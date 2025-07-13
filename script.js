// logic for calender 

let userSelected=false;
function updateDateTime(){ 
  if(userSelected)return;
const now =new Date();
let hours=now.getHours().toString().padStart(2,'0');

let minutes=now.getMinutes().toString().padStart(2,'0');


document.getElementById('time').innerText=`${hours}:${minutes}`;

let day=now.getDate().toString().padStart(2,'0');
let month=(now.getMonth()+1).toString().padStart(2,'0');
let year=now.getFullYear();
document.getElementById('date').innerText=`${day}-${month}-${year}`
}
setInterval(updateDateTime,1000);
updateDateTime();

document.getElementById("dateTimeBtn").addEventListener("click",()=>{
  document.getElementById("picker").click();
})










//search bar functionality 

const btn=document.getElementById('searchBtn');
const img=document.querySelector('#image')
const popup=document.querySelector('.search-section')
btn.addEventListener('click',()=>{
popup.style.display= popup.style.display==="none"?"block":"none";
    
})
img.addEventListener('click',()=>{
    popup.style.display="none"
     cmdWindow.style.display = "none";
})





// CMD logic 


const cmdBtn = document.getElementById('cmdLaunch');
const cmdWindow = document.getElementById('cmdWindow');
const cmdInput = document.getElementById('cmdInput');
const cmdOutput = document.getElementById('cmdOutput');
// const popup = document.querySelector('.search-section'); // ✅ ADDED

cmdBtn.addEventListener("click", () => {
  cmdWindow.style.display = 'block';
  popup.style.display = "none";
  cmdInput.focus();
});

cmdInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const input = e.target.value.toLowerCase();
    let result = `> ${input}\n`;

    if (input === "help") {
      result += "Available commands: help, dir, clear, exit";
    } else if (input === "dir") {
      result += "C:\\\n  Folder1\n  Folder2\n  file.txt";
    } else if (input === "clear") {
      cmdOutput.textContent = "";
      e.target.value = "";
      return;
    } else if (input === "exit") {
      cmdWindow.style.display = "none";
      e.target.value = "";
      return;
    } else {
      result += "Command not recognised";
    }

    cmdOutput.textContent += result + "\n";
    e.target.value = "";
    cmdOutput.scrollTop = cmdOutput.scrollHeight;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cmdWindow.style.display = "none";
  }
});


//goto pages logic 
const git=document.getElementById("Github")
git.addEventListener("click",()=>{
  window.location.href="https://github.com/dashboard"
})
const brave=document.getElementById("brave")
brave.addEventListener("click",()=>{
  window.location.href="https://brave.com/home"
})
const linkedin=document.getElementById("linkedin")
linkedin.addEventListener("click",()=>{
  window.location.href="https://www.linkedin.com/feed/"
})






/////Refresh button

const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload(); // ⟳ refreshes the page
});



///folder logic 
document.getElementById("file").addEventListener("click",()=>{
 const newbtn= document.createElement('button')
    newbtn.innerHTML='<i class="fas fa-file"></i> I am a new button';
})