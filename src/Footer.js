import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="container-fluid p-5 text-bg-light p-5">
            <div className="row">
                <div className="col-12  col-md-5 col-lg-4 mb-4 ">
                    <div className="container-fluid p-2 ">
                        <div className="">
                            <h5 className="fw-bold">Brilliant + Works</h5>
                            <p>
                                Hello, we are  BRILLIAN’S.Trying to make an effort to put the right people for you to get the best results. Just insight !
                            </p>
                            <h5>We are
                                Hiring
                                hiring   <FontAwesomeIcon icon={faMicrophone} size="1x" color="blue" /></h5>
                            <button type="button" class="btn btn-primary mx-8 mt-3">
                                <NavLink className="nav-link active" to="/readmore" aria-current="page">
                                    View Position
                                </NavLink>
                            </button>

                        </div>
                        <img
                            src="https://www.brilworks.com/images/fb-footer.svg"
                            class="img-fluid rounded-start  m-4 "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/youtube-footer.svg"
                            class="img-fluid rounded-start    "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/insta-footer.svg"
                            class="img-fluid rounded-start  m-4  "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/linkedin-footer.svg"
                            class="img-fluid rounded-start    "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/behance-img.svg"
                            class="img-fluid rounded-start  m-3  "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/dribble-img.svg"
                            class="img-fluid rounded-start   "
                            alt="Card title"
                        />
                        <img
                            src="https://www.brilworks.com/images/upwork-footer.svg"
                            class="img-fluid rounded-start  m-3  "
                            alt="Card title"
                        />

                    </div>
                </div>
                <div className="col-6 col-sm-5 col-md-4 col-lg-2 mb-2 ">
                    <div className="container-fluid p-2 ">
                        <div className="">
                            <h5 className="fw-bold">Quick Links</h5>
                            <p> Home
                            </p>
                            <p>Contact Us</p>
                            <p> Portfolio</p>
                            <p> About</p>
                            <p> Our Process</p>
                            <p>Blogs</p>



                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-5 col-md-4 col-lg-2 mb-2">
                    <div className="container-fluid p- ">
                        <div className="">
                            <h5 className="fw-bold">Solutions</h5>
                            <p> Fintech
                            </p>
                            <p>Fleet Management + GPS</p>
                            <p> Healthcare</p>
                            <p>Media & Enterainment</p>

                        </div>

                    </div>
                </div>
                <div className="col-6  col-md-5 col-lg-2 mb-2">
                    <div className="container-fluid p-2 ">
                        <div className="">
                            <h5 className="fw-bold">Technologies</h5>
                            <p> Java
                            </p>
                            <p>Nodejs</p>
                            <p> Reactjs</p>
                            <p> Read Native</p>
                            <p> AWS Development</p>
                            <p>UI/UX Development</p>
                            <p>Blockchain Development</p>

                        </div>

                    </div>
                </div>
                <div className="col-6 col-sm-5 col-lg-2 mb-2 ">
                    <div className="container-fluid p-2 ">
                        <div className="">
                            <h5 className="fw-bold">Contact Sales</h5>
                            <p>   <FontAwesomeIcon icon={faPhoneAlt} size="1x" color="green" /> + 91 9346295263
                            </p>
                            <p>              <FontAwesomeIcon icon={faEnvelope} size="1x" color="orange" />  gottalokesh@gmail.com</p>

                        </div>


                    </div>

                </div>

            </div>

            <div className='row'>
                <div className="col-12 col-md-5 col-lg-6 mb-4 ">
                    <h5 className="fw-bold">Partnerships:</h5>


                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Fselect-tier-service-partner-light-1.png&w=384&q=75"
                        class="img-fluid rounded-start  m-3  ng"
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Freview-adalo.png&w=384&q=75"
                        class="img-fluid rounded-start  m-3 fv  "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/images/Storyblok.svg"
                        class="img-fluid rounded-start  m-3 fv "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/images/dotCMS-logo.svg"
                        class="img-fluid rounded-start  m-3 fv  "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Freview-liferay.png&w=384&q=75"
                        class="img-fluid rounded-start  m-2 fs "
                        alt="Card title"
                    />
                </div>


                <div className="col-12 col-md-5 col-lg-6 mb-4 ">
                    <h5 className="fw-bold">Partnerships:</h5>


                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Fglobal_award_2023%20(1).webp&w=256&q=75"
                        class="img-fluid rounded-start  m-3  ng"
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Ftop-clutchco-software-developers-gaming-india.webp&w=256&q=75"
                        class="img-fluid rounded-start  m-3 ng  "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Ftop_the_manifest_app_development_company_ahmedabad_award.png&w=128&q=75"
                        class="img-fluid rounded-start  m-3 ng "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2FTop-Mobile-App-Development-Company2.webp&w=128&q=75"
                        class="img-fluid rounded-start  m-3 ng  "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Ftop_the_manifest_software_developers_ahmedabad_2023_award.png&w=128&q=75"
                        class="img-fluid rounded-start  m-2 ng "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Ftop-clutchco-software-developers-gps-navigation-gis-india.webp&w=256&q=75"
                        class="img-fluid rounded-start  m-2 ng "
                        alt="Card title"
                    />
                    <img
                        src="https://www.brilworks.com/_next/image/?url=%2Fimages%2Fglobal_award_spring_2024.webp&w=256&q=75"
                        class="img-fluid rounded-start  m-2 ng "
                        alt="Card title"
                    />
                </div>

            </div>

            <div className="container-fluid ">
                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-center ">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className='mx-2' />
                      Belgam,Parvathipuram ,Manyam dist 535501.
                    </p>
                </div>

                <div className='container bg-secondary m-2' style={{ height: "1px" }}></div>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
                    <p className="text-center mb-2 mb-md-0">
                        ©Lokeshvardhan 2024
                    </p>

                    <div className="d-flex justify-content-center mt-2 mt-md-0">
                        <p className='m-3'>Terms of Service</p>
                        <p className='m-3'>Privacy Policy</p>
                        <p className='m-3'>Sitemap</p>
                    </div>
                </div>
            </div>


        </footer >





    )
}

export default Footer