$(document).ready(function() {
    $("#mostrarmodal").modal("show");

});



// Menu segundario

$(function() {
    $('#mostrar-menu').on('click', function() {
        $('.menu-principal').toggleClass('mostrar-menu-principal');
        $('#top').toggleClass('visible');
    });

    $('#mostrar-menu-secundario').on('click', function() {
        $('.menu-secundario').toggleClass('mostrar-menu-secundario');
    });

    $('.reproductor__play').on('click', function() {
        $(this).children('button')
            .toggleClass('play')
            .toggleClass('pause');
    });

});