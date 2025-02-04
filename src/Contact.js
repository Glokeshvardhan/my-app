import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
    return (
        <div className='container p-5'>
            <div className='row pt-5'>
                <div className='col-md-6 shadow p-5'>
                    <h2 className='text-center'> Contact Us</h2>
                    <SendEnquiry />
                </div>
                <div className='col-md-6 gd  shadow-sm  p-5'>
                    <h1>Ready to scale your business to new heights?</h1>
                      <p>Just fill out the form, and let our experts look after the rest. Here’s what will happen next:</p>
                      <h2>1. Initiating Contact</h2>
                      <p>We will contact you within 24 business hours.</p>
                      <h2>2. Share Your Requirement</h2>
                      <p>Tell us exactly what you’re looking for and how would you like our team to help you further. Our technical team will evaluate your requirement and reach back to you with a project plan</p>
                      <h2>3. Sign Non-Disclosure Agreement</h2>
                      <p>Signing an NDA is like putting your idea in a safe deposit box. Be rest assured about any privacy concerns.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact