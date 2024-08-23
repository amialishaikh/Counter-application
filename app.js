const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeBy = document.querySelector('.changeBy');

plusBtn.addEventListener('click', () => {
    // const countValue = parseInt (count.innerText)
    count.innerText = parseInt (count.innerText) + 1;
});

minusBtn.addEventListener('click', () => {
    count.innerText = parseInt (count.innerText) - 1;
})

