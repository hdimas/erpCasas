/*$(document).ready(function () {

    cargaInicial();
    
    $('#a_Guardar').click(function () {
        var _tipo = $('#a_Raza').val();
        var _desc = $('#a_RazaDesc').val();
        var datos = { 'valor' : 'A', 'raza' : _tipo, 'descripcion' : _desc, 'user' : 'hdimas', 'host' : 'local-alux', 'ip' : '127.0.0.1' };
           
        $.ajax({
            type: 'post',
            url: 'service/Raza.php',
            datatype: 'json',
            async: false,
            data: datos,
            success: function (result) {
                alert(result);
            },
            error: AjaxFailed
        });
    });

    $('#c_cboActualiza').on('change', function() {
        var datos = { 'valor' : 'ID', 'id' : this.value };

        $.ajax({
            type: 'post',
            url: 'service/Raza.php',
            datatype: 'json',
            async: false,
            data: datos,
            success: function (result) {
                var r = $.parseJSON(result);
                $('#c_Raza').val(r.Raza[0].raza);
                $('#c_RazaDesc').val(r.Raza[0].descripcion);
            },
            error: AjaxFailed
        });
    });

    $('#c_Guardar').on('click', function(){
        var _raza = $('#c_Raza').val();
        var _desc = $('#c_RazaDesc').val();
        var _id = $('#c_cboActualiza :selected').val();
        var datos = { 'valor' : 'C', 'id' : _id, 'raza' : _raza, 'descripcion' : _desc, 'user' : 'hdimas', 'host' : 'local-alux', 'ip' : '127.0.0.1' };
           
        $.ajax({
            type: 'post',
            url: 'service/Raza.php',
            datatype: 'json',
            async: false,
            data: datos,
            success: function (result) {
                alert(result);
            },
            error: AjaxFailed
        });
    });

    $('#b_cboBaja').on('change', function() {
        var datos = { 'valor' : 'ID', 'id' : this.value };

        $.ajax({
            type: 'post',
            url: 'service/Raza.php',
            datatype: 'json',
            async: false,
            data: datos,
            success: function (result) {
                var r = $.parseJSON(result);
                $('#b_Raza').val(r.Raza[0].raza);
                $('#b_RazaDesc').val(r.Raza[0].descripcion);
            },
            error: AjaxFailed
        });
    });

    $('#b_Guardar').on('click', function(){
        var _id = $('#b_cboBaja :selected').val();
        var datos = { 'valor' : 'B', 'id' : _id, 'user' : 'hdimas', 'host' : 'local-alux', 'ip' : '127.0.0.1' };
           
        $.ajax({
            type: 'post',
            url: 'service/Raza.php',
            datatype: 'json',
            async: false,
            data: datos,
            success: function (result) {
                alert(result);
            },
            error: AjaxFailed
        });
    });
});

function cargaInicial(){
    $.ajax({
        type: 'post',
        url: 'service/Raza.php',
        datatype: 'json',
        cache: false,
        data: { 'valor' : 'T'},
        success: function (result) {
            var r = $.parseJSON(result);
            var $body = $('<tr></tr>');
            var tabla = $('#tblTodos');
            tabla.html("");
            var $header = $('<thead><tr></tr></thead>');
            $header.append($('<th></th>').html("#"));
            $header.append($('<th></th>').html("Raza"));
            $header.append($('<th></th>').html("Descripci&oacute;n"));
            $("#c_cboActualiza").append($("<option></option>").attr("value", "-1").text("[ Seleccione el Tipo ]"));
            $("#b_cboBaja").append($("<option></option>").attr("value", "-1").text("[ Seleccione el Tipo ]"));

            if (r.Raza != null) {
                tabla.append($header);
                var count = 1;
                var $tbody = $('<tbody></tbody>');
                tabla.append($tbody);
                $.each(r.Raza, function (index, item) {
                    var $body = $('<tr></tr>');
                    $body.append($('<td></td>').html(count));
                    $body.append($('<td></td>').html(item.raza));
                    $body.append($('<td></td>').html(item.descripcion));
                    $tbody.append($body);
                    count++;
                    $("#c_cboActualiza").append($("<option></option>").val(item._id.$id).html(item.raza.toUpperCase()));
                    $("#b_cboBaja").append($("<option></option>").val(item._id.$id).html(item.raza.toUpperCase()));
                });
            }
        },
        error: AjaxFailed
    });
}

function AjaxFailed(request, status, error) {
    alert('Error al consultar ' + request.responseText);
}*/