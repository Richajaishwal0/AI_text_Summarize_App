const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
  const textarea = e.target;

  // Verify the TextArea value.
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Send the text to the server using fetch API

 // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}

document.getElementById("copyButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  const textToCopy = document.getElementById("summary").innerText;
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Copied to clipboard!");
  }).catch(function(error) {
    console.error("Failed to copy text: ", error);
  });
});

