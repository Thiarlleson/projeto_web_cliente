
var contadorQuestaoAtual = 0;
var xmldocstr;
var contadorRespostaCorreta = 0;
var getValor;
var arrayResposta = new Array();


function carregarAjax() {

    /* var xmlhttp; // variavel para armazenar o objeto ajax

    // todos os browsers exceto o internet explorer
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
    // armazena o objeto ajax do internet explorer
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // funcao assincrona que espera a resposta
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var dataxml = xmlhttp.responseText;
            xmldocstr = carregarStringXML(dataxml);
            displaychild(xmldocstr);
        }
    }

    xmlhttp.open("GET", "quiz.xml", true);
    xmlhttp.send();
    */

    // requisição ajax via Jquery
    $.ajax({
        type: "GET",
        url: "quiz.xml",
        dataType: "text",
        success: function (resposta) {
            var dataxml = resposta;
            xmldocstr = carregarStringXML(dataxml);
            displaychild(xmldocstr);
        }

    });
}


// pegar o arquivos das questões como texto e devolve como objeto DOM para a manipulação posterior
function carregarStringXML(str) {

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(str, "text/xml");
        return xmlDoc;
}


// responsavel por montar o texto da questão atual e suas opções e dar o devido prosseguimento do codigo
function displaychild(newxmldoc) {


    document.getElementById("prxBotao").disabled = true;

    if (document.getElementById("prxBotao").innerHTML == "Reiniciar") {
        document.getElementById("prxBotao").disabled = false;
        document.getElementById("prxBotao").onclick = ShowResult();
        $("#prxBotao").addClass("btn-danger").removeClass("btn-success").click(function () {
            window.location.href = "quiz.html";
        });
    }
    else {

        var questao = newxmldoc.getElementsByTagName("question"); // referencia para a Tag question

        // texto da questão
        var textoQuestao = newxmldoc.getElementsByTagName("question_text")[contadorQuestaoAtual].childNodes[0].nodeValue;


        // setar texto da questao no display
        document.getElementById("questoes").innerHTML = textoQuestao;
        document.getElementById("opcoes").innerHTML = "";

        // Tags textos das questões
        var answer = newxmldoc.getElementsByTagName("question_text");
        //Tags opções de cada pergunta
        var optiontext = newxmldoc.getElementsByTagName("option");


        var indexDaResposta = answer[contadorQuestaoAtual].getAttribute("answer");
        arrayResposta[contadorQuestaoAtual] = questao[contadorQuestaoAtual].getElementsByTagName("option")[indexDaResposta - 1].textContent;

        //display do radio buttons , aqui se cria as li que são radio buttons e adiciona na lista ul na questao atual
        for (i = 0; i < optiontext.length; i++) {

            var textoOpcoes = questao[contadorQuestaoAtual].getElementsByTagName("option")[i].textContent;

            var radioBtn = $('<li class="list-group-item" id="item_li"><input name="r1" type="radio" value="' +
                textoOpcoes + '" onclick="btnRadioButton(this.value)"/><label>' + textoOpcoes + '</label></li>');

            radioBtn.appendTo('#opcoes');

        }
    }

}


// Ativa o botão proximo somente depois de apertar em um radio button
function btnRadioButton(setValor) {

    document.getElementById("prxBotao").disabled = false;
    getValor = setValor;
}

//Ativado quando o botão proximo é apertado
function btnProximo() {

    $("#conteiner").animate({ height: '0px', opacity: '0.5' }, "slow");


    $("#conteiner").animate({ height: '250px', opacity: '1' }, "slow");


    // se a opção escolhida estiver correta , entao incrementa o numero de respostas corretas
    if (getValor == arrayResposta[contadorQuestaoAtual]) {
        contadorRespostaCorreta = contadorRespostaCorreta + 1;
    }

    //incrementa o numero da questao
    contadorQuestaoAtual = contadorQuestaoAtual + 1;

    var questao = xmldocstr.getElementsByTagName("question");

    // confere se chegou no final do quiz , se sim mudar o nom do botao proximo para resultado
    if (questao.length == (contadorQuestaoAtual)) {
        document.getElementById("prxBotao").innerHTML = "Reiniciar";
    }

    displaychild(xmldocstr);
}


// mostra a div do resultado com os numeros de questoes e acertos
function ShowResult() {

    document.getElementById("resultado").style.display = "block";
    document.getElementById("numerodequestoes").innerHTML = contadorQuestaoAtual;
    document.getElementById("numeroderespostascorretas").innerHTML = contadorRespostaCorreta;

}
