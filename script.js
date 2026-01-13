let b=document.querySelector(".box");

const meth=()=>{
    const date=new Date();
    const timee=date.toLocaleTimeString();
    b.innerText=timee;
}

const showlist=()=>{
    
    setInterval(meth,1000);
}

showlist();







