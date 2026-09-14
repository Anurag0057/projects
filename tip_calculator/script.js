const amt = document.getElementById("amt");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const button = document.getElementById("calculate");

function calculateTip()
{
    const a = amt.value;
    const b = tip.value;
    const t = a*(1+b/100);
    total.innerText = t.toFixed(2);
}