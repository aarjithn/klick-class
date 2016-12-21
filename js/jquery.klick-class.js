/**
 * @license Klick class v1.0.0
 * (c) 2016 Aarjith Nandakumar, https://aarjithn.github.io
 * License: MIT
 */
;(function() {
  var updateClass = function (attr, action) {

    var func = action + "Class";

    var elemArr = attr.split("&");

    elemArr.forEach(function(elem) {
      var el = elem.split("->")[0];
      var classes = elem.split("->")[1].split(",");
      $(el)[func](classes.join(" "));
    });
  }

  $(document).on("click", "[kc-add-class]", function() {
    updateClass($(this).attr("kc-add-class"), "add");
  });

  $(document).on("click", "[kc-remove-class]", function() {
    updateClass($(this).attr("kc-remove-class"), "remove");
  });

  $(document).on("click", "[kc-toggle-class]", function() {
    updateClass($(this).attr("kc-toggle-class"), "toggle");
  });
}());