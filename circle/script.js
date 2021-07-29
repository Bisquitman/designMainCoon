var num = 4; // Число картинок
var wrap = 400; // Размер "холста" для расположения картинок
var radius = 200; // Радиус нашего круга

$(document).ready(function () {
    for (i = 0; i < num; i++) {
        var f = 2 / num * i * Math.PI; // Рассчитываем угол каждой картинки в радианах
        var left = wrap + radius * Math.sin(f) + 'px';
        var top = wrap + radius * Math.cos(f) + 'px';
        $('#wrap .img').eq(i).css({
            'top': top,
            'left': left
        }); // Устанавливаем значения каждой картинке
    }
});