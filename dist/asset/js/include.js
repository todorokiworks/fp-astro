// インクルード
import { checkedUrl } from "./checked.js";

$(function () {
  $(".asidearea").load("/asset/include/aside-btm.html", function (data) {
    checkedUrl("#contactBtn");
  });
  $(".footerarea").load("/asset/include/footer.html", function (data) { });
  $(".fat-nav").load("/asset/include/fat-nav.html", function (data) {
    checkedUrl("#contactBtn-sp");
  });

  /* contactarea ページ内にフォームがある場合(contact-inside-pageというクラスがある場合) */
  if ($(".contactarea").hasClass("contact-inside-page")) {
    $(".contactarea").load(
      "/asset/include/contact-inside-page.html",
      function (data) { }
    );

  } else {
    /* contactarea ページ外に遷移する場合 */
    $(".contactarea").load("/asset/include/contact.html", function (data) {
      checkedUrl(".tp-contact__section .__mail a");
    });
  }

  $(".sp-header").load("/asset/include/sp-header.html", function (data) {
    checkedUrl("#contactBtn-sp02");
  });
});
