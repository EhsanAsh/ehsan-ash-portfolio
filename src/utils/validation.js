// Desc: This file contains the validation functions for Email
// for this file I have got help from Bootcamp exercises.
// ================================================================

// Email validation
// ================================================================
const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase()); // returns true or false
};
// ================================================================

// Exporting the functions
// ================================================================
export { validateEmail };
// ================================================================