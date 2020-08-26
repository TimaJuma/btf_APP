$(() => {
  window.propertyListing = {};

  function createListing(item, isLiked) {
    let btn_class;
    if (isLiked) {
      btn_class = 'like-btn active-like-btn';
    } else {
      btn_class = 'like-btn';
    }
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
    
    <div class="like_more">
    <!-- Trigger/Open The Modal -->
    <button id="myBtn">More info...</button>
    <button class="${btn_class}" id="${item.id}" value="${item.id}" data-user_id="${item.id}"><span class="heart">&#10084;</span></button>
   
    </div>
  </footer>
    </div>
  </div>
</div>

      `;
  }

  window.propertyListing.createListing = createListing;
});
