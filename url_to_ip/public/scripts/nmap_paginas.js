$(document).ready(function() {
    $('#form_nmap').submit((event) => {
        event.preventDefault();var response = '';

		$.ajax({
            type: "POST",
            url: "/",
            async: false,
            data : {
                urlabuscar : $('#url').val(),
                tipoScan : $('#tiposcan').val()
            }, 
            success: function(data, textStatus, jqXHR) {
				console.log(data);
                $('#resp').append(data);
            },
			error: function(jqXHR, textStatus, errorThorwn) {
				console.log(jqXHR);
				console.log(('Ocurrio un error al llamar a la API: ' + textStatus));
				console.log(errorThorwn);
			}
        });

    })
});