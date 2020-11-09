var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()


document.getElementById('yaLeo').innerHTML = leo + "/"+ mwezi + "/" + mwaka

function changingCode() {
    var kosa = document.getElementById('wrong')
    var kosaStyle = document.getElementById('wrong').style.display
    if (kosaStyle == 'block') {
        kosa.style = 'none'
    }
}