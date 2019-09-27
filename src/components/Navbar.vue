<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue Cart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-if=" ! isAuth">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item" v-if=" ! isAuth">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>

      <li class="nav-item" v-if="isAuth">
        <router-link class="nav-link" to="/feed">Feed</router-link>
      </li>
      <li class="nav-item" v-if="isAuth">
        <router-link class="nav-link" to="/create">Add Product</router-link>
      </li>
      <li class="nav-item" v-if="isAuth">
        <router-link class="nav-link" to="/logout">Logout</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      isAuth: null
    }
  },
  created () {
      this.isAuth = this.$auth.isAuthenticated()
      this.setAuthUser()
  },
  methods: {
    setAuthUser() {
      this.$http.get('api/user')
          .then((res) => {
            this.$auth.setAuthenticatedUser(res.body)
          })
    }
  }
}
</script>
