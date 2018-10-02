$(document).ready(function () {

    //Aparecer botones al presionar un paquete
    $("#buttons").hide();

    $(".paqueteBoton").click(function(){
        $("#buttons").show();
    });

    //Esconder modal de editar paquete
    $("#btnAceptar").click(function(){
        $("#modalModificarPaquete").modal("toggle");
    });
    
    function alertar(button) {
      button.on('click', function () {
      alert("Holi :D (OMAR ES GUAPO)");
      });
    }
    alertar($('#alerta'));
    //Esconder menu lateral a presionar click en el menu hamburguesa
    $('#sidebarCollapse').on('click', () => {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#tabla1').DataTable({
      // searching:false,
      dom: 'Bfrtip',
      buttons: [

          {
              extend: 'excel',
              text: 'Exportar a Excel',
              className: 'btn-outline-success mr-3 btnExcel'
          },
          {
              extend: 'pdf',
              text: 'Exportar a pdf',
              className: 'btn-outline-info mr-3 btnPDF'
          }
      ]
    });
    //append y prepend
    $('.btnExcel').prepend("<i class='fas fa-file-excel mr-1'></i>");
    $('.btnPDF').prepend("<i class='far fa-file-pdf mr-1'></i>");

    $('#tabla2').DataTable({
      searching:false
    });

    $('#btn-eliminar').on('click', () => {

        swal({
            title: "¿Estás segura?",
            text: "Una vez eliminado, el paciente y sus datos ya no se podrán recuperar.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((eliminar) => {
                if (eliminar) {



                } else {

                }
            });

    });



});
