//パラメーターによって開くアコーディオンを変更する

let checkedId = location.search;
let checkedNo = checkedId.replace("?checked=", "");
console.log(checkedNo);

$(function () {
  //クリックで動く
  $(".accordion-content").hide();

  const groupMap = {
    group1: [3, 5, 1, 4, 0, 2],
    group2: [30, 38, 48, 46, 45, 47],
    group3: [7, 8, 9, 42, 55, 54, 25, 31, 34, 43, 37],
    group4: [10, 11, 12, 13, 14, 15, 56, 66],
    group5: [17, 16, 18],
    group6: [39, 40, 53],
    group7: [19, 20, 35, 36, 49],
    group8: [21, 22, 41, 51],
    group9: [23, 52, 24, 26, 27, 44, 28, 50],
  };

  function toggleAccordion(targetClass) {
    const target = $(targetClass);
    target.toggleClass("active");
    target.next(".accordion-content").slideToggle();
  }

  if (groupMap.group1.includes(Number(checkedNo))) {
    toggleAccordion(".service-01");
  } else if (groupMap.group2.includes(Number(checkedNo))) {
    toggleAccordion(".service-02");
  } else if (groupMap.group3.includes(Number(checkedNo))) {
    toggleAccordion(".service-03");
  } else if (groupMap.group4.includes(Number(checkedNo))) {
    toggleAccordion(".service-04");
  } else if (groupMap.group5.includes(Number(checkedNo))) {
    toggleAccordion(".service-05");
  } else if (groupMap.group6.includes(Number(checkedNo))) {
    toggleAccordion(".service-06");
  } else if (groupMap.group7.includes(Number(checkedNo))) {
    toggleAccordion(".service-07");
  } else if (groupMap.group8.includes(Number(checkedNo))) {
    toggleAccordion(".service-08");
  } else if (groupMap.group9.includes(Number(checkedNo))) {
    toggleAccordion(".service-09");
  }

  $(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle();
  });
});
