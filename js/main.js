import * as mortgage from './mortgage';

document.getElementById('calcBtn').addEventListener('click', () => {
    const principal = document.getElementById("principal").value;
    const years = document.getElementById("years").value;
    const rate = document.getElementById("rate").value;
    let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(month => console.log(month));
});