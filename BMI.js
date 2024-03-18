let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let submit = document.getElementById("submit");

  const output = document.getElementById("output");

  console.log(height.value)
  console.log(weight.value)


    const process = () => {
    let hv = height.value/100;
    let wv = weight.value;
    

    let bmi = wv / (hv * hv);
    let bmiupdate=bmi.toFixed(2);


   


    let addtext=" ";
    if(bmiupdate>30){
        addtext=" You under the category of obesity";
        output
    }
    else if(bmiupdate>25 && bmiupdate<29.9){
        addtext=" You under the category of overweight";
        
    }

    else if(bmiupdate>18.5 && bmiupdate<24.9){
        addtext=" You under the category of Healthy Weight";
    
    }
    else{
        addtext=" You under the category of UnderWeight";
        output.textContent = "BMI: " + bmiupdate + ". " + addtext;

    }

    output.textContent = "BMI: " + bmi.toFixed(2) + ","+addtext; // Display BMI value with 2 decimal places
    
  }

  submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    process(); // Call the process function
  }); 