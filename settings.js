/**
 * Settings Form – Validation & Submission
 *
 * Handles client-side validation, inline error display,
 * and success feedback for the settings form.
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // DOM References
  // ------------------------------------------------------------------

  var form = document.getElementById("settings-form");
  var successMessage = document.getElementById("success-message");

  var fields = {
    fullName: {
      input: document.getElementById("full-name"),
      error: document.getElementById("full-name-error"),
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
    },
    theme: {
      input: document.getElementById("theme"),
      error: document.getElementById("theme-error"),
    },
  };

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
   * Allows common characters; rejects empty or malformed addresses.
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    // Practical pattern: local@domain.tld (no leading/trailing dots)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  /**
   * Validate the full name field.
   * @param {string} value – already trimmed
   * @returns {string|null} Error message or null if valid
   */
  function validateFullName(value) {
    if (value.length === 0) {
      return "Full name is required.";
    }
    return null;
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
   * Validate the theme dropdown.
   * @param {string} value
   * @returns {string|null} Error message or null if valid
   */
  function validateTheme(value) {
    var allowed = ["light", "dark"];
    if (allowed.indexOf(value) === -1) {
      return "Please select a valid theme.";
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
   * Clear all field errors and hide the success banner.
   */
  function clearAllErrors() {
    Object.keys(fields).forEach(function (key) {
      setFieldError(fields[key], null);
    });
    successMessage.hidden = true;
    successMessage.textContent = "";
  }

  /**
   * Display the success message after a valid submission.
   * @param {object} data – Collected form values
   */
  function showSuccessMessage(data) {
    var themeLabel = data.theme === "dark" ? "Dark" : "Light";
    var notificationsLabel = data.notifications ? "enabled" : "disabled";

    successMessage.textContent =
      "Settings saved successfully! " +
      "Name: " + data.fullName +
      ", Email: " + data.email +
      ", Theme: " + themeLabel +
      ", Notifications: " + notificationsLabel + ".";
    successMessage.hidden = false;
  }

  // ------------------------------------------------------------------
  // Form Submission
  // ------------------------------------------------------------------

  /**
   * Collect, validate, and process form data.
   * @param {Event} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    clearAllErrors();

    // Trim text inputs to handle extra whitespace
    var fullName = trimValue(fields.fullName.input.value);
    var email = trimValue(fields.email.input.value);
    var theme = fields.theme.input.value;
    var notifications = document.getElementById("notifications").checked;

    // Write trimmed values back so the user sees cleaned input
    fields.fullName.input.value = fullName;
    fields.email.input.value = email;

    // Run validators
    var errors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      theme: validateTheme(theme),
    };

    var hasErrors = false;

    Object.keys(errors).forEach(function (key) {
      if (errors[key]) {
        setFieldError(fields[key], errors[key]);
        hasErrors = true;
      }
    });

    // Block submission when validation fails
    if (hasErrors) {
      // Focus the first invalid field for accessibility
      var firstInvalidKey = Object.keys(errors).find(function (key) {
        return errors[key] !== null;
      });
      if (firstInvalidKey) {
        fields[firstInvalidKey].input.focus();
      }
      return;
    }

    // Valid submission – in a real app this would persist to a server
    showSuccessMessage({
      fullName: fullName,
      email: email,
      theme: theme,
      notifications: notifications,
    });
  }

  // ------------------------------------------------------------------
  // Live Validation – clear errors as the user corrects input
  // ------------------------------------------------------------------

  fields.fullName.input.addEventListener("input", function () {
    if (fields.fullName.input.classList.contains("is-invalid")) {
      setFieldError(fields.fullName, validateFullName(trimValue(fields.fullName.input.value)));
    }
  });

  fields.email.input.addEventListener("input", function () {
    if (fields.email.input.classList.contains("is-invalid")) {
      setFieldError(fields.email, validateEmail(trimValue(fields.email.input.value)));
    }
  });

  fields.theme.input.addEventListener("change", function () {
    if (fields.theme.input.classList.contains("is-invalid")) {
      setFieldError(fields.theme, validateTheme(fields.theme.input.value));
    }
  });

  // ------------------------------------------------------------------
  // Init
  // ------------------------------------------------------------------

  form.addEventListener("submit", handleSubmit);
})();
