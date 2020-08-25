$(() => {
  window.propertyListing = {};

  function createListing(item, isReservation) {
    return `
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img class="card__picture card__picture--1" src="https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg" alt="cat">
    <h4 class="card__heading">  <span class="card__heading-span">${item.title}</span> </h4>
          <div class="post_description">
            ${item.description}
          </div>
      <div class="city-flex"><span class="city">${item.city}</span></div>
    </div>
    <div class="flip-card-back">
    <footer class="property-listing__footer">
    <div class="property-listing__price">$ ${item.price / 100.0} CAD</div>
    <div><button class="like-btn" id="${item.id}" value="${item.id}" data-user_id="${item.id}">LIKE</button></div>
  </footer>
    </div>
  </div>
</div>
      `;
  }

  window.propertyListing.createListing = createListing;
});
