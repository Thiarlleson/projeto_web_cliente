
/*
 Exemplo:
 - Cria o cookie 'CookieTeste' com o valor 'HellowWorld!' que irá expirar quando o browser for fechado.
 GerarCookie('CookieTeste', 'HellowWorld!', 0);
 - Lê o conteúdo armazenado no cookie.
 LerCookie('CookieTeste');
 - Exclúi o cookie.
 ExcluirCookie('CookieTeste');
 */

// Função para criar o cookie.
// Para que o cookie seja destruído quando o brawser for fechado, basta passar 0 no parametro lngDias.
function GerarCookie(strCookie, strValor, lngDias)
{

    var dtmData = new Date();

    if(lngDias)
    {
        dtmData.setTime(dtmData.getTime() + (lngDias * 24 * 60 * 60 * 1000));
        var strExpires = "; expires=" + dtmData.toGMTString();
    }
    else
    {
        var strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";

    if(document.cookie.length<=5){
        ExcluirCookie(strCookie);
    }
}

// Função para ler o cookie.
function LerCookie(strCookie)
{
    var strNomeIgual = strCookie + "=";
    var arrCookies = document.cookie.split(';');

    for(var i = 0; i < arrCookies.length; i++)
    {
        var strValorCookie = arrCookies[i];
        while(strValorCookie.charAt(0) == ' ')
        {
            strValorCookie = strValorCookie.substring(1, strValorCookie.length);
        }
        if(strValorCookie.indexOf(strNomeIgual) == 0)
        {
            return strValorCookie.substring(strNomeIgual.length, strValorCookie.length);
        }
    }
    return null;
}

// Função para excluir o cookie desejado.
function ExcluirCookie(strCookie)
{
    GerarCookie(strCookie, '', -1);
}