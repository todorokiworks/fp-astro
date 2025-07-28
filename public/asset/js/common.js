// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
// 追従するヘッダーがある場合のスムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var header = $("header").height();
    var position = target.offset().top - header;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
// 	fatnav
$(function () {
  $.fatNav();
});

// ページトップボタン
$(function () {
  var topBtn = $("#pagetop");
  topBtn.hide();
  window.onscroll = function () {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + scrollTop;
    footHeight = $("footer").innerHeight();
    if (scrollTop > 200 && scrollHeight - scrollPosition >= footHeight) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  };
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// リキッドフォント
function clampBuilderPx(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const minWidth = minWidthPx;
  const maxWidth = maxWidthPx;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}px, ${yAxisIntersection}px + ${
    slope * 100
  }vw, ${maxFontSize}px )`;
}
window.addEventListener("DOMContentLoaded", function () {
  var viewport_s = 375;
  var viewport_w = 1440;
  var sp_mag = 1 - viewport_s / viewport_w;

  $(".js-lqFnts").each(function () {
    var fnts = $(this);
    var object_l = parseInt(fnts.css("font-size"));
    var object_s = parseInt(object_l) * sp_mag;

    fnts.css(
      "font-size",
      clampBuilderPx(viewport_s, viewport_w, object_s, object_l)
    );
  });
});

$(window).on("load", function () {
  if (navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/)) {
    $(".__line .Btn").attr("href", "https://lin.ee/WkULqzl");
  }
});

// common.js

// checked読み込み
// import { checkedUrl, idName, linkElement } from "./checked.js";

// // DOMが完全に読み込まれた後に checkedUrl を実行
// document.addEventListener("DOMContentLoaded", checkedUrl);

// // idNameとlinkElementの値をログ出力
// console.log(idName); // checkedUrl()が呼ばれた後に出力
// console.log(linkElement); // checkedUrl()が呼ばれた後に出力
