let line = document.querySelector('.imgLine')
let btnRight = document.querySelector('.btnRight')
let btnLeft = document.querySelector('.btnLeft')
let offset = 0

btnRight.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset -= 1000
    console.log(offset);
    if(offset < -4000){
        offset = 0
    }
    line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset -= 350
    console.log(offset);
    if(offset < -1400){
        offset = 0
    }
    line.style.left = offset+ "px"
    }
})

btnLeft.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset += 1000
        console.log(offset);
        if(offset > 0){
            offset = -4000
        }
        line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset += 350
        console.log(offset);
        if(offset > 0){
        offset = -1400
    }
    line.style.left = offset+ "px"
    }
})