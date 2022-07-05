
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
function Contact() {

    const sendQuery = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ewlhpov","template_lf3t77s",e.target,"U9PdBenmPNPiIBAOj").then((res=>{
            alert("Email sent successfully");
        })).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={sendQuery}>
                <div className="form-group my-3">
                    <label for="exampleInputName">Enter your name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your name" />
                </div>
                <div className="form-group my-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputMessage">Enter your message</label>
                    <input type="text" name="message" className="form-control" id="exampleInputMessage" aria-describedby="emailHelp" placeholder="Enter message" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>

    )
}

export default Contact