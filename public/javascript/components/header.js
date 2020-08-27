$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      userLinks = `

      <nav id="page-header__user-links" class="page-header__user-links navbar navbar-light navbar-expand-lg">
      <a class="home navbar-brand">BTF Sales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="custom-toggler navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
          <li class="home nav-item nav-link my-auto" href="#">Home<span class="sr-only">(current)</span></li>
          <li class="search_button nav-item nav-link my-auto">Search</li>
          <li class="login_button nav-item nav-link my-auto">Log In</li>
          <li class="sign-up_button nav-item nav-link my-auto">Sign Up</li>
          <form class="form-inline my-auto">
          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <input type="text" class="input form-control" placeholder="Search ads..." aria-label="Search">
        </div>
          </form>
        </ul>
      </div>
    </nav>
      `
    } else {
      userLinks = `

      <nav id="page-header__user-links" class="page-header__user-links navbar navbar-light navbar-expand-lg">
      <a class="home navbar-brand">BTF Sales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">

          <li class="nav-item dropdown ml-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${user.name}
          </a>
          <div class="dropdown-menu mt-3" aria-labelledby="navbarDropdown">
            <a class="create_listing_button dropdown-item" href="#">Create ad</a>
            <a class="my_listing_button dropdown-item " href="#">My ads</a>
            <a class="my_reservations_button dropdown-item" href="#">Favourites</a>
            <a class="logout_button dropdown-item" href="#">Logout</a>
          </div>
        </li>

        <form class="form-inline my-auto">
        <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <input type="text" class="input form-control" placeholder="Search ads..." aria-label="Search">
      </div>
        </form>

        </div>
      </div>
    </nav>
      `
    }

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  getMyDetails()
    .then(function( json ) {
    updateHeader(json.user);
  });

  $("header").on("click", '.my_reservations_button', function() {
    propertyListings.clearListings();
    getAllReservations()
      .then(function(json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });
  $("header").on("click", '.my_listing_button', function() {
    propertyListings.clearListings();
    getAllListings(`user_id=${currentUser.id}`)
      .then(function(json) {
        console.log(json);
        const filteredJson = json.properties.filter(obj => obj.user_id === currentUser.id);
        propertyListings.addProperties(filteredJson);
        views_manager.show('listings');
    });
  });

  $("header").on("click", '.home', function() {
    propertyListings.clearListings();
    getAllListings()
      .then(function(json) {
        propertyListings.addProperties(json.properties);
        views_manager.show('listings');
    });
  });

  $('header').on('click', '.search_button', function() {
    views_manager.show('searchProperty');
  });

  $('header').on('click', '.info_button', function() {
    views_manager.show('userInfo');
  });

  $("header").on('click', '.login_button', () => {
    views_manager.show('logIn');
  });

  $("header").on('click', '.login_button', () => {
    views_manager.show('logIn');
  });
  
  $("header").on('click', '.user_info', () => {
    views_manager.show('userInfo');
  });

  $("header").on('click', '.sign-up_button', () => {
    views_manager.show('signUp');
  });
  $("header").on('click', '.logout_button', () => {
    logOut().then(() => {
      header.update(null);
    });
  });

  $('header').on('click', '.create_listing_button', function() {
    views_manager.show('newProperty');
  });

});