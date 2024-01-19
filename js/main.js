$(document).ready(function() {

    $('#campo-telefone').mask('(00) 00000-0000' , {
        placeholder: '(00) 00000-0000'
    })
    $('#CPF').mask('000.000.000-00' , {
        placeholder: '000.000.000-00'
    })
    $('#CEP').mask('00000-000'  , {
        placeholder: '00000-000'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            CPF: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            },
            email: {
                required: true
            },
            senha: {
                required: true
            },
            confirmarSenha: {
                required: true,
                equalTo: '#senha'
            }
        }
        ,
        messages: {
            nome: '<span class="campoIncorreto">Faltou nos informar o seu nome.</span>',
            CPF: '<span class="campoIncorreto">Insira o CPF acima.</span>',
            telefone: '<span class="campoIncorreto">Insira o seu telefone acima.</span>',
            endereco: '<span class="campoIncorreto">Insira o seu endereço acima.</span>',
            CEP: '<span class="campoIncorreto">Insira o seu CEP acima.</span>',
            email: '<span class="campoIncorreto">Precisamos do seu e-mail para contato.</span>',
            senha: '<span class="campoIncorreto">Para sua segurança, crie uma senha.</span>',
            confirmarSenha: '<span class="campoIncorreto">As senhas precisam ser iguais.</span>'
        }
    })


})