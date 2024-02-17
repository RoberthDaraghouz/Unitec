(function () {
  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#prepago").length > 0) {
      $("#prepago").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  $(function () {
    new WOW().init();

    counterWayPoint();

    $('[data-toggle="tooltip"]').tooltip();
  });
})();
