$(() => {
    console.log('content loaded');
    $(document).on('click', '#myBtn', function() {
      views_manager.show('moreInfo');
      $('#myModal').css({"display" : "block"});
    })
  
  });
    // Get the modal
    const modal = document.getElementById("myModal");
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }

  