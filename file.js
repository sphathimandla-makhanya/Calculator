
let display = document.querySelector('[data-answer]')
let numBtn = document.querySelectorAll('[data-num]')
let operators = document.querySelectorAll('[data-operator]')
let inEquality = document.querySelectorAll('[data-inequality]')
let cancel = document.querySelector('[data-cancel]')
let del = document.querySelector('[data-delete]')
let equal = document.querySelector('[data-equalTo]')
let dot = document.querySelector('[data-dot]')


numBtn.forEach(button=>{
    button.addEventListener('click', function(){
        display.value += button.getAttribute('value')
    })
})

operators.forEach(button=>{
    button.addEventListener('click', function(){
        display.value += button.getAttribute('value')
    })
})
inEquality.forEach(button=>{
    button.addEventListener('click', function(){
        display.value += button.getAttribute('value')
    })
})

cancel.addEventListener('click', function(){
    display.value = ''
})

del.addEventListener('click', function(){
    display.value = display.value.slice(0, -1)
})
dot.addEventListener('click', function(){
    display.value += '.'
})
equal.addEventListener('click', function(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value="error"
    }
})



























