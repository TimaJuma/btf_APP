$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    const header = `
              <div class="homepage-header container">
              <div class="row">
                <div class="col-lg-6 header-search-area">
                  <form action="/items" method="POST" class='home-search-form'>
            
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" class="input form-control" placeholder="Search ads..." aria-label="Search">
                    </div>
            
                    <button type="submit" class="btn search-btn"><i class="fa fa-search"></i></button>

                  </form>
                </div>
                <div class="col-lg-6 header-img-area">
                  <img data-aos='fade-in-right' id='header-img' src="images/undraw_deliveries_131a.svg" alt="">
                </div>
              </div>
            </div>
    `;

    $pageHeader.append(userLinks);
  }
  window.header.update = updateHeader;
});