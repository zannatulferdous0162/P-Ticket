document.getElementById('seats').addEventListener('click',function(){
    
    let count = 40;
    const countSeats = document.getElementById('current-seat');
    
    const getInnerValue = countSeats.innerText;
    const values = parseInt(getInnerValue);

    countSeats.innerText =values;
    if(count === values ){
        const countResult = count -= 1;
        console.log(countResult);

    }
    else{
        console.log('f')
    }
    console.log(values);

});

