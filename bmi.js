const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == '')
    {
        alert('Please Fill out the Input Fields');
        return;
    }

    //BMI Weight in KG / (height in m * height in m)

    height = height / 100;

    let BMI = (weight / (height *  height));
    console.log(BMI);
    document.querySelector('#bmi-res').innerHTML = Math.round(BMI);

    let status = '';
    if(BMI < 18.5)
    {
        status = "Underweight";

    }
    if(BMI >= 18.5 && BMI <= 25 )
    {
        status = "Healthy";
    }
    if(BMI >= 25 && BMI <= 30 )
    {
        status = "OverWeight";
    }
    if(BMI >= 30 )
    {
        status = "Obese";
    }
    console.log(status);

    document.getElementById('span-comment').innerText = status; 
});