<template>
	<div class="container mt-5 mb-5">
		<div class="row">
			<div class="col-8 offset-2">
				<div class="card">
					<div class="card-header">
						<h3>Login</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="login">
		  			    	<div class="form-group">
		  			    		<label for="email">Email:</label>
		  			    		<input id="email" type="email" v-model="form.email" class="form-control" placeholder="JohnDoe@example.com" autofocus>
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<label for="password">Password:</label>
		  			    		<input id="password" type="password" placeholder="Enter Password..." v-model="form.password" class="form-control">
		  			    	</div>
		  			    	<div class="form-group">
		  			    		<button :disabled="disabled" class="btn btn-danger form-control">Login</button>
		  			    		<br>
		  			    		<p>Don't have an account <router-link class="text-success" to="/register">Click here to get one</router-link></p>
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
				email: '',
				password: ''
			}
		}
	},
	methods: {
		login() {
			var data = {
				client_id: 2,
				client_secret: 'jlgfEdK14963cZedFE8CW1lMNk7GpuUTglDy7bda',
				grant_type: 'password',
				username: this.form.email,
				password: this.form.password,
			}
			this.$http.post("oauth/token" , data)
				.then((res) => {
					// console.log(res)
					this.$auth.setToken(res.body.access_token, res.body.expires_in + Date.now())
					this.$router.push('/feed')
				})
		}
	},
	computed: {
		disabled() {
			return ! (this.form.email && this.form.password)
		}
	}
}
</script>
