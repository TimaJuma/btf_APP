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

  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__description">Description</label>
    <textarea class="text-area form-control" placeholder="Description" name="description" id="property-form__description" cols="30" rows="10"></textarea>
  </div>


  <!-- <div class="new-property-form__field-wrapper">
      <label for="new-property-form__type">Type</label>
      <select id="new-property-form__type" name="type">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
      </select>
    </div> -->
  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__cost">Price</label>
    <input placeholder="Price" type="number"  step="0.01" min="0" name="price" id="new-property-form__cost">
  </div>
  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__thumbnail">Thumbnail Image</label>
    <input placeholder="Thumbnail Image" type="text" id="new-property-form__thumbnail">
  </div>
  <div class="new-property-form__field-wrapper">
    <label for="new-property-form__cover">Cover Image</label>
    <input placeholder="Cover Image" type="text"  id="new-property-form__cover">
  </div>
  <hr>
    <div class="new-property-form__field-wrapper">
      <label for="new-property-form__country">Country</label>
      <select id="new-property-form__country" name="country" data-country-selected="Canada">
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
      </select>
    </div>
    <div id="new-property-form__locality-fields">
      
      <div class="new-property-form__field-wrapper">
        <label for="new-property-form__city">City</label>
        <input placeholder="City" type="text" name="city" id="new-property-form__city" />
      </div>
      <!-- <div class="new-property-form__field-wrapper">
        <label for="new-property-form__state">Administrative Area</label>
        <input placeholder="Administrative Area" type="text" name="province" id="new-property-form__state" />
      </div> --> 
    </div>
    <div class="new-property-form__field-wrapper">
        <button>Create</button>
        <a id="property-form__cancel" href="#">Cancel</a>
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

  $('body').on('click', '#property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
  
});