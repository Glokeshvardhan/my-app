import React from 'react'
import banner from "./image/home1.webp"
import ass from "./image/home2.jpg"
import yas from "./image/home3.jpg"
import mas from "./image/home4.webp"
import mass from "./image/home5.webp"
import masy from "./image/home6.webp"
import masx from "./image/home7.webp"
import masz from "./image/home8.webp"
import { NavLink } from 'react-router-dom'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />







const Home = () => {
    
    return (

        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">


            <div class="carousel-inner" role="listbox ">
                <div class="carousel-item active mt-5">
                    <img
                        src={banner}
                        class="w-100 d-block"
                        alt="First slide"
                        style={{ height: "500px" }}
                    />
                </div>
                <div class="carousel-item mt-5">
                    <img
                        src={ass}
                        class="w-100 d-block"
                        alt="Second slide"
                        style={{ height: "500px" }}
                    />
                </div>
                <div class="carousel-item mt-5">
                    <img
                        src={yas}
                        class="w-100 d-block"
                        alt="Third slide"
                        style={{ height: "500px" }}
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            <div className='container p-10 ' style={{ height: "20px" }}></div>

            <div class="card mx-auto w-100 gradient-bg d-flex justify-content-center align-items-center  " style={{ width: "18rem", height: "300px", marginTop: "20px" }}>
                <div class="card-body text-center  p-5">
                    <h3 class="card-text pt-5">Case Studies</h3>
                    <h1 class="card-text hi p-5 fs-1">
                        <span class="empower">Empower.</span>
                        <span class="create">Create.</span>
                        <span class="Model">Model.</span>
                    </h1>  </div>

            </div>


            <div className='container p-10 ' style={{ height: "20px" }}></div>



            <h1 class="pt-5 ps-2 d-flex justify-content-center align-items-center">Our Recent
                <span class="Model ps-2">Work</span>
            </h1>
            <h4 class="pt-3 ps-4 d-flex justify-content-center align-items-center">See how our work enable companies to excel in their industry. </h4>


            <div className='d-flex justify-content-center align-items-center'>
                <div className='container bg-secondary m-5' style={{ height: "1px" }}></div>
            </div>


            <div class="container mb-3 px-5" style={{ width: "540px;" }} >
                <div class="row g-0">
                    <div class="col-md-4 py-2  h-75">
                        <img
                            src={mas}
                            class="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title p-3 mt-5">Ultimate Recruitment Referral Platform for Streamlined Hiring</h1>
                            <h6 class="card-text px-5">
                                Transforming a job referral platform with our expertise by developing a powerful referral program management solution for Cruit.
                            </h6>

                            <button type="button" class="btn btn-primary mx-5 m-3">
                                <NavLink className="nav-link active" to="/readmore" aria-current="page">
                                    Read  More
                                </NavLink>
                            </button>
                        </div>
                    </div>

                </div>
            </div>



            <div className='container p-10  bg-dark ' style={{ height: "10px" }}></div>



            <div class="container mb-3 px-5" style={{ width: "540px;" }} >
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title p-3 mt-5">Innovative Platform for Comprehensive Supply Chain Management</h1>
                            <h6 class="card-text px-5">
                                Building an order management platform to transform operations and improve efficiency in the brick manufacturing industry.
                            </h6>

                            <button type="button" class="btn btn-primary mx-5 m-3">
                                <NavLink className="nav-link active " to="/readmore" aria-current="page">
                                    Read  More
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 py-5  h-75">
                        <img
                            src={mass}
                            class="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                </div>
            </div>


            <div className='container p-10  bg-dark ' style={{ height: "10px" }}></div>

            <div class="container mb-3 px-5" style={{ width: "540px;" }} >
                <div class="row g-0">
                    <div class="col-md-4 py-5  h-75">
                        <img
                            src={masy}
                            class="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title p-3 mt-5">Boosting App Performance for Cultural Organizations</h1>
                            <h6 class="card-text px-5">
                                Performance optimization of a standalone app featuring high-resolution historical imagery.
                            </h6>

                            <button type="button" class="btn btn-primary mx-5 m-3">
                                <NavLink className="nav-link active" to="/readmore" aria-current="page">
                                    Read  More
                                </NavLink>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container p-10  bg-dark ' style={{ height: "10px" }}></div>

            <div class="container mb-3 px-5" style={{ width: "540px;" }} >
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title p-3 mt-5">AI-powered platform to Simplify Podcast Creation</h1>
                            <h6 class="card-text px-5">
                                We have developed an AI-powered podcast platform designed to elevate audio experiences. With advanced features like automatic transcription, episodes can be effortlessly transformed into searchable text, making content more accessible.
                            </h6>

                            <button type="button" class="btn btn-primary mx-5 m-3">
                                <NavLink className="nav-link active" to="/readmore" aria-current="page">
                                    Read  More
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 py-5  h-75">
                        <img
                            src={masx}
                            class="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                </div>
            </div>

            <div className='container  bg-dark  ' style={{ height: "10px" }}></div>

            <div class="container mb-3 px-5" style={{ width: "540px;" }} >
                <div class="row g-0">
                    <div class="col-md-4 py-5  h-80">
                        <img
                            src={masz}
                            class="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title p-3 mt-5">AI-Driven Stock Prediction Platform to Provide Traders with Insights</h1>
                            <h6 class="card-text px-5">
                                Developing a mobile app for an ultimate AI stock prediction platform, allowing users to trade based on data-driven insights.
                            </h6>

                            <button type="button" class="btn btn-primary mx-5 m-3">
                                <NavLink className="nav-link active" to="/readmore" aria-current="page">
                                    Read  More
                                </NavLink>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    )
}

export default Home