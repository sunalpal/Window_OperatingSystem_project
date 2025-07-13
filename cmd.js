const cmdBtn=document.getElementById('cmdLaunch');
const cmdWindow =document.getElementById('cmdWindow')
const cmdInput = document.getElementById("cmdInput");
const cmdOutput = document.getElementById("cmdOutput");

cmdBtn.addEventListener("click",()=>{
    cmdWindow.style.display='block';
     popup.style.display="none"

     cmdInput.focus();
})

cmdInput.addEventListener("keydown",(e)=>{
  if(e.key ==="Enter"){
    const input=this.value.toLowercase();
    let result=`${input}\n`
     
    if(input ==="help"){
        result+="Available commands: help, dir, clear, exit"
    }
    else if(input=== "dir"){
        result+="C:\\\n  Folder1\n  Folder2\n  file.txt"
    }
    else if(input==="clear"){
        cmdOutput.textContent="";
        this.value="";
        return;
    }
    else if(input==="exit"){
        cmdWindow.style.display="none";
        this.value="";
        return;
    }
    else{
        result+="Command not recognised"
    }
  
    cmdOutput.textContent+=result+"\n";
    this.value="";
    cmdOutput.scrollTop=cmdOutput.scrollHeight;
  }
})
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cmdWindow.style.display = "none";
  }
});




