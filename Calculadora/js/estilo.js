const botones = document.querySelectorAll('.btn');
const resultado = document.getElementById('resultado');
const color = document.getElementById('color');

botones.forEach(button => {
    button.addEventListener('click', () => {

        const value = button.value;
            if (value == 'CE') {
                resultado.value = '';
                color.style.backgroundColor = '';
            } 

            else {
                resultado.value += value;
                if(resultado.value.length > 6){
                    resultado.value = resultado.value.substring(0, 6);
                }
                color.style.backgroundColor = "#" + resultado.value;
            }
        
        });
});