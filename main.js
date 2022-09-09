
function Ranum(){
document.getElementById("Ranum").innerHTML =
Math.floor(Math.random() * 200);
}



function backcolor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var updt = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = updt;   
}
    console.log()




