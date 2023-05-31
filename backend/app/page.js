function HomePage() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://taxo.es/wp-content/uploads/2016/05/car-slider.jpg" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>Rent Your Dream Car</h3>
              <p>Explore a wide selection of vehicles for rent.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Experience Luxury and Comfort</h5>
              <p>Choose from our premium car collection.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Hit the Road with Style</h5>
              <p>Find the perfect car for your next adventure.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4">
            <h1 class="text">Our Car Fleet</h1>
          </div>
          <div class="col-lg-7">
            <div class="row m-5">
              <div class="col card me-5">
                <img src="images/suv.jpg" class="card-img-top" alt="SUV" />
                <div class="card-body">
                  <p class="card-text text text-dark text-center">SUV</p>
                </div>
              </div>
              <div class="col card">
                <img src="images/sports_car.jpg" class="card-img-top" alt="Sports Car" />
                <div class="card-body">
                  <p class="card-text text text-dark text-center">Sports Car</p>
                </div>
              </div>
              <div class="row m-5">
                <div class="col card me-5">
                  <img src="images/luxury_car.jpg" class="card-img-top" alt="Luxury Car" />
                  <div class="card-body">
                    <p class="card-text text text-dark text-center">Luxury Car</p>
                  </div>
                </div>
                <div class="col card me-5">
                  <img src="images/convertible.jpg" class="card-img-top" alt="Convertible" />
                  <div class="card-body">
                    <p class="card-text text text-dark text-center">Convertible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
