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
    console.log('this button pressed', button.val())
    // TO DO
    //check if exists

  })

});











