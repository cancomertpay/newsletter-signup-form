# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)


### Links

- Source Code URL: [https://github.com/cancomertpay/newsletter-signup-form](https://github.com/cancomertpay/newsletter-signup-form)
- Live Site URL: [https://newsletter-signup-form-inky.vercel.app/](https://newsletter-signup-form-inky.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Which Techniques I Used

In this project, I preferred to use the React library. I managed input and error logic through the useState hook. For error handling, I opted for a method that alerts users by tracking their keystrokes, rather than triggering an error message upon submission. Furthermore, I used the Context API to handle the logic for displaying success messages. The main goal was to provide a user-friendly and optimized solution. All styles were created using vanilla CSS and adapted to be responsive for mobile, tablet, and desktop formats. (Assets, illustrations, and design belong to the frontendmentor.io website.)

### The error logic was set up as follows:
```js
  const successContext = useContext(SuccessContext)

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    setError(false);
    setUserInput(e.target.value);
  }

  const emailIsValid =
    userInput.trim().includes("@") && userInput.trim() !== "";

  function handleInputBlur() {
    if (!emailIsValid) {
      setError(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailIsValid) {
      setError(true);
      return;
    }

    successContext.storeSuccess(userInput)
  }
```

### Continued development

This is a simple challenge that serves as a refresher, and I found using the Context API solution to be reasonable since I didn't want to use an external library and complicate the project. In my future projects, I strive to employ optimized techniques and solutions based on React.js, Next.js, and Redux, and I am in a continuous learning phase.

## Author

- Website - [cancomertpay.online](https://cancomertpay.online)
- Frontend Mentor - [@cancomertpay](https://www.frontendmentor.io/profile/cancomertpay)