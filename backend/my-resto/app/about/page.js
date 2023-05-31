function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <img src="https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={500} className="m-4 rounded-3" alt="County Image" />
          </div>
          <div className="col-lg-5 mt-5">
            <h1 className="ffasc">Discover Our County</h1>
            <p className="kleeone text-light fs-4">
              Welcome to our beautiful county! 
              Explore the breathtaking landscapes and charming towns that define our region.
              From rolling hills to picturesque coastlines, our county offers a diverse range of natural wonders.
              Immerse yourself in the rich history and culture of our local communities.
              Whether you're a nature enthusiast, history buff, or food lover, there's something here for everyone.
              <img src="https://images.pexels.com/photos/3221165/pexels-photo-3221165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={80} className="love" alt="Heart Icon"></img>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
