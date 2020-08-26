$(() => {
  console.log('content loaded from messages.js');
  $(document).on('click', '.like-btn', function() {
    const button = $(this);
    console.log('this button pressed', button.val());
    getAllMessages()
    .then(returned => {
      const filtered_msg = returned.messages.filter(msg => msg['item_id'] === button.val())
      console.log('filtered_msg', filtered_msg) 
    })
  })

});