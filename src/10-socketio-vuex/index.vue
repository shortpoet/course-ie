<template>
	<div>
		<cart/>
		<articles/>
	</div>
</template>

<script>
import Cart from "./Cart";
import Articles from "./Articles";

// Set events
import store from "../store";
import { socket } from "../socket";
socket.on("cart:addItem", item => store.commit("cart/addToCart", item));
socket.on("cart:removeItem", item => store.commit("cart/removeCartItem", item));

export default {
  components: {
    Cart,
    Articles
  }
};
</script>
