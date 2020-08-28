$(() => {

  const $searchPropertyForm = $(`
  <form action="/items" method="post" id="search-property-form" class="search-property-form my-5"  data-aos='fade-up' data-aos-delay="100" data-aos-duration="1000">
    <p>Search ads</p>
    <div class="input-group mb-3 search-property-form__field-wrapper">
      <div class="input-group-prepend">
        <label for="search-property-form__minimum-rating">Title</label>
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
      </div>
      <input type="input" name='title' class="input form-control" placeholder="title" id="search-property-form__minimum-rating">
    </div>


    <div class="input-group mb-3 search-property-form__field-wrapper">
      <div class="input-group-prepend">
        <label for="search-property-form__city">City</label>
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
      </div>
      <input type="input" name='city' class="input form-control" placeholder="city" id="search-property-form__city">
    </div>
    <div class="form-row">
    <div class="input-group mb-3 search-property-form__field-wrapper">
    <div class="input-group-prepend">
      <label for="search-property-form__minimum-price-per-night">Minimum Cost</label>
      <span class="input-group-text" id="basic-addon1"><i class="fa fa-minus" aria-hidden="true"></i></span>
    </div>
    <input class='input' type="number" min='0' name="minimum_price" placeholder="Minimum Cost" id="search-property-form__minimum-price-per-night">
  </div>



  
  <div class="input-group mb-3 search-property-form__field-wrapper">
  <div class="input-group-prepend">
  <label for="search-property-form__maximum-price-per-night">Maximum Cost</label>
  <span class="input-group-text" id="basic-addon1"><i class="fa fa-plus" aria-hidden="true"></i></span>
  </div>
  <input class='input' type="number" name="maximum_price" placeholder="Maximum Cost" id="search-property-form__maximum-price-per-night">
</div>
</div>
      <div class="search-property-form__field-wrapper">
          <button class='btn search-btn'><i class="fa fa-search"></i> Search</button>
          <a id="search-property-form__cancel" class="my-auto ml-3" href="#">Cancel</a>
      </div>
    </form>
  `)
  window.$searchPropertyForm = $searchPropertyForm;

  //  function createListing(property, isReservation) {
  //   return `
  //   <article class="property-listing">
  //       <section class="property-listing__preview-image">
  //         <img src="https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg" alt="house">
  //       </section>
  //       <section class="property-listing__details">
  //         <h3 class="property-listing__title">${property.title}</h3>
  //         <ul class="property-listing__details">
  //           <li>number_of_bedrooms: 6</li>
  //           <li>number_of_bathrooms: 6</li>
  //           <li>parking_spaces: 5</li>
  //         </ul>
  //         <footer class="property-listing__footer">
  //           <div class="property-listing__price">$${property.price/100.0}USD</div>
  //         </footer>
  //       </section>
  //     </article>
  //   `
  // }

  $searchPropertyForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    // const data2 = $(this).serializeArray();

  
    // const title = this.title.value;
    // const min_price = this.minimum_price.value;
    // const max_price = this.maximum_price.value;
    // const city = this.city.value;

    // const formValues = {title, min_price, max_price, city};

    getAllListings(data).then(function( json ) {
      console.log('json from search_form:', json)
      propertyListings.addProperties(json.properties);
      views_manager.show('listings');
    });
  });
  $('body').on('click', '#search-property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
});




  // $searchPropertyForm.on('submit', function(event) {
  //   console.log('Submit btn pushed!')
  //   event.preventDefault();
  //   const data = $(this).serialize();

  //   console.log(typeof data);
  //   console.log('title:', this.title.value);

  //   // for(const item in data){
  //   //   console.log('item:', item);
  //   // }

  //   console.log(getAllListings(data));
  //   // getAllListings(data).then(function( json ) {
  //   //   console.log('json:', json);
  //   //   propertyListings.addProperties(json.properties);
  //   //   views_manager.show('listings');
  //   // });
  // });

  // $('body').on('click', '#search-property-form__cancel', function() {
  //   views_manager.show('listings');
  //   return false;
  // });

// });