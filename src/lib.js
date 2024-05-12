export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "Please enter a valid email address.",
    validate(val) {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      // Regular expression for basic phone number validation
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(val);
    },
  },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const elParent = el.parentNode;

  const errorEl = elParent.querySelector(".error");

  if (errorEl) errorEl.classList.add("is-error");
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    elParent.appendChild(errorElement);
  }
};
