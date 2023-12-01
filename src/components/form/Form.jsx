// Desc: Creating the form component, which will display a
// form when rendered in order to let the user to send an email.
// ========================================================

// importing packages
// ========================================================
import { useState } from 'react';
// ========================================================

// Importing input and submit handler
// ========================================================
import { handleInputChange, submitHandler } from '../../utils/handleInputSubmit';
// ========================================================

// Creating the form component
// ========================================================
const Form = () => {

    // State variables for the fields in the form
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [text, setText] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Define an object to be sent through onchange
    // method to be used by handleInputChange function.
    const setFunctions = {
        email: setEmail,
        text: setText,
        error: setErrorMessage,
        name: setName,
        success: setSuccessMessage,
        submitted: setIsSubmitted,
    };

    // Define a function to be sent through onsubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        submitHandler(event, email, name, text, setFunctions);
        setIsSubmitted(false);
        setSuccessMessage('');
    };

    return (

        <div>

            <h1>Welcome {name}</h1>

            <form onSubmit={handleSubmit}>
                < label htmlFor='email'>Email address:</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='ehsanAsh@example.com'
                    onChange={
                        event => handleInputChange(event, setFunctions)
                    }
                />

                < label htmlFor='name'>Name:</label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={name}
                    placeholder='EhsanAsh'
                    onChange={
                        event => handleInputChange(event, setFunctions)
                    }
                />

                < label htmlFor='message'>Message:</label>
                <textarea
                    id='message'
                    name='text'
                    value={text}
                    onChange={
                        event => handleInputChange(event, setFunctions)
                    }
                >
                    Hello Ehsan. Your Portfolio page looks great!!!
                </textarea>

                <button type='submit'>
                    Send
                </button>
            </form>
            {errorMessage
            && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            {successMessage
            && (
                <div>
                    <p>{successMessage}</p>
                </div>
            )}
            {isSubmitted && (
                <div>
                    <p>Form submitted successfully!</p>
                </div>
            )}
        </div>
    );

};
// ========================================================

// exporting the Form function
// ========================================================
export default Form;
// ========================================================