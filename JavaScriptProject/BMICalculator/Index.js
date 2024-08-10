const form = document.querySelector("form")


form.addEventListener("submit" , function(event) {
    event.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    const weightguided = document.querySelector("#weight-guide")

    
    if (height ===" " || height < 0 || isNaN(height)) {
        
        result.innerHTML  = `please  give a valid height ${height}`
        
    }
   else if (weight ===" " || weight < 0 || isNaN(weight)) {
        result.innerHTML  = `please  give a valid weight ${weight}`
        
    }
    else{
        const Bmi = (weight/((height*height)/10000)).toFixed(2)
        // show the results 
            
            if (Bmi<=18.6) {
                console.log("hello")
                result.innerHTML = `<span>BMI :${Bmi}<span/>`
                weightguided.innerHTML = `<P>under weight ${Bmi}<p/> `
            }
            if (Bmi>18.6 && Bmi<24.6 ) {
               
                result.innerHTML = `<span>BMI :${Bmi}<span/>`
                weightguided.innerHTML = `<P>normal weight ${Bmi}<p/> `
            }
            if (Bmi>24.6) {
                
                result.innerHTML = `<span>BMI :${Bmi}<span/>`
                weightguided.innerHTML = `<P>over weight ${Bmi}<p/> `
            }
    }

    
    
})
