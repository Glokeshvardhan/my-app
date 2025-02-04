import React from 'react'
import { NavLink } from 'react-router-dom'
import mas from "./image/home4.webp"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaClock, FaHandHoldingUsd, FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



const Readmore = () => {
  return (
    <section className='container-fluid p-0 m-0 '>
      <NavLink className="nav-link active" to="/Readmore" aria-current="page">  </NavLink>


      <div className="container mb-3 px-lg-5 px-md-3 px-2">
        <div className="row g-0 align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-8 col-md-7 col-12 p-4">
            <div className="card-body text-center mt-5 p-md-5 p-3">
              <h1 className="card-title">
                Ultimate Recruitment Referral Platform for Streamlined Hiring
              </h1>
              <h6 className="card-text p-2">
                Transforming a job referral platform with our expertise by
                developing a powerful referral program management solution for
                Cruit.
              </h6>

              {/* Icons Section */}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                {/* Location */}
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt size={30} color="black" />
                  <h5 className="p-2">Recruitment</h5>
                </div>

                <p className="m-0">|</p>

                {/* People */}
                <div className="d-flex align-items-center">
                  <FaUsers size={30} color="black" />
                  <h5 className="p-2">Amsterdam</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-4 col-md-5 col-12 text-center py-md-5 py-3">
            <img
              src={mas}
              className="img-fluid rounded-start p-2"
              alt="Card title"
            />
          </div>
        </div>
      </div>

      <section
        className="d-flex flex-wrap justify-content-center align-items-center p-lg-5 p-5 gap-5 text-center"
        style={{
          border: "0.2rem solid black", // 10rem border
          backgroundColor: "#fae16c"
        }}
      >
        {/* Money Trade Icon */}
        <div style={{ fontSize: "2rem", color: "black" }}>
          <FaHandHoldingUsd /> 30%
          <h3 style={{ color: "black" }}>Increase in employee participation</h3>
        </div>

        {/* Location Icon 1 */}
        <div style={{ fontSize: "2rem", color: "black" }}>
          <FaMapMarkerAlt /> 80%
          <h3 style={{ color: "black" }}>Reduction in manual intervention</h3>

        </div>

        {/* Location Icon 2 */}
        <div style={{ fontSize: "2rem", color: "black" }}>



          <FaClock /> 40 Hours
          <h3 style={{ color: "black" }}>Saved monthly</h3>

        </div>
      </section>

      <div className='row p-5 '>
        <div className='containerd-flex flex-wrap justify-content-left align-items-center '>
          <h1>Overview</h1>
          <div
            className=" d-flex flex-wrap justify-content-left align-items-center mt-3 mx-2 "
            style={{
              width: "10%",
              height: "4px",
              background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            }}
          ></div>
          <h6 className='m-3'>Our client, Cruit, set out to build a platform that would revolutionize the recruitment process, particularly focusing on streamlining employee referral program. They wanted to develop a solution enabling managers to oversee everything from a single dashboard with next-level features, such as automated reward fulfillment, real-time candidate tracking, and integration with existing HR tools.</h6>
          <h6 className=' m-3'>Cruit wanted to address the typical challenges businesses face with referral programs, such as fragmented workflows, scattered spreadsheets, lack of follow-ups, and a disconnected reward system.</h6>
        </div>
      </div>



      <div className='row p-5 ' style={{ background: "#dddcd9 " }}>
        <div className='containerd-flex flex-wrap justify-content-left align-items-center '>
          <h1>Challenges</h1>
          <div
            className=" d-flex flex-wrap justify-content-left align-items-center mt-3 mx-2 "
            style={{
              width: "10%",
              height: "4px",
              background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            }}
          ></div>
          <h6 className='m-3'>Our client approached us to develop a referral platform for the recruitment industry that would assist HR professionals and organizations in transforming the hiring process. The client wanted a solution with features including a referral rewards program, automation capabilities, and integration with existing HR solutions.</h6>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Developing automation features and integration with HR solutions</h6>
          </div>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Building a Centralize referral management into one intuitive platform</h6>
          </div>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Applicant tracking system and reward system</h6>
          </div>
        </div>
      </div>


      <div className='row p-5 ' style={{ background: "white " }}>
        <div className='containerd-flex flex-wrap justify-content-left align-items-center '>
          <h1>Solution</h1>
          <div
            className=" d-flex flex-wrap justify-content-left align-items-center mt-3 mx-2 "
            style={{
              width: "10%",
              height: "4px",
              background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            }}
          ></div>
          <h6 className='m-3'>Our team chose ReactJS for the dynamic user interface and component-based architecture and Nodejs for server-side rendering and real-time communication. The combination of these technologies helped us build a powerful and flexible platform for modern web development.</h6>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>ReactJS for building a dynamic and interactive user interface.</h6>
          </div>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Node.js for handling server-side logic, database interactions, and API endpoints.</h6>
          </div>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Facilitate communication and track candidate interactions using various channels and a CRM system.</h6>
          </div>
          <div className="d-flex justify-content-left align-items-center">
            <FaCheckCircle size={25} color="blue" />
            <h6 className='m-3'>Provide comprehensive analytics and reporting capabilities to evaluate the referral program's effectiveness.</h6>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Readmore