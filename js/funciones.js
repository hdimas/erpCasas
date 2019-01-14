function _ajax(url, datos)
{
    var res;
    $.ajax({
        type: 'post',
        url: 'service/Raza.php',
        datatype: 'json',
        cache: false,
        async: false,
        data: { 'valor' : 'T'},
        success: function (result) {
            return result;
        },
        error: AjaxFailed
    });
}

function AjaxFailed(request, status, error) {
    return 'Error al consultar ' + request.responseText;
}

$(document).ready(function () {
    $('#lnkCerrar').on('click', function(){
        $('.menu-mobile').hide('slow');
    });

    $('#mobile-collapse').on('click', function(){
        $('.menu-mobile').show('slow');
    });
});

