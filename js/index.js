document.getElementById('right-arrow').addEventListener('click', picChangeRight,false);

function picChangeRight () {
    var r = document.getElementsByClassName('photos');
    
    var i;
    for (i=0;i<r.length;i++) {
        r[i].setAttribute('src', 'r[i+1].getAttribute(src)');
    }
}
