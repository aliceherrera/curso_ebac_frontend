let form = document.getElementById('form-transfer'); //seleciona o formulário
let agencia = document.getElementById('agency');
let conta = document.getElementById('account');
let formEValido = false;

console.log(agencia);

function compareNumbers(num1, num2) {
    let valida = num2>num1
    return valida;
}

console.log(conta.type)
console.log(agency.type)
console.log (compareNumbers (agencia.value.length, conta.value.length)); 

form.addEventListener('submit', function(e) {
    e.preventDefault(); //removendo recarregamento automarico da página

    const mensagemSucesso = `Transferencia no valor de: <b>${value.value} reais</b> feita para o CPF: <b>${cpf.value}</b>`;

    formEValido = compareNumbers(agencia.value.length, conta.value.length)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        conta.style.border = '';
        document.querySelector('.error-message').style.display = 'none';

        cpf.value = '';
        agency.value = '';
        account.value = '';
        value.value = '';
        description.value = '';
    }

    else {
        conta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

conta.addEventListener('input', function (e) { 
    formEValido = compareNumbers(agencia.value.length, conta.value.length)

    if (!formEValido) {
        conta.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
    else {
        conta.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});