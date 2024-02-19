const busticketSet = document.querySelectorAll('.bus-ticketSet');
const applyCouponBtn =document.getElementById('applyBTN')
const displayTotal=document.getElementById('displayTotal')
const counterSetDisplay=document.getElementById('current-seat')
const detilsList=document.getElementById('detilsList')
const discountDisplay=document.getElementById('discountDisplay')
let clickbutton=0
let ticketPrice=550
let totalPrice=0
let setSubscript = 40;
busticketSet.forEach(button => {
    button.addEventListener('click', () => {
        if (clickbutton < 4) {
            clickbutton++;
            console.log(button, 'clicked');
            button.disabled = true;
            button.style.backgroundColor = '#1DD100';
            button.style.color = 'white';
            numberInput.disabled=false
            // Increment total price and update display
            totalPrice += ticketPrice;
            displayTotal.innerText = totalPrice;
            discountDisplay.innerText = totalPrice;
              setSubscript--
              counterSetDisplay.textContent=setSubscript
       

              const tr = document.createElement('tr');
              tr.innerHTML = `
            
                 <td>${button.textContent}</td>
                 <td>${'Economy'}</td>
                 <td>$${ticketPrice.toFixed(2)}</td>
                 
              `;
              detilsList.appendChild(tr);
               tr.classList='flex gap-28 py-2'
            
            
             
            
            if (clickbutton === 4) {
                applyCouponBtn .disabled = false; // Enable the "Apply" button
                // Enable the "Apply" button
            }
        }
    });
});


// Coupon Code 
const inputDiscount=document.getElementById('inputDiscount')
const discountValue=document.getElementById('discount')

applyCouponBtn .addEventListener('click',()=>{
    const discount = inputDiscount.value;
    if (discount === 'NEW15') { // Check if the coupon value is 'NEW15'
        const discountAmount = totalPrice * 0.15;
        console.log(discountAmount)
        const discountedTotalPrice = totalPrice - discountAmount;
        discountDisplay.innerText=discountedTotalPrice
        discountValue.innerText=discountAmount
        applyCouponBtn .disabled=true
        inputDiscount.value=''
     
    }
    else if (discount === 'Couple20') { // Check if the coupon value is 'NEW15'
        const discountAmount = totalPrice * 0.20;
        const discountedTotalPrice = totalPrice - discountAmount;
        discountDisplay.innerText=discountedTotalPrice
        discountValue.innerText=discountAmount
        applyCouponBtn .disabled=true
        inputDiscount.value=''
       
    }
})

// number input next button code
const numberInput=document.getElementById('numberInput');
const NextButton=document.getElementById('NextButton');

numberInput.addEventListener('input',()=>{
    if (numberInput.value.length >= 11) {
        NextButton.disabled = false;
        NextButton.addEventListener('click', () => {
            window.location.href = '../modal.html';
        });
    } 
})




