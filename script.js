function check() {
    var input0 = document.getElementById('input0').value;
    var input1 = document.getElementById('input0');
    var updater = document.getElementById('ujumbe')
    var full = document.getElementById('full')
    var button = document.getElementById('check-code')
    var clone = document.getElementById('clone')
    var tryAnother = document.getElementById('try')

    if (input0 == 111) {
        updater.innerHTML = 'Brazzers Premium Video 111.mp4'
        updater.style.color = 'blue'
        full.innerHTML = 'Download Full Video Below 👇'
        clone.style.display = 'block'
        clone.setAttribute('onclick', "location.href='http://google.com'")
        tryAnother.style.display = 'block'
        button.style.display = 'none'
        input1.disabled = true
    }

    else {
        document.getElementById('wrong').style.display = 'block'
    }
}


