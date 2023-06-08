

















const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
   //e.target vai informar qual o elemento que está enviando o evento

   const peso = Number(inputPeso.value)
   const altura = Number(inputAltura.value)

  if(!peso){
    setResultado('Peso inválido', false)
    return;
  }

  if(!altura){
    setResultado('Altura inválida', false)
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true)
})

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade I', 'Obesidade II', 'Obesidade III']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5)  return nivel[0];
}

function getImc(peso, altura){
    const imc= peso / altura ** 2
    return imc.toFixed(2) 
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado =document.querySelector('#resultado')
   
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);
    
    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }


    form.addEventListener('reset', function(e){
        resultado.removeChild(p);
    })

}

