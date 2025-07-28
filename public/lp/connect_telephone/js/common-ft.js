$(function(){
  ///////////////////////////
  // ページトップボタン
  ///////////////////////////
  var btnTop = $('.btn_top__wrap');
  var footerPos = $('#footer').offset().top;
  var winHeight = $(window).height();
  btnTop.hide();
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 70){
      //SP時は非表示のまま
      if(!window.matchMedia('(max-width: 767px)').matches){
        btnTop.fadeIn();
      }  
    }else{
      btnTop.fadeOut();
    }

    // フッター上で停止
    var winBottom = winTop + winHeight;
    var btnTopPosfoot = 37;
    var btnTopPosDef = 50;
    if(winBottom >= footerPos + btnTopPosfoot + btnTopPosDef){
      var btnTopPos = winBottom - footerPos - btnTopPosfoot;
      btnTop.css('bottom',btnTopPos +'px');
    }else{
      btnTop.css('bottom',btnTopPosDef + 'px');
    }
  });

  ///////////////////////////
  // フッターバー（SP時）
  ///////////////////////////
  var footBar = $('.footer_bar');
  footBar.hide();
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 70){
      //SP時のみ表示
      if(window.matchMedia('(max-width: 767px)').matches){
        footBar.fadeIn();
      }  
    }else{
      footBar.fadeOut();
    }
  });

  //フッターバーのサイズに合わせてフッターサイズ変更
  if(window.matchMedia('(max-width: 767px)').matches){
    $('#footer').css('margin-bottom',footBar.height() + 'px');
  }

  ///////////////////////////
  // スムーススクロール
  ///////////////////////////
  var scrollSpeed = 400;
  var adjust = 0;
  $('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - adjust;
		$('body,html').animate({scrollTop:position}, scrollSpeed, 'swing');
		return false;
	});

  // ページ外のアンカーへスクロール
  var urlHash = location.hash;
  if(urlHash) {
    var target = $(urlHash);
    var position = target.offset().top - adjust;
    // どこからスクロールさせるか ※一番上ならscrollTop(0)
    $('body,html').stop().scrollTop(0);
    //setTimeout(function(){
      $('body,html').stop().animate({scrollTop:position}, scrollSpeed, 'swing');
    //}, 100);
  }

  ///////////////////////////
  // フォーム
  ///////////////////////////
  // selectタグの初期テキストの色を変更
  var form01Select = $('.form_01 select');
  form01Select.css('color','#757575')
  form01Select.on('change',function(){
    if($(this).val() == ""){
      form01Select.css('color','#757575')
    }else{
      form01Select.css('color','#000')
    }
  });
});