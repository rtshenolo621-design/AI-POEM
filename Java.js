function displayPoem(response) {
new Typewriter("#poem", {
      strings: [response.data.answer],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}



function generatePoem(event) {
  event.preventDefault();
  let userInstructionsElement = document.querySelector("#user-Instructions");
  let apiKey = "eb14a83a6c42e2caf7c68toaf209901b"
  let prompt = `Generate a poem about ${userInstructionsElement.value}`
  let context = "You are a passionate and talented poet who write poems not longer than 5 lines and separate each line with <br/> .Make sure to follow the user instructions properly"

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
  
  
  axios.get(apiURL).then(displayPoem);

 

}
    

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);