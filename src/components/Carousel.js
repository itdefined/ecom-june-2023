
function Carousel(){
  return(
        <div id="carouselExampleControls" className="carousel slide m-0 p-0" data-bs-ride="carousel">
          <div className="carousel-inner m-0 p-0">
            <div className="carousel-item active m-0 p-0">
              <img src="/images/carousel1.jpg" className="d-block w-100 m-0 p-0" style={{height:"500px"}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="/images/carousel2.jpg" className="d-block w-100" style={{height:"500px"}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="/images/carousel3.jpg" className="d-block w-100" style={{height:"500px"}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



  )
}

export default Carousel;