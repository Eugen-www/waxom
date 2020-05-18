// *LoadMoreButton
$(function () {
  $(".load-more").on("click", function (e) {
    e.preventDefault();
    if (
      $(".section-projects__project:visible").length !=
      $(".section-projects__project").length
    ) {
      $(".section-projects__project:hidden").slice(0, 3).slideDown();
    } else {
      $(".section-projects__project")
        .slice(6, $(".section-projects__project").length)
        .slideUp();
    }
  });
});
// *EndOfLoadMoreButton

// *Collapse
$(function () {
  $(".collapse__header").click(function () {
    const $item = $(this).parents(".collapse");
    $item
      .toggleClass("collapse--active")
      .siblings(".collapse--active")
      .removeClass("collapse--active");
  });
});
// *EndOfCollapse

// *BurgerMenu
$(document).ready(function () {
  $(".header-page__hamburger").click(function (event) {
    $(".header-page__hamburger,.header-page__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// *EndOfBurgerMenu
