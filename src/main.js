$("#impress section.step").each(function(index, elem) {
  $(elem).attr("data-x", 1000 * index);
});

/* Start Impress.js */
impress().init();
