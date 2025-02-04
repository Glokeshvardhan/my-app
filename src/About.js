import React from 'react';
import maxz from "./image/home9.webp";
import mn from "./image/about1.webp";
import mb from "./image/about2.webp";
import mv from "./image/about3.webp";
import mc from "./image/about4.webp";
import mx from "./image/about5.svg";
import mz from "./image/about6.webp";
import ml from "./image/about7.webp";
import mk from "./image/about8.webp";
import mj from "./image/about9.webp";
import mh from "./image/about10.webp";
import mg from "./image/about11.webp";
import mf from "./image/about12.webp";
import md from "./image/about13.webp";
import mq from "./image/about14.webp";
import ms from "./image/about15.webp";
import ma from "./image/about16.webp";
import mp from "./image/about17.webp";
import mo from "./image/about18.webp";
import mpo from "./image/about19.png";







const About = () => {
    return (
        <div className="container-fluid mb-3 ">
            {/* Section 1: IT Staff Augmentation */}
            <div className="row align-items-center g-0 p-5">
                {/* Text Content */}
                <div className="col-lg-8 col-md-12 ">
                    <div className="card-body ">
                        <h1 className="card-title  pt-5">IT Staff Augmentation Service</h1>
                        <h6 className="card-text  ">
                            Access a global pool of experts for the niche skillset you need. Our IT Staff augmentation service offers a strategic solution to bridge the talent gap and incorporate immediate expertise into your team.
                        </h6>
                        <button type="button" className="btn btn-primary   mt-3">
                            Scale your team today
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="col-lg-4 col-md-12   mt-5">
                    <img src={maxz} className="img-fluid rounded-start w-100" alt="IT Staff Augmentation" />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="row text-center p-5 ">
                <div className="col-6 col-md-3">
                    <div className="card gi">
                        <div className="card-body">
                            <h3 className="card-title">8+</h3>
                            <p className="card-text">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card gi">
                        <div className="card-body">
                            <h3 className="card-title">100+</h3>
                            <p className="card-text">Experts</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mt-3 mt-md-0">
                    <div className="card gi">
                        <div className="card-body">
                            <h3 className="card-title">250+</h3>
                            <p className="card-text">Projects</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mt-3 mt-md-0">
                    <div className="card gi">
                        <div className="card-body">
                            <h3 className="card-title">98%</h3>
                            <p className="card-text">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid  p-5'>
                <h1 className='text-center'>Why Brilworks For IT Staff Augmentation Service</h1>
                <img src={mpo} className="img-fluid rounded-start w-100 pt-5" alt="IT Staff Augmentation" />
            </div>

            <div class="container-fluid hg py-5">

                <h1 className='text-center '>Tech Stack We Use</h1>
                <div class="row g-3 p-5">
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mn} class="img-fluid rounded mt-3 " alt="React Logo" />
                            <p class="mt-2">React</p>
                        </div>
                    </div>

                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mb} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Angular</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mv} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Vue.js</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mc} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Node.js</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mx} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Python</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mz} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">MySQL</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={ml} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">PostgreSQL</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mk} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">MongoDB</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mj} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">AWS</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mh} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Figma</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mg} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Adobe XD</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mf} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">GitLab</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={md} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Github</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mq} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Bitbucket</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={ms} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Kubernetes</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={ma} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">DevOps</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mp} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">Tableau</p>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="box text-center p-4 d-flex flex-column align-items-center">
                            <img src={mo} class="img-fluid rounded mt-3" alt="React Logo" />
                            <p class="mt-2">DynamoDB</p>
                        </div>
                    </div>

                </div>
            </div>
  
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



            <div class="container-fluid ">
                <h1 class="text-center p-5">FAQs</h1>

                <div class=" mt-4">
                    <div class="accordion " id="accordionExample">

                        <div class="accordion m-3" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne">
                                        <h4>1. What is IT staff augmentation?</h4>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                                    <div class="accordion-body">
                                        IT staff augmentation helps businesses by adding temporary or permanent IT professionals to their existing teams. This approach improves operational efficiency and meets project deadlines efficiently.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item m-3">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    <h4>2. What are the costs of staff augmentation?</h4>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    The cost varies based on experience level, engagement duration, and location.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item m-3">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree">
                                    <h4>3. What IT staff augmentation models do you offer?</h4>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    We offer three models: Dedicated Developer (monthly), Hourly Basis, and Time & Material (T&M) Model.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default About;
