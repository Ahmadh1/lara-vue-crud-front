<template>
	<div class="container mt-5 mb-5">
		<div class="row">
			<div class="col-8 offset-2">
				<div class="card">
					<div class="card-header">
						<h3>Update Product</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="update">
							<div class="form-group">
		  			    		<label for="title">Title of Product:</label>
		  			    		<input id="title" type="text" v-model="product.title" class="form-control" placeholder="ABC">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="price">Price:</label>
		  			    		<input id="price" type="number" v-model="product.price" class="form-control">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="det">Details:</label>
		  			    		<textarea id="det" rows="5" placeholder="Add Details" v-model="product.description" class="form-control"></textarea>
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<button class="btn btn-danger float-right">Update</button>
		  			    	</div>
		    			</form>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created () {
		this.getProduct()
	},
	data() {
		return {
			product: {}
		}
		},
	methods: {
		getProduct() {
			this.$http.get('api/products/' + this.$route.params.product)
				.then(res => {
					this.product = res.body
				})
		},
		update() {
			this.$http.patch(`api/products/${this.$route.params.product}`, this.product)
				.then(res => {
					swal({
					  title: "Good job!",
					  text: "You clicked the button!",
					  icon: "success",
					  button: "OK",
					});
				});
				this.$router.push('/feed');
		}
	}
}
</script>
