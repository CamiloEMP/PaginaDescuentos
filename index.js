const calculatePriceWithDiscount = (price, discount) => {
  let percentagePriceWithDiscount = 100 - discount;
  let priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
  return priceWithDiscount;
}
const onClickButtonPriceDiscount = () => {
  let priceValue = parseFloat(document.getElementById("inputPrice").value);
  let discountValue = parseFloat(document.getElementById("inputDiscount").value);
  let priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);
  let resultP = document.getElementById("resultP");
  resultP.innerText = "The price with discount are: " + priceWithDiscount + " pesos";
}
// console.log({
//   priceOriginal,
//   discount,
//   percentagePriceWithDiscount,
//   priceWithDiscount
// })