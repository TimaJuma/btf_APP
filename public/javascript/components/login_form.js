$(() => {

  const $logInForm = $(`
  <form id="login-form" class="login-form my-5" data-aos='fade-up' data-aos-delay="100" data-aos-duration="1000">
      <p>Login</p>

      <div class="input-group mb-3 login-form__field-wrapper">
      <div class="input-group-prepend">
        <label for="search-property-form__minimum-rating">Title</label>
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
      </div>
      <input type="input" name='email' class="input form-control" placeholder="email" id="search-property-form__minimum-rating">
    </div>

    <div class="input-group mb-3 login-form__field-wrapper">
    <div class="input-group-prepend">
      <label for="search-property-form__minimum-rating">Title</label>
      <span class="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
    </div>
    <input type="password" name='password' class="input form-control" placeholder="password" id="search-property-form__minimum-rating">
  </div>

      <div class="login-form__field-wrapper">
          <button class="btn"><i class="fa fa-arrow-right"></i> Login</button>
          <a id="login-form__cancel" class="my-auto ml-3">Cancel</a>
      </div>
    </form>
  `);

  window.$logInForm = $logInForm;

  $logInForm.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    logIn(data)
      .then(json => {
        if (!json.user) {
          views_manager.show('error', 'Failed to login');
          return;
        }
        header.update(json.user);
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#login-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
      
});