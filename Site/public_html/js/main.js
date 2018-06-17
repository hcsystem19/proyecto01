$(document).ready(function () {
    var estadoLeft = false;
    var estadoRight = false;
    function Animated() {
        $('#btn-l').fadeOut(1000);
        setTimeout(function () {
            $('#btn-l').fadeIn(1000);
        }, 500);
        $('#btn-r').fadeOut(1000);
        setTimeout(function () {
            $('#btn-r').fadeIn(1000);
        }, 500);
    }
    setInterval(Animated, 1000);
    $('#btn-l').click(function () {
        if (estadoLeft === true) {
            $('#left').slideToggle().css({"display":"flex"});
            $(this).removeClass("fas fa-caret-up").addClass("fas fa-caret-down");            
            estadoLeft = false;
        } else {
            $('#left').slideToggle().css({"display":"flex"});
            $(this).removeClass("fas fa-caret-down").addClass("fas fa-caret-up");
            estadoLeft = true;
        }
    });
    $('#btn-r').click(function () {
        if (estadoRight === true) {
            $('#right').slideToggle();
            $(this).removeClass("fas fa-caret-down").addClass("fas fa-caret-up");
            estadoRight = false;
        } else {
            $('#right').slideToggle();
            $(this).removeClass("fas fa-caret-up").addClass("fas fa-caret-down");
            estadoRight = true;
        }
    });
});


