// here we create a next option and previous option button 

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// using event listner we crete  funtion to invoke here 
// for both next and prev 
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})