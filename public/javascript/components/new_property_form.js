$(() => {



  const $newPropertyForm = $(`
  <form action="/api/items" method="post" id="new-property-form" class="new-property-form">
  <p>Create ad</p>
  
  <div class="input-group mb-3 new-property-form__field-wrapper">
  <div class="input-group-prepend">
    <label for="new-property-form__title">Title</label>
    <span class="input-group-text" id="basic-addon1"><i class="fa fa-pencil" aria-hidden="true"></i></span>
  </div>
  <input class="input form-control" type="text" name="title" placeholder="Title" id="new-property-form__title">
</div>

  <div class="new-property-form__field-wrapper mb-3">
    <label for="new-property-form__description">Description</label>
    <textarea class="text-area form-control" placeholder="Description" name="description" id="property-form__description" cols="30" rows="10"></textarea>
  </div>


    <div class="input-group mb-3 new-property-form__field-wrapper">
    <div class="input-group-prepend">
      <label for="new-property-form__title">Title</label>
      <span class="input-group-text" id="basic-addon1"><i class="fa fa-dollar" aria-hidden="true"></i></span>
    </div>
    <input class="input form-control" type="number" step="0.01" min="0 name="price" placeholder="price" id="new-property-form__cost">
  </div>

  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__thumbnail">Thumbnail Image</label>
    <input placeholder="Thumbnail Image" type="text" id="new-property-form__thumbnail">
  </div>


  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__cover">Cover Image</label>
    <input placeholder="Cover Image" type="text"  id="new-property-form__cover">
  </div>

  <div class="input-group mb-3 new-property-form__field-wrapper">
  <div class="input-group-prepend">
    <label for="new-property-form__cover">Cover Image</label>
    <span class="input-group-text" id="basic-addon1"><i class="fa fa-pencil" aria-hidden="true"></i></span>
  </div>
  <input class="input form-control" type="text" name="title" placeholder="image url" id="new-property-form__title">
</div>

    <div class="new-property-form__field-wrapper mb-3">
    <div class="input-group-prepend">
    <label for="new-property-form__title">Title</label>
    <span class="input-group-text" id="basic-addon1"><i class="fa fa-globe" aria-hidden="true"></i></span>
  </div>
      <label for="new-property-form__country">Country</label>
      <select id="new-property-form__country" name="country" data-country-selected="Canada" class="form-control input" searchable="Search here..">
          <option value="" disabled selected>Choose your country</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
      </select>
    </div>

    <div id="new-property-form__locality-fields">
      

      <div class="input-group mb-3 new-property-form__field-wrapper">
      <div class="input-group-prepend">
        <label for="new-property-form_city">City</label>
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
      </div>
      <input class="input form-control" type="text" name="city" placeholder="city" id="new-property-form__city">
    </div>


    </div>

    <div class="new-property-form__field-wrapper">
    <button class="btn"><i class="fa fa-arrow-right"></i> create</button>
    <a id="property-form__cancel" class="my-auto ml-3">Cancel</a>
</div>
    
</form>
  `);

  window.$newPropertyForm = $newPropertyForm;

  $newPropertyForm.addressfield({
    json: 'javascript/libraries/addressfield/addressfield.min.json',
    fields: {
      country: '#new-property-form__country',
      locality: '#new-property-form__locality-fields',
      localityname: '#new-property-form__city',
      administrativearea: '#new-property-form__state',
      postalcode: '#new-property-form__zip'
    }
  });

  $newPropertyForm.on('submit', function (event) {
    event.preventDefault();

    views_manager.show('none');

    const data = $(this).serialize();
    console.log('Data from addItem form: ', data);
    submitProperty(data)
      .then(() => {
        views_manager.show('listings');
      })
      .catch((error) => {
        console.error(error);
        views_manager.show('listings');
      })
  });

  $('body').on('click', '#property-form__cancel', function () {
    views_manager.show('listings');
    return false;
  });

});