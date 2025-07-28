$(function(){
  // .consultant_boxの「詳しく見る」ボタンクリック時の挙動
  let btnOpen = $('.Btn_open');
  btnOpen.click(function(){
    let tgtCnt = $(this).closest('.Cnt').next('.Cnt');
    if($(this).hasClass('open')){
      $(this).removeClass('open').text('詳しく見る');
      tgtCnt.slideUp(300).animate({opacity: 0});
    }else{
      $(this).addClass('open').text('閉じる');
      tgtCnt.slideDown(300).animate({opacity: 1},{duration: 200});
    }
  });
});