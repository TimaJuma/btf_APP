$(() => {
  window.propertyListing = {};
  
  function createListing(property, isReservation) {
    return `
    <article class="property-listing">
        <section class="property-listing__preview-image">
          <img src="https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg" alt="house">
        </section>
        <section class="property-listing__details">
          <h3 class="property-listing__title">${property.title}</h3>
          <ul class="property-listing__details">
            <li>number_of_bedrooms: 6</li>
            <li>number_of_bathrooms: 6</li>
            <li>parking_spaces: 5</li>
          </ul>
          <footer class="property-listing__footer">
            <div class="property-listing__price">$${property.price/100.0}USD</div>
          </footer>
        </section>
      </article>
    `
  }

  window.propertyListing.createListing = createListing;

});