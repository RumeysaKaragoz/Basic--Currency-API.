const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {

  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!amount) {
    result.innerHTML = "Lütfen miktar girin.";
    return;
  }

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    const rate = data.rates[to];
    const converted = amount * rate;

    result.innerHTML = `
      ${amount} ${from} = 
      ${converted.toFixed(2)} ${to}
      <br><small>Güncel kur: ${rate.toFixed(4)}</small>
    `;

  } catch (error) {
    result.innerHTML = "Kur bilgisi alınamadı.";
  }
});