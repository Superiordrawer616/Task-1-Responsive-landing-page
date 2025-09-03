console.log("Hello World");
flag = false

const btn = document.getElementById('toggle');
const nav = document.getElementById('abc');

btn.addEventListener('click', () => {
    if (!flag){
        nav.style.display = 'block';
        btn.style.color = 'white';
        flag = true
        
    }else{
        nav.style.display = 'none';
        flag = false
        btn.style.color = 'black'
    }
});
