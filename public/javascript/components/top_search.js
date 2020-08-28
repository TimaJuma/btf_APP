$(() => {

    $(document).on('keydown', '.super-search', function(e) {
        if (e.which == 13) {
            console.log('Button PUSHED!!! super-search')
            e.preventDefault();
            let result = 'title=' + $(this).val();
            $(this).val("");
            console.log(result);

        
            getAllListings(result).then(function( json ) {
                propertyListings.addProperties(json.properties);
                console.log('json from TOP-SEARCH:', json.properties)
              views_manager.show('listings');
            });
          }
        });     
      })
  