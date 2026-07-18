const STORAGE_KEY = "aiCapstoneSettings";

const DEFAULT_SETTINGS = {
  displayName: "",
  email: "",
  aiModel: "balanced",
  responseLength: "balanced",
  temperature: 0.7,
  systemPrompt: "",
  streamResponses: true,
  saveHistory: true,
  theme: "system",
  fontSize: "medium",
  reduceMotion: false,
  emailUpdates: false,
  responseSound: false,
  analytics: false,
};

const form = document.getElementById("settings-form");
const statusMessage = document.getElementById("status-message");
const temperatureInput = document.getElementById("temperature");
const temperatureValue = document.getElementById("temperature-value");
const systemPromptInput = document.getElementById("system-prompt");
const promptCount = document.getElementById("prompt-count");
const themeSelect = document.getElementById("theme");
const fontSizeSelect = document.getElementById("font-size");
const reduceMotionCheckbox = document.getElementById("reduce-motion");
const resetButton = document.getElementById("reset-btn");
const clearDataButton = document.getElementById("clear-data-btn");

function loadSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return { ...DEFAULT_SETTINGS };
    }

    const parsed = JSON.parse(saved);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function getFormValues() {
  const formData = new FormData(form);

  return {
    displayName: formData.get("displayName").trim(),
    email: formData.get("email").trim(),
    aiModel: formData.get("aiModel"),
    responseLength: formData.get("responseLength"),
    temperature: Number(formData.get("temperature")),
    systemPrompt: formData.get("systemPrompt").trim(),
    streamResponses: formData.get("streamResponses") === "on",
    saveHistory: formData.get("saveHistory") === "on",
    theme: formData.get("theme"),
    fontSize: formData.get("fontSize"),
    reduceMotion: formData.get("reduceMotion") === "on",
    emailUpdates: formData.get("emailUpdates") === "on",
    responseSound: formData.get("responseSound") === "on",
    analytics: formData.get("analytics") === "on",
  };
}

function populateForm(settings) {
  form.displayName.value = settings.displayName;
  form.email.value = settings.email;
  form.aiModel.value = settings.aiModel;
  form.responseLength.value = settings.responseLength;
  form.temperature.value = settings.temperature;
  form.systemPrompt.value = settings.systemPrompt;
  form.streamResponses.checked = settings.streamResponses;
  form.saveHistory.checked = settings.saveHistory;
  form.theme.value = settings.theme;
  form.fontSize.value = settings.fontSize;
  form.reduceMotion.checked = settings.reduceMotion;
  form.emailUpdates.checked = settings.emailUpdates;
  form.responseSound.checked = settings.responseSound;
  form.analytics.checked = settings.analytics;

  updateTemperatureLabel();
  updatePromptCount();
}

function resolveTheme(themePreference) {
  if (themePreference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return themePreference;
}

function applyAppearance(settings) {
  const resolvedTheme = resolveTheme(settings.theme);

  document.documentElement.setAttribute("data-theme", resolvedTheme);
  document.documentElement.setAttribute("data-font-size", settings.fontSize);
  document.documentElement.setAttribute(
    "data-reduce-motion",
    settings.reduceMotion ? "true" : "false"
  );
}

function updateTemperatureLabel() {
  temperatureValue.textContent = Number(temperatureInput.value).toFixed(1);
}

function updatePromptCount() {
  promptCount.textContent = systemPromptInput.value.length;
}

function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.hidden = false;
  statusMessage.className = `status-message status-message--${type}`;

  window.clearTimeout(showStatus.timeoutId);
  showStatus.timeoutId = window.setTimeout(() => {
    statusMessage.hidden = true;
  }, 4000);
}

function clearFieldErrors() {
  form.querySelectorAll(".field-invalid").forEach((field) => {
    field.classList.remove("field-invalid");
  });
}

function validateForm(values) {
  clearFieldErrors();
  const errors = [];

  if (!values.displayName) {
    form.displayName.classList.add("field-invalid");
    errors.push("Display name is required.");
  }

  if (!values.email) {
    form.email.classList.add("field-invalid");
    errors.push("Email address is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    form.email.classList.add("field-invalid");
    errors.push("Enter a valid email address.");
  }

  return errors;
}

function handleSubmit(event) {
  event.preventDefault();

  const values = getFormValues();
  const errors = validateForm(values);

  if (errors.length > 0) {
    showStatus(errors[0], "error");
    return;
  }

  saveSettings(values);
  applyAppearance(values);
  showStatus("Settings saved successfully.", "success");
}

function handleReset() {
  const confirmed = window.confirm(
    "Reset all settings to their default values?"
  );

  if (!confirmed) {
    return;
  }

  populateForm(DEFAULT_SETTINGS);
  saveSettings(DEFAULT_SETTINGS);
  applyAppearance(DEFAULT_SETTINGS);
  showStatus("Settings reset to defaults.", "success");
}

function handleClearData() {
  const confirmed = window.confirm(
    "This will remove saved settings and chat history from this browser. Continue?"
  );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("aiCapstoneChatHistory");

  populateForm(DEFAULT_SETTINGS);
  applyAppearance(DEFAULT_SETTINGS);
  showStatus("Local data cleared.", "success");
}

function handleLiveAppearanceChange() {
  const previewSettings = {
    ...loadSettings(),
    theme: themeSelect.value,
    fontSize: fontSizeSelect.value,
    reduceMotion: reduceMotionCheckbox.checked,
  };

  applyAppearance(previewSettings);
}

function init() {
  const settings = loadSettings();

  populateForm(settings);
  applyAppearance(settings);

  temperatureInput.addEventListener("input", updateTemperatureLabel);
  systemPromptInput.addEventListener("input", updatePromptCount);

  themeSelect.addEventListener("change", handleLiveAppearanceChange);
  fontSizeSelect.addEventListener("change", handleLiveAppearanceChange);
  reduceMotionCheckbox.addEventListener("change", handleLiveAppearanceChange);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const currentSettings = loadSettings();
      if (currentSettings.theme === "system") {
        applyAppearance(currentSettings);
      }
    });

  form.addEventListener("submit", handleSubmit);
  resetButton.addEventListener("click", handleReset);
  clearDataButton.addEventListener("click", handleClearData);
}

init();
