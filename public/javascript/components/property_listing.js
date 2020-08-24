$(() => {
  window.propertyListing = {};
  
  function createListing(item, isReservation) {
    return `
    <article class="property-listing" data-aos="fade-in" data-aos-duration="1500">
        <section class="property-listing__preview-image">
          <img src="https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg" alt="house">
        </section>
        <section class="property-listing__details">
          <h3 class="property-listing__title">${item.title}</h3>
          <ul class="property-listing__details">
            <li>Description: ${item.description}</li>
            <li>City: ${item.city}</li>
          </ul>
          <footer class="property-listing__footer">
            <div class="property-listing__price">$${item.price/100.0}CAD</div>
          </footer>
        </section>
      </article>
      `
  }

  window.propertyListing.createListing = createListing;

});