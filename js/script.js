document.getElementById('button').addEventListener('click', ()=>{
    const paragraph = document.getElementById('paragraph');
    const input = document.getElementById('input')
    if (input.value == "" || input.value.indexOf('@') == -1 || input.value.indexOf('.') == -1) {
        paragraph.classList.remove('display');
        input.style.border = '1px solid red'
        
    }else{
        paragraph.classList.add('display');
        input.style.border = '1px solid hsl(0, 0%, 59%)'
    }
}); 


