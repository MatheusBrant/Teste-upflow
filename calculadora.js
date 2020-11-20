//Função que realiza a soma quando requisitada a operação
function soma() {

    let somaNova = 0;
    let valores = $("input.lacunas");
    camposCompletos = true;

    for(let i = 0; i < valores.length; i++) {
        if($(valores[i]).val() == '') {
            //Evita que campos não preenchidos ou preenchidos incorretamente sejam adicionados a operação
            alert("Existem lacunas não preenchidas ou preenchidas incorretamente");
            camposCompletos = false;
        } 
        //Cálculo da soma considerando valores ponto flutuante
        else {
            somaNova = parseFloat($(valores[i]).val()) + somaNova;
        }
    }
    //Se os campos estiverem corretos imprime o valor resultado
    if(camposCompletos == true) {
        document.getElementById("print").innerHTML = parseFloat(somaNova);
    }

}
//Função que realiza a subtração quando requisitada a operação
function subtracao() {

    let valores = $("input.lacunas");
    let subNova = parseFloat($(valores[0]).val());
    camposCompletos = true;

    for(let i = 0; i < valores.length; i++) {    
        if($(valores[i]).val() == '') {
            alert("Existem lacunas não preenchidas ou preenchidas incorretamente");
            camposCompletos = false;
        } 
        else {
            subNova = subNova - parseFloat($(valores[i]).val());
            
        }
    }
    //Se os campos estiverem corretos imprime o valor resultado
    if(camposCompletos == true) {
        document.getElementById("print").innerHTML = parseFloat(subNova) + parseFloat($(valores[0]).val());
    }

}
//Função que limpa os campos quando requisitada
function limpar(){

    let valores = $("input.lacunas");

    for(let i = 0; i < valores.length; i++) {
        $(valores[i]).val('');
    }
    document.location.reload(true);

}
//Função que faz a verificação da quantidade de entrada digitada
function controleEntrada() {
    
    //Variáveis para controle da entrada
    for(let i=0; i<$("#number_of_inputs").val(); i++) {
        if($("#number_of_inputs").val() >= 2 ) {
            $("<input type='number' class='lacunas form-control' style='width: 15%; margin-left: 43%; text-align: center'>").insertAfter(".input-group");
        }
        //Condição para que o usuário não insira valores menores que 2
        else{
            alert("Quantidade de entradas permitidas é no mínimo 2");
        }
    }
    if($("#number_of_inputs").val() >= 2 ) {
        $("#number_of_inputs").val('');
        if($("#calculate_soma").length == 0) {
            $("div#soma").append("<button id='calculate_soma' onclick='soma()'>Somar</button>");
        }
        if($("#calculate_subtracao").length == 0) {
            $("div#subtracao").append("<button id='calculate_subtracao' onclick='subtracao()'>Subtrair</button>");
        }
        if($("#calculate_limpar").length == 0) {
            $("div#limpar").append("<button id='calculate_limpar' onclick='limpar()'>Limpar</button>");
        }
    }
    
    //Checa se existe o typeNumber 'e' na entrada das operações
    $(".lacunas").on('keydown', function(e) {
        if (e.keyCode== 69) {
        e.preventDefault();
        }
    })
    
}