const url = 'https://text-translator2.p.rapidapi.com/translate';
const apiKey = 'f7eefef733msh058cdd82a763431p1d64a6jsnf9bbd96d2fd5';
const host = 'text-translator2.p.rapidapi.com';

async function translateText() { // Define an async function to use await
  let inputText = document.getElementById("in").value;
let selectElement = document.getElementById("select");
  let selectedIndex = selectElement.selectedIndex;
  let selectedOption = selectElement.options[selectedIndex];
  let input = selectedOption.dataset.output;

  selectElement = document.getElementById("select1");
   selectedIndex = selectElement.selectedIndex;
   selectedOption = selectElement.options[selectedIndex];
   output = selectedOption.dataset.output;
  
  let targetLanguage = output; // Change this to your desired target language code

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': host
    },
    body: new URLSearchParams({
      source_language: input, // change with user preference
      target_language: targetLanguage,
      text: inputText
    })
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the JSON response for readiblity
    const translatedText = data.data.translatedText; // Extract the translated text
    document.getElementById("h3").textContent = translatedText; // Use textContent to set the content
  } catch (error) {
    console.error(error);
  }
}

function copyTranslation() {
  // Get the text from the "h3" textarea
  var translationText = document.getElementById("h3").value;

  // Create a temporary textarea element to copy the text to the clipboard
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = translationText;

  // Append the temporary textarea to the document
  document.body.appendChild(tempTextarea);

  // Select the text inside the temporary textarea
  tempTextarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea from the document
  document.body.removeChild(tempTextarea);

}