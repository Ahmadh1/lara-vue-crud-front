<template>
	<div class="row">
		<product 
				 v-for="(product, index) in products"
				 :AuthenticatedUser="AuthenticatedUser"
				 :pro="product"
				 :index=index
				 ></product>
	</div>
</template>

<script>
	import product from './Product.vue'
	export default {
		components: {product},
		data () {
		return {
			products: [],
		}
	},
	computed: {
		AuthenticatedUser () {
			return this.$auth.getAuthenticatedUser()
		}
	},
	methods: {
		listen() {	
		  	EventBus.$on('deleteProduct', (index) => {
  			this.$http.delete('api/products/' + this.products[index].id)
  				.then(res => {
  					this.products.splice(index, 1)
  				});
  			});
		}
	},
	created() {
		this.$http.get('api/products')
			.then(res => {
				this.products = res.body;
			});
			this.listen();
	},
}
</script>