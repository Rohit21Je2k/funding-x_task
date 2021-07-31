import React, { useState } from "react";

import Title from "./Title/Title.js";
import About from "./About/About.js";
import Input from "./Input/Input.js";
import SubmitBtn from "./SubmitBtn/SubmitBtn.js";

import useForm from "../utils/hooks/useForm.js";
import validateInfo from "../utils/validate/validate.js";

export default function Form() {
  const { form, setForm } = useForm(
    {
      name: {
        value: "",
        isTouched: false,
        isValid: false,
        error: "",
        validateType: "text",
      },
      email: {
        value: "",
        isTouched: false,
        isValid: false,
        error: "",
        validateType: "text",
      },
      phone: {
        value: "",
        isTouched: false,
        isValid: false,
        error: "",
        validateType: "text",
      },
      pageUrl: {
        value: "",
        isTouched: false,
        isValid: false,
        error: "",
        validateType: "text",
      },
      aboutUs: {
        value: "",
        isTouched: false,
        isValid: false,
        error: "",
        validateType: "text",
      },
    },
    validateInfo
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  function handlesubmitBtnClick() {
    console.log(form);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validateInfo(value, form[name].validateType);
    setForm((prevValues) => {
      prevValues[name].value = value;
      prevValues[name].error = error;
      return {
        ...prevValues,
      };
    });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const error = validateInfo(value, form[name].validateType);
    setForm((prevValues) => {
      prevValues[name].isTouched = true;
      prevValues[name].error = error;
      return {
        ...prevValues,
      };
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Title />
      <About>
        <h1 className="form__about__title">Web Development Task</h1>
        {formSubmitted ? (
          <div>
            <p>Form Submitted Successfully</p>
            <a className="resubmit-link" href="/">
              Submit Another Response
            </a>
          </div>
        ) : (
          <div>
            Welcome to FundingX!
            <br />
            <br />
            To become a part of our Web Development Team, please complete the
            task before the deadline mentioned.
            <br /> <br />
            No task submissions will be entertained after the deadline <br />
            <br />
            TASK -<br />
            Replicate this Google form which you are looking at.
            <br />
            <br />
            You may use HTML,CSS or ReactJs. Preference will be given to one
            using ReactJs and able to send JSON file to a URL.
            <br />
            <br />
            If you like, you may enhance the looks of the page according to you.
            <br />
            <br />
            Host this page on GitHub pages or any hosting service you like and
            paste link in the form.
            <br />
            <br />
            The tasks given are for understanding how well you are equipped with
            the skills.
            <br />
            <br />
            Deadline for submission- July 31, 4:00 p.m.
            <p className="form__about__legend">*Required</p>
          </div>
        )}
      </About>
      {!formSubmitted && (
        <>
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="Your answer"
            values={form.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required={true}
          />
          <Input
            name="email"
            type="email"
            label="Email Id"
            placeholder="Your answer"
            values={form.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required={true}
          />
          <Input
            name="phone"
            type="text"
            label="Phone No."
            placeholder="Your answer"
            values={form.phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required={true}
          />
          <Input
            name="pageUrl"
            type="url"
            label="Page URL"
            placeholder="Your answer"
            values={form.pageUrl}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required={true}
          />
          <Input
            name="aboutUs"
            type="text"
            label="What is FundingX about?"
            placeholder="Your answer"
            description="Just a one liner as to what you think we do."
            values={form.aboutUs}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required={true}
          />
          <SubmitBtn onClick={handlesubmitBtnClick} />
        </>
      )}
    </form>
  );
}
