function scroll() {
    var top = 60;//获取导航栏变色的位置距顶部的高度
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    if (scrollTop < top) {
        // $('.head_fixed').css('background-color', 'rgba(255, 255, 255, 0)');
        // $('.li_w li a').css('color', '#ffffff');
        // $('.logo_img').css('background', 'url(images/logo-白.png) no-repeat center center');
        // $('.logo_img').css('background-size', 'cover');
        $('.dis_o').css('display', 'block');
        $('.dis_w').css('display', 'none');
    } else {
        // $('.head_fixed').css('background-color', 'rgba(255, 255, 255, 1)');
        // $('.li_w li a').css('color', '#222222');
        // $('.logo_img').css('background', 'url(images/logo-蓝.png) no-repeat center center');
        // $('.logo_img').css('background-size', 'cover');
        $('.dis_o').css('display', 'none');
        $('.dis_w').css('display', 'block');
    }
}
$(window).on('scroll', function() {
    scroll()
});