$(function(){
    //scrollイベントは、ページがスクロールされたタイミングで発火するイベント。
    //「scrollTop()」は、ブラウザの画面をスクロールした時の位置（スクロール量）を取得できるメソッド。
    //メインビジュアル３画面、拡大、縮小。
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (window.matchMedia('(min-width: 900px)').matches) {
            // 900px迄の処理
            $('.scroll-img img').css({
                'width': 100 / 3 + scroll / 10  + "%"
            });
        } else {
            // 900px以下の処理
            $('.scroll-img img').css({
            'width': 100 - scroll / 10  + "%"
        });
        }   
    });

    //上から520pxのスクロール位置に達した時に、
    //ロゴとハンバーガーメニューを表示します。
    $(window).on('load scroll', function(){
        if($(this).scrollTop() > 520) {
            $('.hamburger, .logo a').addClass('open');
        }else{
            $('.hamburger, .logo a').removeClass('open');
        }
    });

    //nav画面表示
    $('.hamburger').click(function () {
        $('.hamburger, #nav').
        toggleClass('active');
    });

    //ハンバーガーメニュー内,リンクへ移動
    //リンク先をクリックでハンバーガーメニューを閉じ、リンク先へスクロール
    $('#nav a').on('click', function() {
        $('.hamburger, #nav').removeClass('active');
    });
    $('a[href^="#"]').click(function(){
        var speed = 500;
        //var speed = 500;でスクロールの速さ調整
        var href= $(this).attr("href");
        //var href= $(this).attr(“href”); でリンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //空白or#のみだったらリンク先を「html」に設定
        var position = target.offset().top;
        //リンク先の座標を取得する
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;//スムーズスクロールを実行
    });

    // ウインドウをスクロールしたら、gallery６画面、ふわっと表示。
	$(window).scroll(function (){
        // .js-fadeのクラスを持つ要素（それぞれに対して）
		$('.js-fade').each(function(){
            // この要素のスクロール位置（上から）
			var pos = $(this).offset().top;
            // ウインドウのスクロール量（上から）
			var scroll = $(window).scrollTop();
            // ウインドウの縦幅
			var windowHeight = $(window).height();
            // ウインドウのスクロール量（上から）が
            // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
			if (scroll > pos - windowHeight + 100){
                // .scrollというクラス.js-fadeに付与する
				$(this).addClass('scroll');
			}
		});
	});

    //galleryからaccessまでの間、サイドボタン表示処理
    $(window).scroll(function (){
        $('#gallery').each(function(){
        //headerからgalleryの距離
        var elementTop = $(this).offset().top;
        //スクロール量取得
        var scroll = $(window).scrollTop();
        //表示されているwindowの高さ取得
        var windowHeight = $(window).height();
        ////headerからaccessの距離
        var last = $('#access').offset().top;
            //gallery到達でサイドボタン表示
            if (scroll > elementTop - windowHeight){
                $('.side-btn').addClass('open');
                //access到達でサイドボタン非表示
                if (scroll + windowHeight - 100> last){
                    $('.side-btn').removeClass('open'); 
                }
            } else {
                //gallery到達するまでサイドボタン非表示
                $('.side-btn').removeClass('open');
            }
        });
    });

    //access到達で背景画面表示、contact到達で非表示処理
    $(window).scroll(function (){
        $('#access').each(function(){
        var elementTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var last = $('#contact').offset().top;
            if (scroll > elementTop - windowHeight + 100){
                $('.back-screen').addClass('open');
                if (scroll + windowHeight - 50> last){
                    $('.back-screen').removeClass('open'); 
                }
            } else {
                $('.back-screen').removeClass('open');
            }
        });
    });

});
