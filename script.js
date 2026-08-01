const input=document.getElementById("imageInput");

const preview=document.getElementById("preview");

const status=document.getElementById("status");

input.addEventListener("change",function(){

const file=this.files[0];

if(!file)return;

preview.src=URL.createObjectURL(file);

preview.style.display="block";

status.innerText="Image Loaded";

});

function convertImage(){

status.innerText="Converting...";

setTimeout(()=>{

status.innerText="Done! (Image Processing Coming Soon)";

},1000);

}
