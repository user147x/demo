var i = 0;
var Timer;

$(".close").click(function() {
    $("#banner").addClass('hide');
    $(".init>img").show();
});
$(".init>img").click(function() {
    $("#banner").removeClass('hide');
    i = $(this).index();
    clearInterval(Timer);
    showPic();
    $(".init>img").hide();
})
$(function() {
    $(".picImg").eq(0).show().siblings().hide();
    TimerBanner();

    $(".tabs li").hover(function() {
        clearInterval(Timer);
        i = $(this).index();
        showPic();
    }, function() {
        TimerBanner();
    });

    $(".btn1").click(function() {
        clearInterval(Timer);
        i--;
        if (i == -1) {
            i = 3;
        }
        showPic();
        TimerBanner();
    });
    $(".btn2").click(function() {
        clearInterval(Timer);
        i++;
        if (i == 4) {
            i = 0;
        }
        showPic();
        TimerBanner();
    });

});

function TimerBanner() {
    Timer = setInterval(function() {
        i++;
        if (i == 4) {
            i = 0;
        }
        showPic()
    }, 1000);
}

function showPic() {
    $(".picImg").eq(i).show().siblings().hide();
    $(".tabs li").eq(i).animate({ opacity: 1 }).siblings().animate({ opacity: .5 });
}