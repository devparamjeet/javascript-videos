function demo() {
    var str = "qwertyuiopasdfghjklzxcvbnm@1234567890";
    var len = str.length

    // alert(len)
    var captcha = "";
    for (var i = 0; i <= 5; i++) {
        var rIndex = Math.floor(Math.random()* len)
        var rCh = str.charAt(rIndex)
        captcha = captcha + rCh
    }
    document.querySelector("s").innerText = captcha
}

function handleValidate(){
    var c = document.querySelector("s")
    var v = document.querySelector("input")
    var msg = document.querySelector("b")

    if(c.innerText == v.value.trim()){
        c.style.border = "3px solid green"
        v.style.border = "3px solid green"
        msg.innerText = "valid Captcha Code"
        msg.style.color = "green"
    }
    else{
        c.style.border = "3px solid red"
        v.style.border = "3px solid red"
        msg.innerText = "inValid Captcha Code"
        msg.style.color = "red"
    }
}
window.addEventListener("copy",()=>{
    event.preventDefault()
    alert("Copy Denied")
})