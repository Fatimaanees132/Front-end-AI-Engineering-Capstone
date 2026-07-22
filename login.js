/**
 * Login Form – Validation, Password Toggle & Submission
 *
 * Handles client-side validation, inline error display,
 * password visibility, and simulated authentication.
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // DOM References
  // ------------------------------------------------------------------

  var form = document.getElementById("login-form");
  var formMessage = document.getElementById("form-message");
  var submitButton = form.querySelector('button[type="submit"]');
  var passwordToggle = document.getElementById("password-toggle");

  var fields = {
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
    },
    password: {
      input: document.getElementById("password"),
      error: document.getElementById("password-error"),
    },
  };

  var MIN_PASSWORD_LENGTH = 6;
  var REDIRECT_DELAY_MS = 1200;

  // ------------------------------------------------------------------
  // Validation Helpers
  // ------------------------------------------------------------------

  /**
   * Trim leading/trailing whitespace from a string value.
   * @param {string} value
   * @returns {string}
   */
  function trimValue(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  /**
   * Validate a standard email format.
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  /**
   * Validate the email field.
   * @param {string} value – already trimmed
   * @returns {string|null} Error message or null if valid
   */
  function validateEmail(value) {
    if (value.length === 0) {
      return "Email is required.";
    }
    if (!isValidEmail(value)) {
      return "Please enter a valid email address.";
    }
    return null;
  }

  /**
   * Validate the password field.
   * @param {string} value
   * @returns {string|null} Error message or null if valid
   */
  function validatePassword(value) {
    if (value.length === 0) {
      return "Password is required.";
    }
    if (value.length < MIN_PASSWORD_LENGTH) {
      return "Password must be at least " + MIN_PASSWORD_LENGTH + " characters.";
    }
    return null;
  }

  // ------------------------------------------------------------------
  // UI Helpers
  // ------------------------------------------------------------------

  /**
   * Show or clear an inline error for a single field.
   * @param {object} field – { input, error }
   * @param {string|null} message
   */
  function setFieldError(field, message) {
    field.error.textContent = message || "";
    field.input.classList.toggle("is-invalid", Boolean(message));
    field.input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  /**
   * Clear all field errors and hide the form message banner.
   */
  function clearAllErrors() {
    Object.keys(fields).forEach(function (key) {
      setFieldError(fields[key], null);
    });
    formMessage.hidden = true;
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  /**
   * Display a success or error banner message.
   * @param {string} message
   * @param {"success"|"error"} type
   */
  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = "form-message form-message--" + type;
    formMessage.hidden = false;
  }

  /**
   * Toggle the submit button loading state.
   * @param {boolean} isSubmitting
   */
  function setSubmitting(isSubmitting) {
    submitButton.disabled = isSubmitting;
    submitButton.classList.toggle("btn--loading", isSubmitting);
    submitButton.querySelector(".btn__label").textContent =
      isSubmitting ? "Signing in..." : "Sign In";
  }

  /**
   * Toggle password field visibility.
   */
  function togglePasswordVisibility() {
    var passwordInput = fields.password.input;
    var isVisible = passwordInput.type === "text";

    passwordInput.type = isVisible ? "password" : "text";
    passwordToggle.setAttribute("aria-pressed", isVisible ? "false" : "true");
    passwordToggle.setAttribute(
      "aria-label",
      isVisible ? "Show password" : "Hide password"
    );
  }

  // ------------------------------------------------------------------
  // Form Submission
  // ------------------------------------------------------------------

  /**
   * Collect, validate, and process login credentials.
   * @param {Event} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    clearAllErrors();

    var email = trimValue(fields.email.input.value);
    var password = fields.password.input.value;
    var rememberMe = document.getElementById("remember-me").checked;

    fields.email.input.value = email;

    var errors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    var hasErrors = false;

    Object.keys(errors).forEach(function (key) {
      if (errors[key]) {
        setFieldError(fields[key], errors[key]);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      var firstInvalidKey = Object.keys(errors).find(function (key) {
        return errors[key] !== null;
      });
      if (firstInvalidKey) {
        fields[firstInvalidKey].input.focus();
      }
      return;
    }

    setSubmitting(true);

    // Simulated login request – replace with a real API call in production
    setTimeout(function () {
      setSubmitting(false);

      showFormMessage(
        "Signed in successfully. Redirecting to settings...",
        "success"
      );

      if (rememberMe) {
        try {
          localStorage.setItem("capstoneRememberEmail", email);
        } catch (error) {
          // Ignore storage errors in restricted environments
        }
      }

      setTimeout(function () {
        window.location.href = "settings.html";
      }, REDIRECT_DELAY_MS);
    }, 800);
  }

  /**
   * Restore a previously remembered email address.
   */
  function restoreRememberedEmail() {
    try {
      var savedEmail = localStorage.getItem("capstoneRememberEmail");
      if (savedEmail) {
        fields.email.input.value = savedEmail;
        document.getElementById("remember-me").checked = true;
      }
    } catch (error) {
      // Ignore storage errors in restricted environments
    }
  }

  // ------------------------------------------------------------------
  // Live Validation – clear errors as the user corrects input
  // ------------------------------------------------------------------

  fields.email.input.addEventListener("input", function () {
    if (fields.email.input.classList.contains("is-invalid")) {
      setFieldError(fields.email, validateEmail(trimValue(fields.email.input.value)));
    }
  });

  fields.password.input.addEventListener("input", function () {
    if (fields.password.input.classList.contains("is-invalid")) {
      setFieldError(fields.password, validatePassword(fields.password.input.value));
    }
  });

  // ------------------------------------------------------------------
  // Init
  // ------------------------------------------------------------------

  passwordToggle.addEventListener("click", togglePasswordVisibility);
  form.addEventListener("submit", handleSubmit);
  restoreRememberedEmail();
})();
