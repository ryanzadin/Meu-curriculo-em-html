
let container = document.getElementById('container');
let body = document.querySelector('body');
let li1 = document.querySelectorAll('.li1');

container.addEventListener('click', () => {    
    container.classList.toggle('dark');
    body.classList.toggle('dark');
    li1.forEach(li => {
        li.classList.toggle('dark');
    }); 
});