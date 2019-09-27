<template>
	<div class="container mt-5 mb-5">
		<div class="row">
			<div class="col-8 offset-2">
				<div class="card">
					<div class="card-header">
						<h3>Register</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="register">
							<div class="form-group">
		  			    		<label for="name">Name:</label>
		  			    		<input id="name" type="text" v-model="form.name" class="form-control" placeholder="John Doe" autofocus>
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="email">Email:</label>
		  			    		<input id="email" type="email" v-model="form.email" class="form-control" placeholder="JohnDoe@example.com">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="password">Password:</label>
		  			    		<input id="password" type="password" placeholder="Enter Password..." v-model="form.password" class="form-control">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<button :disabled="disabled" class="btn btn-danger form-control">Login</button>
		  			    		<br>
		  			    		<p>Already have an account <router-link class="text-danger" to="/login">Click here to login</router-link></p>
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
			form: {
				name: '',
				email: '',
				password: ''
			}
		}
	},
	methods: {
		register() {
			alert('working')
		}
	},
	computed: {
		disabled() {
			return ! (this.form.email && this.form.password && this.form.name)
		}
	}
}
</script>
