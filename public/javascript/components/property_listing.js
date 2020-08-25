$(() => {
  window.propertyListing = {};

  function createListing(item, isReservation) {
    return `
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img class="card__picture card__picture--1" src="https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg" alt="cat">
    <h4 class="card__heading">  <span class="card__heading-span">${item.title}</span> </h4>
          <ul class="property-listing__details">
            <li>Description: ${item.description}</li>
            <li>City: ${item.city}</li>
          </ul>
    </div>
    <div class="flip-card-back">
    <footer class="property-listing__footer">
    <div class="property-listing__price">$${item.price / 100.0}CAD</div>
  </footer>
    </div>
  </div>
</div>
      `;
  }

  window.propertyListing.createListing = createListing;
});
