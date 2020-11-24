"use strict";

/**
 * Area para testing comentar en prodduction
 */
$(document).ready(function () {
  var idPayment = getParameterByName('id');
  var use_mode = getParameterByName('use_mode');
  content.init(idPayment, use_mode);
});
var content = new Vue({
  el: "#payment",
  components: {
    'payment': payment
  },
  data: function data() {
    return {
      paymentDetails: null
    };
  },
  watch: {},
  methods: {
    init: function init(idPayment, use_mode) {
      this.getPayment(idPayment, use_mode);
    },
    activatePayment: function activatePayment(idPayment, use_mode) {
      var params = "";
      comunicateWebView("clear-cart", params);
      var form = new FormData();
      form.append('idBanco', idPayment);
      var service = use_mode == 'testing' ? "https://arvispace.com/serviciosASARAmbientePruebas/activarPedido.php" : "https://arvispace.com/serviciosASAR/activarPedido.php";
      axios.post(service, form).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPayment: function getPayment(idPayment, use_mode) {
      var form = new FormData();
      form.append('id', idPayment);
      var service = use_mode == 'testing' ? "https://arvispace.com/lib/paymenttesting/charge.php" : "https://arvispace.com/lib/payment/charge.php";
      axios.post(service, form).then(function (response) {
        if (response.status == 200) {
          console.log(response);

          if (response.data.status == "completed") {
            content.activatePayment(idPayment, use_mode);
          }

          content.paymentDetails = response.data;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});