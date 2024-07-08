<template>
  <paypal-buttons
    :createOrder="createOrder"
    :onApprove="onApprove"
  ></paypal-buttons>
</template>

<script>
import Vue from "vue";
import api from "@/service/api";
// import swal from "sweetalert2";
const PayPalButton = window.paypal.Buttons.driver("vue", Vue);
export default {
  props: ["playListAmount", "playlistId"],
  name: "PayPalButton",
  components: {
    "paypal-buttons": PayPalButton
  },
  methods: {
    createOrder: function() {
      return api
        .payPalCreateOrder(this.playlistId)
        .then(response => {
          return response.Data.orderId;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onApprove: async function() {
      const response = await api.payPalDonate(this.playlistId);
      console.log(response, "data");
      // return actions.order.capture();
    }
  }
};
</script>

<style></style>
