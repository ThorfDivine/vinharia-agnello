alert("Bem-vindo à administração da loja de vinhos, Vinharia Agnelo! Por favor, preencha as informações solicitadas para prosseguir com a organização. \n PS: O sistema abaixo foi feito usando funções, para aderir aos requisitos, esse sistema foi gerado para demonstrar somente com alert, console.log e prompt");

let vinhoPromt = prompt("digite o nome do vinho Agnello")
let tipoVinho = prompt("Digite o tipo de vinho (Tinto, Branco, Rosé):")
let safraVinho = prompt("Digite a safra do vinho (ano):")
let quantidadeVinho = prompt("Digite a quantidade em estoque:")

alert("As informações do vinho foram registrados com sucesso! \n As informações foram resgistradas no console para conferência, caso queira alterar, basta atualizar a página ou clicar novamente em 'Loja'e preencher novamente as informações.")
console.log("Informações do Vinho:");
console.log("Nome do vinho: " + vinhoPromt);
console.log("Tipo de vinho: " + tipoVinho);
console.log("Safra do vinho: " + safraVinho);
console.log("Quantidade em estoque: " + quantidadeVinho);


var nomeCompleto = "";
var quantidade = "";
var email = "";
var telefone = "";
var endereco = "";
var vinho = "";
var formaDePagamento = "";
var valor = 0;

function informarNome(){
    nomecompleto = prompt("Digite seu nome completo:");
    alert("Nome completo informado: " + nomecompleto);
    document.getElementById("nome_completo").innerHTML = nomecompleto;
}
 
function informarQuantidade(){
    quantidade = prompt("Digite a quantidade desejada:");
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido para a quantidade.");
        return informarQuantidade(); 
    }
    alert("Quantidade informada: " + quantidade);
    document.getElementById("quantidade").innerHTML = quantidade;
}

function informarEmail(){
    email = prompt("Digite seu e-mail:");
    alert("E-mail informado: " + email);
    document.getElementById("email").innerHTML = email;
}

function informarTelefone(){
    telefone = prompt("Digite seu telefone:");
    alert("Telefone informado: " + telefone);
    document.getElementById("telefone").innerHTML = telefone;
}

function informarEndereco(){
    endereco = prompt("Digite seu endereço:");
    alert("Endereço informado: " + endereco);
    document.getElementById("endereco").innerHTML = endereco;
}   

function informarVinhoEscolhido(){
    vinho = prompt("Digite o nome do vinho desejado (1 , 2 ou 3), em caso de dúvida, acesse a página de vinhos:");
    if (vinho === "1") {
        vinho = "Agnello Branco";
        valor = 89.90;
    } else if (vinho === "2") {
        vinho = "Agnello Tinto";
        valor = 79.90;
    } else if (vinho === "3") {
        vinho = "Agnello Rosado";
        valor = 69.90;
    }
    else{
        alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        return informarVinhoEscolhido(); 
    }
    alert("Vinho informado: " + vinho);
    document.getElementById("vinho").innerHTML = vinho;   
}   

function informarFormaPagamento(){
    formaDePagamento = prompt("Digite a forma de pagamento desejada credito, debito ou pix:");
    alert("Forma de pagamento informada: " + formaDePagamento);
    document.getElementById("formaDePagamento").innerHTML = formaDePagamento;
}

function confirmarCompra() {
    if (nomecompleto === "" || quantidade === "" || email === "" || telefone === "" || endereco === "" || vinho === "" || formaDePagamento === "") {
        alert("Por favor, preencha todos os campos antes de confirmar a compra.");
        return;
    }
    else{
        document.getElementById("resumo_vinho").innerHTML = vinho;
        document.getElementById("resumo_quantidade").innerHTML = quantidade;
        document.getElementById("resumo_preco").innerHTML = "R$ " + valor.toFixed(2);
        document.getElementById("resumo_total").innerHTML = "R$ " + (valor * parseInt(quantidade)).toFixed(2);
        alert("Compra confirmada com sucesso! \n nota fiscal enviada para o console");
        console.log("Resumo da Compra:");
        console.log("Nome completo: " + nomecompleto);
        console.log("Quantidade: " + quantidade);
        console.log("E-mail: " + email);
        console.log("Telefone: " + telefone);
        console.log("Endereço: " + endereco);
        console.log("Vinho escolhido: " + vinho);
        console.log("Forma de pagamento: " + formaDePagamento);
        console.log("Preço unitário: R$ " + valor.toFixed(2));
        console.log("Total da compra: R$ " + (valor * parseInt(quantidade)).toFixed(2));
    }
}