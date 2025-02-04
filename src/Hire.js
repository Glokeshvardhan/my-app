import React from 'react'
import jos from "./image/hire1.webp"
import { NavLink } from 'react-router-dom'
import hgf from "./image/hire2.jpg"
import hgff from "./image/hire3.jpg"
import hgfff from "./image/hire4.jpg"
import poi from "./image/hire5.png"
import poii from "./image/hire6.png"
import poiii from "./image/hire7.png"





import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Hire = () => {
  return (

    <div id="carouselExampleCaptions" class="carousel slide pt-5  " data-bs-ride="carousel">
      <div class="carousel">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

      </div>
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img
            src={jos}
            class="hds pt-5 border-3"
            alt="Second slide"

          />
          <div class="carousel-caption  ">
            <h5 class="display-1 display-md-6 display-lg-4 d-flex justify-content-left">
              HIRE
              REACTJS
              DEVELOPERS
            </h5>


          </div>
        </div>


      </div>

      <div class="row  p-5 col-12  mt-5  d-flex justify-content-center align-items-center ">
        <div class="col-sm-4  ">

          <div class="card-body">
            <h1 class="card-title ">Hire ReactJS </h1><h1>Developers to Fire Up</h1> <h1>Your Frontend</h1>

          </div>
        </div>

        <div class="col-sm-6">

          <div class="card-body">

            <h5 class="card-text ">Our experienced Reactjs developers have built and maintained scalable, intuitive, and interactive applications that have served millions of users. If you’re planning on using React software development services, we’re the right partner for you.</h5>

            <div className="d-flex m-3 flex-column flex-sm-row justify-content-center justify-content-md-start">
              <NavLink to="/readmore" className="btn btn-primary me-sm-3 mb-3 mb-sm-0">Plan & Pricing</NavLink>
              <NavLink to="/readmore" className="btn btn-primary">Hire ReactJS Developers</NavLink>
            </div>

          </div>

        </div>
      </div>


      <div className='d-flex justify-content-center align-items-center'>
        <div className='container bg-primary m-4' style={{ height: "1px" }}></div>
      </div>





      <div className='container-fluid d-flex justify-content-center align-items-center p-5'>
        <h1 class="">
          HIRE REACT JS DEVELOPERS TO BUILD HIGH PERFORMING APPS
        </h1>
      </div>



      <div className="row col-md-12 justify-content-center p-5 ">
        <div className=" col-auto col-md-4 align-items-left ">
          <div className="card">
            <div className="card-body d-flex align-items-center">

              <img
                src={hgf}
                className="jds me-3"
                alt="Juned Lan"
              />

              <div>
                <h1>Durga Prasad</h1>
                <h6>Sr. Software Engineer</h6>
              </div>
            </div>
            <p className='m-4'>Dynamic Computer Science professional with hands-on experience in web development, cloud computing. Skilled in
              HTML, CSS, JavaScript, and frameworks like React and Flask, dedicated to building user-focused
              .</p>


            <div className='d-flex justify-content-center align-items-center '>
              <div className='container bg-dark  col-md-11 col-sm-11' style={{ height: "1px" }}></div>
            </div>


            <div className='d-flex align-items-center p-4'>
              <i className="fas fa-star  " style={{ color: "gold", fontSize: "24px" }}></i>

              <h4 className='ms-2'>Expertise in</h4>
            </div>

            <div className="d-flex flex-wrap justify-content-center mx-4 pb-3">
  <div className="card p-2 m-2 bg-primary" style={{ width: 'auto' }}>
    ReactJs
  </div>
  <div className="card p-2 m-2 bg-info" style={{ width: 'auto' }}>
    Redux
  </div>
  <div className="card p-2 m-2 bg-success" style={{ width: 'auto' }}>
    HTML
  </div>
  <div className="card p-2 m-2 bg-warning" style={{ width: 'auto' }}>
    CSS
  </div>
</div>


            <div className='p-3 d-flex align-items-center  '>
              <i className="fas fa-check text-success px-3" style={{ fontSize: "24px" }}></i>
              <h6>8+ Years of Experience</h6>
            </div>
            <div className='  d-flex align-items-center px-3 '>
              <i className="fas fa-clock text-primary px-3" style={{ fontSize: "24px" }}></i>
              <h6>Full Time Available</h6>
            </div>

            <a className=' d-flex align-items-center justify-content-center' style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/durga-prasad-kakileti-bannu/" target="_blank" rel="noopener noreferrer">
              <button className='jrs d-flex align-items-center justify-content-center btn btn-primary m-5'>
                <i className="fas fa-hand-paper text-secondary" style={{ fontSize: "24px" }}></i>
                <h6 className='mx-3 p-1'>Hire Durga Prasad</h6>
              </button>

            </a>
          </div>

        </div>









        <div className=" col-auto col-md-4 align-items-left ">
          <div className="card">
            <div className="card-body d-flex align-items-center">

              <img
                src={hgff}
                className="jds me-3"
                alt="Juned Lanja"
              />

              <div>
                <h1>Siva Ram Raju</h1>
                <h6>Software Engineer</h6>
              </div>
            </div>
            <p className='m-4'>specializing in web development and data science.
              Proficient in Python, Machine Learning, and full-stack technologies, with a proven track record of building scalable
              applications and predictive models..</p>



            <div className='d-flex justify-content-center align-items-center '>
              <div className='container bg-dark  col-md-11 col-sm-11' style={{ height: "1px" }}></div>
            </div>


            <div className='d-flex align-items-center p-4'>
              <i className="fas fa-star  " style={{ color: "gold", fontSize: "24px" }}></i>

              <h4 className='ms-2'>Expertise in</h4>
            </div>

            <div className="d-flex flex-wrap justify-content-center mx-4 pb-3">
  <div className="card p-2 m-2 bg-primary" style={{ width: 'auto' }}>
    ReactJs
  </div>
  <div className="card p-2 m-2 bg-info" style={{ width: 'auto' }}>
    AngularJS
  </div>
  <div className="card p-2 m-2 bg-success" style={{ width: 'auto' }}>
    Typescript
  </div>
  <div className="card p-2 m-2 bg-warning" style={{ width: 'auto' }}>
    CSS
  </div>
</div>


            <div className='p-3 d-flex align-items-center  '>
              <i className="fas fa-check text-success px-3" style={{ fontSize: "24px" }}></i>
              <h6>5+ Years of Experience</h6>
            </div>
            <div className='  d-flex align-items-center px-3 '>
              <i className="fas fa-clock text-primary px-3" style={{ fontSize: "24px" }}></i>
              <h6>Full Time Available</h6>
            </div>

            <a className=' d-flex align-items-center justify-content-center' style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/sivaramaraju-pakalapati-b45045270/" target="_blank" rel="noopener noreferrer">
              <button className='jrs d-flex align-items-center justify-content-center btn btn-primary m-5'>
                <i className="fas fa-hand-paper text-secondary" style={{ fontSize: "24px" }}></i>
                <h6 className='mx-3 p-1'>Hire Siva Ram Raju</h6>
              </button>

            </a>


          </div>

        </div>






        <div className=" col-auto col-md-4 align-items-left ">
          <div className="card">
            <div className="card-body d-flex align-items-center">

              <img
                src={hgfff}
                className="jds me-3"
                alt="Juned Lanja"
              />

              <div>
                <h1>Ravi Buraga</h1>
                <h6>Sr. Software Engineer</h6>
              </div>
            </div>
            <p className='m-4'>Full Stack Web Developer with expertise in React.js, Node.js, and AWS technologies. Skilled in de
              signing and deploying scalable web applications, optimizing system performance, and ensuring seamless
              cloud integration..</p>


            <div className='d-flex justify-content-center align-items-center '>
              <div className='container bg-dark  col-md-11 col-sm-11' style={{ height: "1px" }}></div>
            </div>


            <div className='d-flex align-items-center p-4'>
              <i className="fas fa-star  " style={{ color: "gold", fontSize: "24px" }}></i>

              <h4 className='ms-2'>Expertise in</h4>
            </div>

            <div className="d-flex flex-wrap justify-content-center mx-3 pb-3">
  <div className="card p-2 m-2 bg-primary" style={{ width: 'auto' }}>
    Getstream
  </div>
  <div className="card p-2 m-2 bg-info" style={{ width: 'auto' }}>
    NodeJS
  </div>
  <div className="card p-2 m-2 bg-success" style={{ width: 'auto' }}>
    Express.js
  </div>
  <div className="card p-2 m-2 bg-warning" style={{ width: 'auto' }}>
    Sails.js
  </div>
</div>


            <div className='p-3 d-flex align-items-center  '>
              <i className="fas fa-check text-success px-3" style={{ fontSize: "24px" }}></i>
              <h6>8+ Years of Experience</h6>
            </div>
            <div className='  d-flex align-items-center px-3 '>
              <i className="fas fa-clock text-primary px-3" style={{ fontSize: "24px" }}></i>
              <h6>Full Time Available</h6>
            </div>

            <a className=' d-flex align-items-center justify-content-center' style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/ravi-buraga-54b0bb280/" target="_blank" rel="noopener noreferrer">
              <button className='jrs d-flex align-items-center justify-content-center btn btn-primary m-5'>
                <i className="fas fa-hand-paper text-secondary" style={{ fontSize: "24px" }}></i>
                <h6 className='mx-3 p-1'>Hire Ravi Buraga</h6>
              </button>

            </a>
          </div>




        </div>

      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <div className='container bg-primary m-4' style={{ height: "1px" }}></div>
      </div>






      <div className="container-fluid overflow-hidden">
        {/* Section Heading */}
        <h1 className="text-center">BENEFITS OF HIRING DEDICATED DEVELOPERS</h1>
        <p className="px-5 py-5 ">
          Hiring a dedicated development team from a React JS Development Company empowers companies across the globe to
          access expert talent without any limitation of location. It enables you to keep up with the pace of technological
          change while keeping your costs down.
        </p>

        {/* First Row */}
        <div className="container text-center">
          <div className="row justify-content-center mx-0">
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-hand-point-up fa-4x text-primary"></i>
              <h3>Dedicated Resources Demand</h3>
            </div>
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-headset fa-4x text-info"></i>
              <h3>Emergency Support</h3>
            </div>
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-project-diagram fa-4x text-success"></i>
              <h3>Scalable Projects</h3>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="container text-center">
          <div className="row justify-content-center mx-0">
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-clock fa-4x text-warning"></i>
              <h3>Quick-Turnaround Time</h3>
            </div>
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-lightbulb fa-4x text-danger"></i>
              <h3>Complete Autonomy</h3>
            </div>
            <div className="pwq col-md-4 col-sm-6 p-3">
              <i className="fas fa-database fa-4x text-primary"></i>
              <h3>Quality Infrastructure</h3>
            </div>
          </div>
        </div>



      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <div className='container bg-primary m-4' style={{ height: "1px" }}></div>
      </div>


      <h1 className='p-3 text-center mt-5'>THE RIGHT REACT JS COMBINATIONS
        JUST FOR YOU</h1>

      <div className="container my-5 ">
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-md-5 col-12 mb-4  ">
            <div className="card p-3 shadow-sm p-5 mew">
              <div className="d-flex flex-wrap align-items-center">
                <img src={poi} className="jds me-4 img-fluid" alt="Juned Lanja" />
                <img src={poii} className="jds me-2 img-fluid" alt="Juned Lanja" />
              </div>
              <div className="mt-3 p-2">
                <h3>1. React Node Developer</h3>
                <p>
                  React Node is a powerful combination of the two popular JavaScript technologies, React.js and Node.js.
                  Hire React Node developers from us to add amazing functionality and scalability to your projects.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-5 col-12 mb-4 mx-5 ">
            <div className="card p-3 shadow-sm p-5 mew">
              <div className="d-flex flex-wrap align-items-center">
                <img src={poi} className="jds me-4  img-fluid" alt="Juned Lanja" />
                <img src={poiii} className="jds me-2 img-fluid" alt="Juned Lanja" />
              </div>
              <div className="mt-3 p-2">
                <h3>2. React Java Developer</h3>
                <p>
                  Modernize your projects with a React-driven website and Java backend. We’ll create an app that’s visually beautiful, full of features, and works on every device. Hire full stack react developers from us to build a feature-rich interface .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>



  )
}

export default Hire