const input_1=document.getElementById('input');
const input_2=document.getElementById('input2');
const button=document.getElementById('button');
const message=document.getElementById('message-confirm')

button.addEventListener('click', comparePassword)

function comparePassword() {
    
    if (input_1.value===input_2.value ) {
        input_1.style.border= '3px solid green';
        input_2.style.border= '3px solid green';
        message.textContent='CONTRASEÑA CORRECTA'
        message.style.color='green'
    } else {
        input_1.style.border= '3px solid red';
        input_2.style.border= '3px solid red';
        message.textContent='CONTRASEÑA INCORRECTA'
        message.style.color='red'
    }

}