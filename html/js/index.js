$(document).ready(function () {
  $(".panel").click(function () {
    $(".panel").not($(this).addClass("active")).removeClass("active");
    $(this).next().toggle();
    $(this).siblings(".panel:not(.active)").next().slideUp();
  });
  $(".subPanel").click(function () {
    $(".subPanel").not($(this).addClass("active")).removeClass("active");
    $(this).next().toggle();
    $(this).siblings(".subPanel:not(.active)").next().slideUp();
  });
});
