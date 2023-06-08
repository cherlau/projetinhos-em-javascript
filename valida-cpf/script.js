const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const cpfInput = e.target.querySelector('#cpf-input');

  const cpf = cpfInput.value;

  if (!cpf) {
    setResultado('Valor informado incorreto', false);
    return;
  }

  const cpfValido = CPFValido(cpf);
  console.log(cpfValido);

  if (cpfValido) {
    setResultado('CPF válido', cpfValido);
  } else {
    setResultado('CPF inválido', cpfValido);
  }
});


function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  form.addEventListener('reset', function(e) {
    resultado.removeChild(p);
  });
}

function CPFValido(cpf) {
  const cpfLimpo = cpf.replace(/\D/g, '');
  const digitosVerificadores = cpfLimpo.slice(-2);
  const cpfSemDigitoVerificador = cpfLimpo.slice(0, -2);
  const numeros = cpfSemDigitoVerificador.split('');
  const numerosNumber = numeros.map(valor => {
    return Number(valor);
  });

  function digito(numerosNumber) {
    let resto = 0;
    let total = 0;
    let numeroMultiplicador = numerosNumber.length + 1;
    for (dig of numerosNumber) {
      total += dig * numeroMultiplicador;
      numeroMultiplicador--;
    }
    resto = total % 11;

    let digito = qualDigito(resto);
    console.log('resto: ', resto);
    console.log('digito: ', digito);
    return digito;
  }

  function qualDigito(resto) {
    if (resto === 0 || resto === 1) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    return resto;
  }

  const digito1 = digito(numerosNumber);
  const cpfComDigito1 = [...numerosNumber, digito1];
  const digito2 = digito(cpfComDigito1);

  let digitosCalculados = `${digito1}${digito2}`;

  return digitosCalculados === digitosVerificadores;
}
