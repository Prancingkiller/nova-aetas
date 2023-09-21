<template>
	<div class="card" style="width: 18rem;">
		<img src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.18169-9/282897_480770435306842_322505912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s7sO73x2HjsAX8xX3s1&_nc_ht=scontent.ffco2-1.fna&oh=00_AfD98N8xN-X_POnAWvRAtx1yzHoWUUbaalcpYqAlC1DzmQ&oe=652D1C7D" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">{{ hit.name }}</h5>
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