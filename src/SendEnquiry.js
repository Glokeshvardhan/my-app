import React from 'react'
import { Form } from 'react-router-dom'
import { useState } from 'react'

const SendEnquiry = () => {
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [projects, setProjects] = useState("")
    const [message, setMessage] = useState("")



    const postEnquiry = (e) => {
        e.preventDefault();
        const nameError = document.getElementById("nameError");
        const alphaExp = /^[a-zA-Z]+$/;
        // console.log(username,mobile,email,course,message);

        //name Validation
        if (username === "") {
            nameError.textContent = "Please enter your name";
        }
        else {
            if (username.match(alphaExp)) {
                nameError.textContent = "";
            } else {
                nameError.textContent = "Only Alphabetics";
            }
        }


        //mobile Validation
        const mobileError = document.getElementById("mobileError");
        const mobileExp = /^[0-9]+$/;
        if (mobile === "") {
            mobileError.textContent = "Please Enter Your mobile Number";
        } else {
            if (mobile.match(mobileExp)) {
                if (mobile.length === 10) {
                    mobileError.textContent = "";
                } else {
                    mobileError.textContent = "Please Enter 10 Digit Mobile Number";
                }
            } else {
                mobileError.textContent = "Only Numbers";
            }
        }

        // Gmail Address Validation
        const emailError = document.getElementById("emailError");
        const gmailExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (email === "") {
            emailError.textContent = "Please Enter Your Gmail Address";
        } else {
            if (email.match(gmailExp)) {
                emailError.textContent = ""; // Valid Gmail address
            } else {
                emailError.textContent = "Please Enter a Valid Gmail Address (e.g., example@gmail.com)";
            }
        }

    }

    return (
        <form onSubmit={postEnquiry}>
            < input type='text' name='username' placeholder='Enter Name' className='form-control mb-3' value={username} onChange={(e) => setUsername(e.target.value)} /><p id='nameError'></p>
            < input type='text' name='mobile' placeholder='Mobile Number' className='form-control mb-3' value={mobile} onChange={(e) => setMobile(e.target.value)} /><p id='mobileError'></p>
            < input type='text' name='email' placeholder='Email Address' className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} /> <p id='emailError'></p>
            < input type='text' name='projects' placeholder='About your Projects' className='form-control mb-3 p-3' value={projects} onChange={(e) => setProjects(e.target.value)} />
            < input type='text' name='message' placeholder='Message' className='form-control mb-3 p-4' value={message} onChange={(e) => setMessage(e.target.value)} />
            <input type='submit' className='btn btn-danger' />
        </form>
    )
}

export default SendEnquiry