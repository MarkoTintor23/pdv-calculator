function calculateVAT() {
  const priceWithTax = parseFloat(
    document.getElementById("priceWithTax").value
  );
  const taxRate = parseFloat(document.getElementById("taxRate").value);

  if (
    isNaN(priceWithTax) ||
    isNaN(taxRate) ||
    priceWithTax <= 0 ||
    taxRate <= 0
  ) {
    alert("Molimo unesite validne vrednosti!");
    return;
  }

  const priceWithoutTax = priceWithTax / (1 + taxRate / 100);
  const vatAmount = priceWithTax - priceWithoutTax;

  document.getElementById("vatAmount").textContent = vatAmount.toFixed(2);
  document.getElementById("priceWithoutTax").textContent =
    priceWithoutTax.toFixed(2);
}
function resetCalculator() {
  // Resetovanje svih polja
  document.getElementById("priceWithTax").value = "";
  document.getElementById("taxRate").value = "";
  document.getElementById("vatAmount").textContent = "0.00";
  document.getElementById("priceWithoutTax").textContent = "0.00";
}
