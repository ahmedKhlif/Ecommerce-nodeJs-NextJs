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
            <img src="images/carousel1.jpg" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3 class>Burgers are our love language</h3>
              <p>extra cheese, please</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/carousel2.jpg" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Nothing brings people together like good pasta</h5>
              <p>Mamma mia!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/carousel3.jpg" class="d-block w-100 overlay" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>having a bad day? here, have a pizza</h5>
              <p>a little slice of heaven</p>
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
      <div class='container'>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4">
            <h1 class="text">Our Best Sellers</h1>
          </div>
          <div class="col-lg-7">
            <div class="row m-5">
              <div class="col card me-5">
                <img src="images/burger.jpg" class="card-img-top" alt="cheese burger" />
                <div class="card-body">
                  <p class="card-text text text-dark text-center">Cheese Burger</p>
                </div>
              </div>
              <div class="col card">
                <img src="images/pizza.jpg" class="card-img-top" alt="pizza pepperoni" />
                <div class="card-body">
                  <p class="card-text text text-dark text-center">Pepperoni Pizza</p>
                </div>
              </div>
              <div class="row m-5">
                <div class="col card me-5">
                  <img src="images/pestopasta1.jpg" class="card-img-top" alt="pesto pasta" />
                  <div class="card-body">
                    <p class="card-text text text-dark text-center">Pesto Pasta</p>
                  </div>
                </div>

                <div class="col card me-5">
                  <img src="images/sushi.jpg" class="card-img-top" alt="pesto pasta" />
                  <div class="card-body">
                    <p class="card-text text text-dark text-center">Sushi</p>
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


