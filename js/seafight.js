function ClearBoard() {
     $('#board').empty();
}

function CreateBoard() {

// количество клеточек в строке
var n = $('#boxes-Width').val();

// количество строк клеточек
var m = $('#boxes-Height').val();


for (var j = 1; j <= m; j++) {

for (var i = 1; i <= n; i++)
{
     var htmlForCanvas = '<canvas id="canvas-'+ j + '-' + i +'" width="100" height="100"></canvas>';
     $('#board').append(htmlForCanvas);


     var ctx = document.getElementById('canvas-'+ j + '-' + i).getContext('2d');
     var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
     radgrad.addColorStop(0.8, '#ffffff');
     radgrad.addColorStop(0.9, '#000000');
     radgrad.addColorStop(1, 'rgba(0, 0, 0,0)');
     ctx.fillStyle = radgrad;
     ctx.fillRect(0,0,100,100);

}

    var htmlForbr = '<br/>';
    $('#board').append(htmlForbr);

}

}

/*

var elem = document.getElementById('myCanvas4');

var context = elem.getContext('2d');

if (context) {

    context.lineWidth = 4;

    context.beginPath();
    context.moveTo(100, 10);
    context.lineTo(10, 100);
    context.lineTo(100, 10);
    context.moveTo(10, 10);
    context.lineTo(100, 100);
    context.lineTo(10, 10);

    context.stroke();
    context.closePath();
}

*/

function Start() {

$('canvas').click(function () {
    $('#show-1').show('slow');
});

$('#start').click(function () {
    $('#game-params').slideUp();
    ClearBoard();
    CreateBoard();
    return false;
});

$("#show-start").slideDown('fast');

}

$(function () {
     Start();
});



