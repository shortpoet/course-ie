<template>
	<div>
		<cart/>
		<articles/>
	</div>
</template>

<script>
import Cart from "./Cart";
import Articles from "./Articles";

export default {
  components: {
    Cart,
    Articles
  }
};
</script>
