let calciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber (number) {
    return Math.round(number*100)/100
}

// Celcius to Fahrenheit and Kelvin
calciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(calciusInput.value)
    let fTemp = (cTemp* (9/5)) + 32
    let kTemp = cTemp + 273.15
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber (kTemp)
})


//   Fahrenheit to Celcius and Kelvin
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp -32 ) * (5/9)
    let kTemp = (fTemp -32 ) * (5/9) + 273.15
    calciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber (kTemp)
})


// Kelvin to Fahrenheit and Celcius
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = ( kTemp - 273.15 ) * (9/5) + 32
    calciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber (fTemp)
})

// All Clear Button
btn.addEventListener('click', ()=>{
    calciusInput.value = ""
    
    fahrenheitInput.value = ""
   
    kelvinInput.value = ""
})