import React, { useState } from "react";
import axios from "axios";

import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    suburb: "",
    email: "",
    phone: "",
    method: "",
    message: "",
    urgency: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        suburb: "",
        email: "",
        phone: "",
        method: "",
        message: "",
        urgency: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xgerlbll",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section>
      <form className={styles.form} onSubmit={handleOnSubmit}>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />

        <input
          id="suburb"
          type="text"
          name="suburb"
          placeholder="Suburb"
          onChange={handleOnChange}
          required
          value={inputs.suburb}
        />

        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="Email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

        <input
          id="phone"
          type="number"
          name="phone"
          placeholder="Phone number"
          onChange={handleOnChange}
          required
          value={inputs.phone}
        />

        <select
          id="method"
          name="method"
          onChange={handleOnChange}
          required
          value={inputs.method}
        >
          <option value="" selected disabled hidden >Preferred contact method</option>
          <option value="Email">Phone</option>
          <option value="Phone">Email</option>
        </select>

        <textarea
          id="message"
          name="message"
          placeholder="Type of work required"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />

        <select
          id="urgency"
          name="urgency"
          onChange={handleOnChange}
          required
          value={inputs.urgency}
        >
          <option value="" selected disabled hidden >Urgency</option>
          <option value="As soon as possible">As soon as possible</option>
          <option value="Within 1 Month">Within 1 Month</option>
          <option value="Within 6 Months">Within 6 Months</option>
          <option value="Not urgent">Not urgent</option>
        </select>
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className={styles.error}>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className={styles.success}>{status.info.msg}</p>}
    </section>
  );
}
