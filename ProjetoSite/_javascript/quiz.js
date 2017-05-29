//Começo de Tudo

var nome = LerCookie("nome");


if(nome==null) {
    alert("Para responder o Quiz,tem que cadastrar primeiro!");
    window.location.href ="cadastro.html";
}


var acertos ;
var nQuestao ;

function iniciar(){

    acertos = 0;
    nQuestao = 1;

    document.getElementById("acertos").innerHTML = "<h1>"+acertos.toString()+"</h1>";
    document.getElementById("numeroQuestao").innerHTML = "<h1>"+ (nQuestao++).toString()+"</h1>";
    document.getElementById("questao").innerHTML = "<h1>Se não fosse o Estado , quem iria nos roubar?</h1>" + "<br/> <br/> <br/>" +
        "<button class='botao' onclick=respostaCerta('q1') id='q1'>Ninguém</button><br/>" +
        "<button class='botao' onclick=respostaErrada('q2') id='q2' >Eu</button><br/>" +
        "<button class='botao' onclick=respostaErrada('q3') id='q3' >Lula</button><br/>";
    document.getElementById("Inicio").innerHTML = "";
    document.getElementById("mostrarBotao").innerHTML = "";
    document.getElementById("msgTela").innerHTML = "";

}

function nxt1(){

    document.getElementById("questao").innerHTML = "<h1>Quem foi Karl Marx?</h1>" +
        "<br /><br /><br />" +
        "<button class='botao' onclick=respostaErrada('q4')  id='q4'>Grande Filosofo</button><br />" +
        "<button class='botao' onclick=respostaErrada('q5')  id='q5'>Economista (hahahaha)</button><br />" +
        "<button class='botao' onclick=respostaCerta('q6')  id='q6'>Encantador de Burros</button><br />";
    document.getElementById("mostrarBotao").innerHTML = "";
    document.getElementById("numeroQuestao").innerHTML = "<h1>"+ (nQuestao++).toString()+"</h1>";

}

function nxt2(){

    document.getElementById("questao").innerHTML = "<h1>O Estado é realmente necessário?</h1>"+
        "<br /><br /><br />" +
        "<button class='botao' onclick=respostaErrada('q7')  id='q7'>Só para minarquistas</button><br />" +
        "<button class='botao' onclick=respostaErrada('q8')  id='q8'>É um mal necessário</button><br />" +
        "<button class='botao' onclick=respostaCerta('q9')  id='q9'>Só se for no mundo dos unicórnios</button><br />";
    document.getElementById("mostrarBotao").innerHTML = "";
    document.getElementById("numeroQuestao").innerHTML = "<h1>"+(nQuestao++).toString()+"</h1>";
}

function nxt3() {

    document.getElementById("questao").innerHTML = "<h1>Porque Esquerdista sempre joga culpa na sociedade?</h1>" +
        "<br /><br /><br />" +
        "<button class='botao' onclick=respostaErrada('q10')  id='10'>São uns idiotas úteis</button><br />" +
        "<button class='botao' onclick=respostaErrada('q11')  id='11'>Feministo kkkkkkkkk</button><br />" +
        "<button class='botao' onclick=respostaCerta('q12')  id='12'>Porque eles nao produzem nada e no futuro serão uma carga para a sociedade</button><br />";
    document.getElementById("mostrarBotao").innerHTML = "";
    document.getElementById("numeroQuestao").innerHTML = "<h1>"+(nQuestao++).toString()+"</h1>";

}


function respostaCerta(aid) {

    document.getElementById("acertos").innerHTML = "<h1>"+(++acertos).toString()+"</h1>";
    document.getElementById("questao").innerHTML = "<h1>Correto!!!</h1>";
    document.getElementById("Inicio").innerHTML = "";

    switch (aid) {

        case "q1":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt1()>Seguinte</button> <br/>";
            break;

        case "q6":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt2()>Seguinte</button> <br/>";
            break;

        case "q9":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt3()>Seguinte</button> <br/>";
            break;

        case "q12":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=final()>Resultado</button> <br/>";
            break;
    }


}

function respostaErrada(aid) {

    document.getElementById("questao").innerHTML = "<h1>Incorreto!!!</h1>";
    document.getElementById("Inicio").innerHTML = "";

    switch (aid){

        case "q2":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt1()>Seguinte</button> <br/>";
            break;

        case "q3":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt1()>Seguinte</button> <br/>";
            break;

        case "q4":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt2()>Seguinte</button> <br/>";
            break;

        case "q5":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt2()>Seguinte</button> <br/>";
            break;

        case "q7":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt3()>Seguinte</button> <br/>";
            break;

        case "q8":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=nxt3()>Seguinte</button> <br/>";
            break;

        case "q10":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=final()>Resultado</button> <br/>";
            break;

        case "q11":
            document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=final()>Resultado</button> <br/>";
            break;

    }


}

function final() {
    document.getElementById("questao").innerHTML = "";
    document.getElementById("msgTela").innerHTML = "<h1>Parabéns, você terminou o Quiz</h1>";
    document.getElementById("mostrarBotao").innerHTML = "<button class='botao' onclick=iniciar()>Reiniciar</button> <br/>";
}



