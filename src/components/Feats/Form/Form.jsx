import React, { useState } from 'react';
import styles from './Form.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    select: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!formState["name"]) {
      formIsValid = false;
      tempErrors["name"] = "Cannot be empty";
    }

    if (!formState["email"]) {
      formIsValid = false;
      tempErrors["email"] = "Cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formState["email"])) {
      formIsValid = false;
      tempErrors["email"] = "Email is not valid";
    }

    if (!formState["select"]) {
      formIsValid = false;
      tempErrors["select"] = "Cannot be empty";
    }

    if (!formState["message"]) {
      formIsValid = false;
      tempErrors["message"] = "Cannot be empty";
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.Form}>
      <h2>Contact Form</h2>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
              className={errors.name ? styles.Error : ''}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              className={errors.email ? styles.Error : ''}
            />
            <select
              name="select"
              value={formState.select}
              onChange={handleChange}
              className={errors.select ? styles.Error : ''}
            >
              <option value="">--Please choose an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              className={errors.message ? styles.Error : ''}
            />
            <button type="submit">Submit</button>
          </motion.form>
        ) : (
          <motion.div key="thankyou" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Fake form submitted. Thank you!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Form;
