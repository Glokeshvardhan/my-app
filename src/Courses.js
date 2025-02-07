// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { NavLink } from 'react-router-dom'
import jop from "./image/course1.webp";
import opd from "./image/course2.webp";
import opc from "./image/course3.webp";






const Courses = () => {
    return (



        <div id="carouselExampleCaptions" className="carousel slide pt-5  " data-bs-ride="carousel">
            <div className="carousel">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img src="https://www.brilworks.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F219851%2F1398x780%2Fa844d90b96%2Ffintech-1.webp&w=1920&q=75" className=" hds pt-5 border-3" alt="" />
                    <div className="carousel-caption  ">
                        <h5 className="display-6 display-md-5 display-lg-4 d-flex justify-content-left">
                            FINTECH SOFTWARE DEVELOPMENT COMPANY
                        </h5>


                    </div>
                </div>


            </div>





            <div className="row  p-5 col-12  mt-5  d-flex justify-content-center align-items-center ">
                <div className="col-sm-5  ">

                    <div className="card-body">
                        <h2 className="card-title">DELIVERING SECURE FINTECH SOFTWARE DEVELOPMENT SERVICES TO TRANSFORM THE FINANCIAL ECOSYSTEM.</h2>

                    </div>
                </div>

                <div className="col-sm-5">

                    <div className="card-body">

                        <p className="card-text">Step into a new era of financial flexibility with our sophisticated, intuitive & highly-secure fintech applications. Our fintech software development services are built to drive business transformation and maximize ROI.</p>

                        <NavLink className="nav-link active" to="/readmore">
                            <button type="button" className="btn btn-primary m-4">Go somewhere</button>
                        </NavLink>

                    </div>

                </div>
            </div>



            <div classNameName='d-flex justify-content-center align-items-center'>
                <div className='container bg-primary m-4' style={{ height: "1px" }}></div>
            </div>

            <div className='container-fluid p-5 '>
                <h1 className='d-flex justify-content-center align-items-center '>OUR END-TO-END FINTECH SOFTWARE
                </h1>
                <h1 className='d-flex justify-content-center align-items-center '>
                    DEVELOPMENT SERVICES</h1>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='  col-24  col-md-5 col-sm-12'>





                        <div className="accordion " id="accordionExample">
                            <div className="accordion-item border border-primary ">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h3>Custom Fintech Software Developments</h3>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our custom fintech software development services include application development, custom reporting, and real-time data interaction.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-primary">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h3>Banking App Development</h3>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Develop applications such as digital wallets or mobile banking apps with our fintech app development services that let you expand your digital footprint by making it easier for your clients to do banking from any device, at any time.                                            </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-primary">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h3> Insutance App Development</h3>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        We know that customer experience is an essential part of building a successful InsurTech app. Our team specializes in custom insurance application development, with no compromises on quality or usability.          </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-primary">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h3> FinOps Services </h3>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        With the right cloud cost management, your business can scale effectively and avoid cost overheads. From managing your cloud custodian services to proactive detection of technology costs to constructing agile, scalable solutions for you, our fintech software developers manage it all.                                     </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-primary">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <h3>Fintech Software Security </h3>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        We work with you to ensure your application remains up and running. Whether it’s in server management, data security, or continuous monitoring.                                </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-primary">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <h3> Wallet App Development</h3>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Giving customers the ability to pay with a smartphone-specific digital wallet is an easy way to encourage loyalty and ensure customer satisfaction.                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                    <div className="col-12 col-md-5 col-sm-12">
                        <div className=" text-center p-4 d-flex flex-column align-items-center  ">
                            <img src={jop} className="img-fluid rounded mt-3  rounded-5" alt="React Logo" />

                        </div>
                    </div>


                </div>

            </div>













            <div className='d-flex justify-content-center align-items-center'>
                <div className='container bg-primary m-4' style={{ height: "1px" }}></div>
            </div>

            <div className='container-fluid p-5 '>
                <h1 className='d-flex justify-content-center align-items-center '>INDUSTRY-SPECIFIC
                </h1>
                <h1 className='d-flex justify-content-center align-items-center '>
                    FINTECH SOFTWARE DEVELOPMENT</h1>
                <div className='row d-flex justify-content-center align-items-center'>



                    <div className="col-12 col-md-5 col-sm-12">
                        <div className=" text-center p-4 d-flex flex-column align-items-center">
                            <img src={opd} className="img-fluid rounded mt-3" alt="React Logo" />

                        </div>
                    </div>

                    <div className="col-24 col-md-5 col-sm-12">
                        <h3 className='p-2'>Wealth Management</h3>

                        <div className="accordion-body p-2">
                            We build fintech apps to better manage financial assets, seek insight into consumer trends and improve communication.
                        </div>

                        <h3 className='p-2'>Lending</h3>
                        <div className="accordion-body p-2">
                            We build technology solutions to enhance your operations and automate and improve your lending processes to facilitate instant loan approval, KYC verification, and consumer eligibility checks.
                        </div>
                        <h3 className='p-2'>Wallet App Development</h3>
                        <div className="accordion-body p-2">
                            Giving customers the ability to pay with a smartphone-specific digital wallet is an easy way to encourage loyalty and ensure customer satisfaction.


                        </div>
                        <h3 className='p-2'>Fintech Software Security</h3>
                        <div className="accordion-body p-2">
                            We work with you to ensure your application remains up and running. Whether it’s in server management, data security, or continuous monitoring.
                        </div>


                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='container bg-primary m-4' style={{ height: "2px" }}></div>
                    </div>


                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" />


                    <div className='container-fluid p-5 '>

                        <div className='row d-flex justify-content-center align-items-top'>

                            <div className="col-12 col-md-5 col-sm-12">
                                <h1>OUR PORTFOLIO</h1>
                                <h6 className="m-3">Reliant Business Valuations Software Development</h6>
                                <p className="m-3">
                                    New-age financing software developed for small businesses and services companies.
                                </p>
                                <NavLink to="/readmore" className="btn btn-primary border-5 m-3">
                                    &gt; Know More
                                </NavLink>
                            </div>



                            <div className="col-12 col-md-5 ">
                                <img src={opc} class="img-fluid " alt="" />
                            </div>

                        </div>

                    </div>
                </div>



            </div>
        </div>



    )
}

export default Courses