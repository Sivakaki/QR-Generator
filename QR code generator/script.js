const url = document.getElementById("qrtext");
const btn = document.getElementById("btn");
const imgBox = document.getElementById("imgBox");
const img = document.getElementsByTagName("img")[0];
const err = document.getElementById("errorid");

function generateQR(){
    let link = url.value.trim();
    if(link === ""){
        err.innerHTML = "Please Enter Text or a URL";
        return;
    }
    err.innerHTML = "";
    
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

    img.onload = () => {
        imgBox.style.display = "block";
    };
}

btn.addEventListener('click',generateQR);

url.addEventListener('keypress',(e)=>{
    if(e.key === "Enter"){
        generateQR();
    }
});