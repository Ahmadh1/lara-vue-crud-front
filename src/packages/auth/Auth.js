export default function(Vue) {
	var authenticatedUser = {}
	Vue.auth = {
		// set Token
		setToken (token, expiration)  {
			localStorage.setItem('token', token)
			localStorage.setItem('expiration', expiration)
		},
		// get Token
		getToken () {
			var token = localStorage.getItem('token')
			var expiration = localStorage.getItem('expiration')

			if(! token || !expiration)
				return null

			if (Date.now() > parseInt(expiration)) {
				this.destroyToken();
				return null;

			}
			else {
				return token;
			}


		},
		// destroy Token
		destroyToken () {
			localStorage.removeItem('token')
			localStorage.removeItem('expiration')
		},
		// isAuthenticated
		isAuthenticated () {
			if (this.getToken())
				{ return true }
					else
						{ return false }
		},
		// set Auth User
		setAuthenticatedUser(data) {
			authenticatedUser = data
		},
		// get Auth User
		getAuthenticatedUser() {
			return authenticatedUser
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get () {
				return Vue.auth
			}
		}
	})
}
