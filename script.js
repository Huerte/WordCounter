// Real-time word & character counter logic
// Uses only vanilla JavaScript and is optimized for accuracy and responsiveness.

const textInput = document.getElementById("text-input");
const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");
const clearBtn = document.getElementById("clear-btn");

/**
 * Compute an accurate word count from a given string.
 * - Treats any sequence of non-whitespace characters as a word
 * - Ignores leading/trailing/multiple spaces and line breaks
 * @param {string} value
 * @returns {number}
 */
function countWords(value) {
  const trimmed = value.trim();

  if (!trimmed) return 0;

  // Split on any run of whitespace (spaces, tabs, newlines, etc.)
  const words = trimmed.split(/\s+/u);
  return words.length;
}

/**
 * Update the UI metrics based on the textarea value.
 */
function updateMetrics() {
  const value = textInput.value;
  const words = countWords(value);
  const chars = value.length;

  wordCountEl.textContent = words.toString();
  charCountEl.textContent = chars.toString();
}

/**
 * Clear the textarea and reset metrics.
 */
function clearText() {
  textInput.value = "";
  updateMetrics();
  textInput.focus();
}

// Update in real time as the user types, pastes, or edits.
textInput.addEventListener("input", updateMetrics);

if (clearBtn) {
  clearBtn.addEventListener("click", clearText);
}

// Initialize metrics for any pre-filled text.
updateMetrics();
