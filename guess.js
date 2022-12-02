let msg1 = document.getElementById("message1")

let msg2 = document.getElementById("message2")

let msg3 = document.getElementById("message3")

let answer = Math.floor(Math.random()*10+1)

let no_of_guesses = 0

let guessed_nums = []


function play(){
    
let myGuess = document.getElementById("guess-input").value

if(myGuess<1||myGuess>10){
    alert("Please, enter a number between 1 and 10")
} else{
    guessed_nums.push(myGuess)
    no_of_guesses += 1

    if(myGuess == answer){
        // alert("CONGRATULATIONS! You are doing well")
        msg1.textContent = "CONGRATULATIONS! You are doing well"
        msg2.textContent = "The number was: " + answer
        msg3.textContent = "You guessed it in:  " + no_of_guesses + "guesses"
        document.getElementById("guess-btn").disabled = true;
    }
    else if(myGuess < answer){
        // alert("Oppss!! Your guess is low")
        msg1.textContent = "Oppss!! Your guess is low"
        msg2.textContent = "Number of Guesses: " + no_of_guesses
        msg3.textContent = "Guessed Numbers are: " + guessed_nums
    }
    else if(myGuess > answer){
        // alert("Oppss!! Your guess is high")
        msg1.textContent = "Oppss!! Your guess is high"
        msg2.textContent = "Number of Guesses: " + no_of_guesses
        msg3.textContent = "Guessed Numbers are: " + guessed_nums
    }else{
        // alert("not a number")
        msg1.textContent = "not a number"
        // msg2.textContent = "Number of Guesses: " + no_of_guesses
        // msg3.textContent = "Guessed Numbers are: " + guessed_nums
    } 
  } 
}