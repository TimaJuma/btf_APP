$(() => {

  const $signUpForm = $(`
  <form id="sign-up-form" class="sign-up-form">
        <p>Sign Up</p>

        <div class="sign-up-form__field-wrapper">
            <input type="text" name="name" placeholder="Username" required>
          </div>

        <div class="sign-up-form__field-wrapper">
          <input type="email" name="email" placeholder="Email">
        </div>

        <div class="sign-up-form__field-wrapper">
        <input type="tel" id="tel" name="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Tel: 123-456-7890">
        </div>
  
        <div class="sign-up-form__field-wrapper">
            <input type="password" name="password" placeholder="Password" required>
          </div>
  
        <div class="sign-up-form__field-wrapper">
            <button>Sign Up</button>
            <a id="sign-up-form__cancel" href="#">Cancel</a>
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
        console.log(json.user);
        header.update(json.user);
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#sign-up-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
      
});