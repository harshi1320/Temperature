let celciusInput = document.querySelector('#CelToFar > input')
let fahrenhietInput = document.querySelector('#FarToCel > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
/*celcius to fahrenhiet */
celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32

    fahrenhietInput.value = roundNumber(fTemp)
})
/*fahrenhiet to celcius */
fahrenhietInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenhietInput.value)
    let cTemp = (fTemp - 32) * (5/9)

    celciusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenhietInput.value = ""
})
