$(() => {
  $(document).on('keydown', '.super-search', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      let result = 'title=' + $(this).val();
      $(this).val("");

      getAllListings(result).then(function (json) {
        propertyListings.addProperties(json.properties);
        views_manager.show('listings');
      });
    }
  });
})