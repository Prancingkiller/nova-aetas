<template>
	<div class="card" style="width: 18rem;">
		<img src="" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">{{ hit.name }}</h5>
			<p class="card-text">{{ hit.description }}</p>
			<a href="#" class="btn btn-primary">Scegli</a>
		</div>
	</div>
</template>
<script>
export default {
	name: "BaseHit",
	props: {
		hit: {
			type: Object
		}
	}
}
</script>