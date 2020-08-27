$(() => {

  const $signUpForm = $(`
  <form id="sign-up-form" class="sign-up-form" data-aos='fade-up' data-aos-delay="100" data-aos-duration="1000">
        <p>Sign Up</p>

          <div class="input-group mb-3 sign-up-form__field-wrapper">
          <div class="input-group-prepend">

            <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
          </div>
          <input type="text" name='name' class="input form-control" placeholder="username" id="search-property-form__minimum-rating"  required autocomplete="off">
        </div>



        <div class="input-group mb-3 sign-up-form__field-wrapper">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        </div>
        <input type="email" name='email' class="input form-control" placeholder="email" required autocomplete="off">
      </div>

  
        <div class="input-group mb-3 sign-up-form__field-wrapper">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
        </div>
        <input type="tel" class="input form-control" id="tel" name="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Tel: 123-456-7890" required autocomplete="off">
      </div>


  
          <div class="input-group mb-3 sign-up-form__field-wrapper">
          <div class="input-group-prepend">

            <span class="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
          </div>
          <input type="password" name='password' class="input form-control" placeholder="password" required autocomplete="off">
        </div>
          

        <div class="sign-up-form__field-wrapper">
        <button class="btn"><i class="fa fa-arrow-right"></i> Sign up</button>
        <a id="sign-up-form__cancel" class="my-auto ml-3">Cancel</a>
    </div>

      </form>
  `);
  window.$signUpForm = $signUpForm;

  $signUpForm.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    console.log('DATA is: ', data)
    signUp(data)
      .then(getMyDetails)
      .then((json) => {
        header.update(json.user);
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#sign-up-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
      
});