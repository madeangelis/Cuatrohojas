
// JS widget Cuatro Hojas
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


//  Popover

$(document).ready(function () {
    $('[data-toggle="popover"]').popover()
});
outputResults();

function outputResults() {
    $("#outputDiv").append(`<div><p>Desarrollamos sistemas agrícolas que aseguren un adecuado retorno en el largo plazo. En base a una alta intensidad de cultivos y adecuada diversidad podemos aumentar la resiliencia de las producciones agrícolas.</p></div>`);
};

$("#agriculture").on('hover',function(){
    $('p').popover("show");
    });