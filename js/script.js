
//sticky header

$(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header')
        fvHeight = $fv.outerHeight(),
        fixedClass = 'fixed';
  
  $win.on('load scroll',function(){
    var value = $(this).scrollTop();
      if($win.width()>768)  
        if ( value > fvHeight) {
          $header.addClass(fixedClass);
        } else {
          $header.removeClass(fixedClass);
        }
    });

    $('.accordion-head').click(function() {
        $(this).next().slideToggle();
        $(this).children('.accordion__icon').toggleClass('is-open');
    });

  });

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得しトップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});

$(document).ready(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
            $(".totop").fadeIn(); 
        } else {
            $(".totop").fadeOut();
        }
    });
    $(".totop").click(function() {
        $("html ,body").animate({scrollTop:0},800); // 800msかけて上に戻る
    });
});


//swiper
new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 24,
				width: 274,
      }
    }
  });

//burger
$('.burger-btn').on('click',function() {
    $('.mask').fadeToggle(300);
    $('.header-nav').toggleClass('open');
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

$('.header-nav-item a').on('click',function() {
    $('.mask').fadeToggle(300);
    $('.header-nav').toggleClass('open');
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
})