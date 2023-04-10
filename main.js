 


  function pigLatin(){
     //gets user input with no whitespace and makes all lowercase
    let input = document.getElementById("user-input").value.trim().toLowerCase() //user input

    let output = document.getElementById("output")
    
    let vowel = ['a','e','i','o','u']
    //if string begins with a vowel
    if(vowel.indexOf(input[0]) > -1){
      input = input + "yay"
    }
    else {
      let firstMatch = input.match(/[aeiou]/g) || 0
      let vowel = input.indexOf(firstMatch[0])
      input = input.substring(vowel) + input.substring(0,vowel) + "ay"
    }

    output.innerHTML = input

  }
 
  
