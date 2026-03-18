let saldo = 200;

const $inputSaque = document.getElementById('valorDoSaque');
const $displaySaldo = document.getElementById('saldo');
const $displayMensagem = document.getElementById('mensagem');

$displaySaldo.innerText = saldo;

function realizarSaque() {
        const valorDoSaque = Number ($inputSaque.value); 
        
        if (isNaN(valorDoSaque) || valorDoSaque <= 0) {
            $displayMensagem.innerText = 'Valor inválido!';
            return
        }

          if (valorDoSaque > saldo) {
            $displayMensagem.innerText = 'Saldo insuficiente para realizar o saque.';
            return
        }
     
       saldo = saldo - valorDoSaque.toFixed(2); 
        $displaySaldo.innerText = saldo;

       $displayMensagem.innerText = 'Saque realizado com sucesso!'; 
       
}