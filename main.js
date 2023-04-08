




  //gets user input with no whitespace and makes all lowercase
  let input = document.getElementById("user-input").value.trim().toLowerCase() //user input

  let output = document.getElementById("output")


  function pigLatin(word){

    let vowel = ['a','e','i','o','u']
    //if string begins with a vowel
    if(vowel.indexOf(word[0]) > -1){
      word = word + "yay"
    }
    else {
      let firstMatch = word.match(/[aeiou]/g) || 0
      let vowel = word.indexOf(firstMatch[0])
      word = word.substring(vowel) + word.substring(0,vowel) + "ay"
    }

    output.textContent = pigLatin(input)

  }
 
  
