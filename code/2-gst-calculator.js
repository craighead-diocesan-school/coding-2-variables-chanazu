// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')

  let price = prompt('What is the cost before GST ?')
  number = 0.15

  result = price * number

  alert('The cost GST is $' + result)
}
