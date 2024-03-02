// first include jquery
window.$ = window.jQuery = require("jquery");
// then bootstrap
require("bootstrap");

$(function () {
  // initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
