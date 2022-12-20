var button = document.getElementById ("button");
var square = document.getElementById ("square");
size = 100;
i = 0;
size2 = 50
button.addEventListener('click', function(){
    if (i == 0) {
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        i++
    }    else{    
    square.style.width = size2 + 'px';
    square.style.height = size2 + 'px';
    i--
}

}
)
