


const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();  
  pigLatin()
}) 

function fun(){
  console.log("first")
}

const body = document.getElementById("body")
const btn = document.getElementById("button")
const h2 = document.createElement("h2")
body.appendChild(h2)
btn.addEventListener("click", () =>{
  fun()
})

const input = document.getElementById("user-input")

const pigLatin = () => {
  let word = input.value
  let vowel = ['a','e','i','o','u']
  let newString = ""
  h2.innerText = word
  //if string begins with a vowel
  if(vowel.indexOf(word[0]) > -1){
    newString = word.toLowerCase().trim() + "yay"
    return newString
  }

  else {
    let firstMatch = word.match(/[aeiou]/g) || 0
    let vowel = word.indexOf(firstMatch[0])
    newString = word.substring(vowel).toLowerCase().trim() + word.substring(0,vowel).toLowerCase().trim() + "ay"
    return newString   
  }
  // Your code here
  
}
