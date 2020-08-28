$(() => {

    const $home_search = $(`
    <div class="homepage-header container">
<div class="row">
  <div data-aos='fade-up' data-aos-delay="100" data-aos-duration="1000" class="col-lg-6 header-search-area">
    <form action="/items" method="POST">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <input type="text" class="input form-control" placeholder="Search ads..." aria-label="Search" autofocus>
      </div>

      <button type="submit" class="btn search-btn"><i class="fa fa-search"></i></button>

    </form>
  </div>

  <div data-aos='fade-left' class="col-lg-6 header-img-area">
    <img id='header-img' src="images/undraw_deliveries_131a.svg" alt="">
  </div>
</div>
</div>
    `)
    
    window.$home_search= $home_search;
  });
  

