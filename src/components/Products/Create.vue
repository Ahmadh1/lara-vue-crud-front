<template>
	<div class="container mt-5 mb-5">
		<div class="row">
			<div class="col-8 offset-2">
				<div class="card">
					<div class="card-header">
						<h3>Add New Product</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="create">
							<div class="form-group">
		  			    		<label for="title">Title of Product:</label>
		  			    		<input id="title" type="text" v-model="product.title" class="form-control" placeholder="ABC">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="image">Image of Product:</label>
		  			    		<input id="image" type="file" class="form-control" @change="imageChange">
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
		  			    		<button :disabled="disabled" class="btn btn-danger float-right">Create</button>
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
	data() {
		return {
			product: {
				title: '',
				price: 0,
				description: '',
				image: ''
			}
		}
		},
	computed: {
		disabled() {
			return ! (this.product.title && this.product.price && this.product.description)
		}
	},
	methods: {
		create() {
			this.$http.post('api/products', this.product)
				.then(res => {
					swal({
					  title: "Good job!",
					  text: "You clicked the button!",
					  icon: "success",
					  button: "OK",
					});
				});
				this.$router.push('/feed');
		},
		imageChange (e) {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(e.target.files[0])
			fileReader.onload = (e) => {
				this.product.image = e.target.result
			}
		}
	}
}
</script>
