$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item, item_id) {
    $newPropertyForm.detach();
    $searchPropertyForm.detach();
    $logInForm.detach();
    $userContainer.detach();
    $signUpForm.detach();
    $moreContainer.detach();
    $home_search.detach();

    switch (item) {
      case 'listings':
        $propertyListings.detach();
        $propertyListings.appendTo($main);
        break;
      case 'newProperty':
        $propertyListings.detach();
        $newPropertyForm.appendTo($main);
        break;
      case 'userInfo':
        $propertyListings.detach();
        addUserInfo();
        $userContainer.appendTo($main);
        break;
      case 'searchProperty':
        $propertyListings.detach();
        const middle = $('#middle')
        $searchPropertyForm.appendTo(middle);
        break;
      case 'moreInfo':
        addMoreInfo(item_id);
        const $modalContent = $('.modal-content')
        $moreContainer.appendTo($modalContent);
        break;
      case 'logIn':
        $propertyListings.detach();
        $logInForm.appendTo($main);
        break;
      case 'signUp':
        $propertyListings.detach();
        $signUpForm.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('listings');
        }, 2000);
        
        break;
      }
    }
  }
  
});