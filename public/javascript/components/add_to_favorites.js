// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hey, I loaded the stuff');
  
//   document.querySelectorAll('.like-btn').forEach(btn => {
//     console.log('like button clicked');
    
//     btn.addEventListener('click', ()=> {
//     console.log('Button with clicked, value = ', btn.value);
//     console.log('Button with clicked, data = ', btn.dataset.user_id);
//     return false;
//    })
//   });


//   // setInterval(document.querySelectorAll('.flip-card').forEach(card => {
//   //   card.addEventListener('mouseenter', ()=> {
//   //     console.log('heyhehehtegdfsgfgsdgdf')
//   //   })
//   // }), 1000);

// });



$(() => {
  console.log('content loaded');
  $(document).on('click', '.like-btn', function() {
    const button = $(this);

    console.log('this button pressed', button.val());
    getAllReservations()
    .then(favourites => {
      for (const post of favourites.reservations){
        if (post.id == button.val()) {
          console.log('Already exists in favs')
          addtoFavs({post_id: Number(post.id), user_id: 2})          
          return;
        }        
      }
      addtoFavs({item_id: Number(button.val()), user_id: 2}) 
      
    })
    
    // TO DO
    //check if exists

  })

});


// function getAllReservations() {
//   let url = "/api/reservations";
//   return $.ajax({
//     url,
//   });
// }








