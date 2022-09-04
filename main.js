// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('span.like-glyph')
  mimicServerCall()
  .then(resp=>{
    const heart=document.querySelector('.like-glyph')
    //console.log(heart)
    heart.innerText='♥'
    heart.classList.add('activated-heart')
    console.log(resp)})
  .catch(error=>{
    const div1 = document.querySelector('#modal')
    div1.classList.remove('hidden')
    //This removes hidden that then displays the error
    console.log(error)
    //console.log(div1)

    setTimeout(()=>{div1.classList.add('hidden')}, 3000)

  })
    
  
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


