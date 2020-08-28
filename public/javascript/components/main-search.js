// $(() => {

//     $(document).on('keydown', '#main-search', function(e) {
//         if (e.which == 13) {
//             e.preventDefault();
//             let result = 'title=' + $('#top-search').val();
//             $('#top-search').val("");
//             console.log(result);

        
//             getAllListings(result).then(function( json ) {
//                 propertyListings.addProperties(json.properties);
//                 console.log('json from TOP-SEARCH:', json.properties)
//               views_manager.show('listings');
//             });
//           }
//         });     
//       })
  