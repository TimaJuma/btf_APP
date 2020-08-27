$(() => {
  console.log('content loaded from messages.js');
  $(document).on('click', '.like-btn', function() {
    const button = $(this);
    console.log('this button pressed', button.val());
    getAllMessages()
    .then(returned => {
      const filtered_msg = returned.messages.filter(msg => msg['item_id'] == 22)
      console.log('filtered_msg', filtered_msg) 
    })
  });




  $(document).on('click', '.btn-send', function(event) {
    event.preventDefault();
    const button = $(this);
    let text_msg = $('.send_message')
    console.log('btn-send button pressed', button.val(), text_msg.val(), button.data().item);
 
  addMsg({text_body: text_msg.val(), reciever_id: button.val(), item_id: button.data().item}) 
  .then(getAllMessages)
  .then(res => { 
    console.log('res messages ALL:' , res.messages)
  })

  text_msg.val("");

  });

});