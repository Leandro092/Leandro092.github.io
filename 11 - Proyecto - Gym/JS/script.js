// First Day
const firstDay = document.querySelector('.h2-show');
const hidden = document.querySelector('.hidden');
// Second Day
const secondDay = document.querySelector('.h2-show2');
const hidden2 = document.querySelector('.hidden2');
// Third Day
const thirdDay = document.querySelector('.h2-show3');
const hidden3 = document.querySelector('.hidden3')
// Nutritional Food
const fourthDay = document.querySelector('.h2-show4')
const hidden4 = document.querySelector('.hidden4')

firstDay.addEventListener("click", function(){

    //First Day Content

    if(hidden.classList.contains('show')){
        hidden.classList.remove('show')
    }
    else(hidden.classList.add('show'))

    //First Day Design Var

    if(firstDay.classList.contains('active')){
        firstDay.classList.remove('active')
    }
    else(firstDay.classList.add('active'))

    //First Day Design

    if(firstDay.classList.contains('h2-hidden')){
        firstDay.classList.remove('h2-hidden')
    }
    else(firstDay.classList.add('h2-hidden'))
})

secondDay.addEventListener("click", function(){
    if(hidden2.classList.contains('show')){
        hidden2.classList.remove('show')
    }
    else(hidden2.classList.add('show'))

    if(secondDay.classList.contains('active')){
        secondDay.classList.remove('active')
    }
    else(secondDay.classList.add('active'))

    if(secondDay.classList.contains('h2-hidden')){
        secondDay.classList.remove('h2-hidden')
    }
    else(secondDay.classList.add('h2-hidden'))
})

thirdDay.addEventListener("click", function(){
    if(hidden3.classList.contains('show')){
        hidden3.classList.remove('show')
    }
    else(hidden3.classList.add('show'))

    if(thirdDay.classList.contains('active')){
        thirdDay.classList.remove('active')
    }
    else(thirdDay.classList.add('active'))

    if(thirdDay.classList.contains('h2-hidden')){
        thirdDay.classList.remove('h2-hidden')
    }
    else(thirdDay.classList.add('h2-hidden'))
})

fourthDay.addEventListener("click", function(){
    if(hidden4.classList.contains('show')){
        hidden4.classList.remove('show')
    }
    else(hidden4.classList.add('show'))

    if(fourthDay.classList.contains('active')){
        fourthDay.classList.remove('active')
    }
    else(fourthDay.classList.add('active'))

    if(fourthDay.classList.contains('h2-hidden')){
        fourthDay.classList.remove('h2-hidden')
    }
    else(fourthDay.classList.add('h2-hidden'))
})
