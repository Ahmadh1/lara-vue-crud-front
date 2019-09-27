<template>
	<div class="col-4 mb-2">
		<div class="card">
			<div class="card-header">{{ pro.title }}</div>
			<div class="card-body">
				<img :src="'http://localhost:8000/images/' + pro.image" class="img-thumbnail">
				<p v-html="pro.description"></p>
			</div>
			<div class="card-footer">
				<div class="btn-group-sm">
					<button class="btn btn-outline-success">Add to wishlist</button>
					<button class="btn btn-outline-dark">Buy</button>
					<button class="btn btn-outline-danger" v-if=" pro.user_id == AuthenticatedUser.id" @click="remove">Delete</button>
					<router-link class="btn btn-outline-dark" 
					v-if=" pro.user_id == AuthenticatedUser.id" 
					:to="'/products/' + pro.id + '/edit'"
					>Edit</router-link>
				</div>
				<span class="float-right"><b>$ </b>{{ pro.price }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['pro', 'index' , 'AuthenticatedUser'],
	methods:{
		remove() {
		  	EventBus.$emit('deleteProduct', this.index)
		}
	}
}
</script>