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

      <nav id="page-header__user-links" class="page-header__user-links navbar navbar-dark navbar-expand-lg">
      <a class="navbar-brand" href="#">BTF Sales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="home nav-item nav-link" href="#"><i class="fa fa-home"></i> Home<span class="sr-only">(current)</span></li>
          <li class="search_button nav-item nav-link"><i class="fa fa-search"></i> Search</li>
          <li class="login_button nav-item nav-link"><i class="fas fa-sign-in-alt"></i> Log In</li>
          <li class="sign-up_button nav-item nav-link"><i class="fa fa-user-plus"></i> Sign Up</li>
        </ul>
      </div>
    </nav>
      `
    } else {
      userLinks = `

      <nav id="page-header__user-links" class="page-header__user-links navbar navbar-dark navbar-expand-lg">
      <a class="navbar-brand" href="#">BTF Sales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav navbar-right">
          <a class="home nav-item nav-link" href="#">Home 🏠<span class="sr-only">(current)</span></a>
          <li class="search_button nav-item nav-link">Search</li>
          <li>${user.name}</li>
          <li class="create_listing_button nav-item nav-link">Add post</li>
          <li class="my_listing_button nav-item nav-link">My posts</li>
          <li class="my_reservations_button nav-item nav-link">My favourites</li>
          <li class="logout_button nav-item nav-link">Log Out</li>
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
    getAllListings(`owner_id=${currentUser.id}`)
      .then(function(json) {
        propertyListings.addProperties(json.properties);
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

  $("header").on('click', '.login_button', () => {
    views_manager.show('logIn');
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