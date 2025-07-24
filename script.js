// PayPal button logic (use real Client ID in apply.html script tag)
if (document.getElementById('paypal-button-container')) {
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '20.00' // Non-refundable fee
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment completed by ' + details.payer.name.given_name);
        // Optional: send form data to your server or show confirmation
      });
    }
  }).render('#paypal-button-container');
}
