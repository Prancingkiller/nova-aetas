<template>
	<div>
		<h3>{{ guard.name }}</h3>
		<img :src="guard.image">
		<p>{{ guard.description }}</p>
	</div>
</template>
<script>
export default{
		name:"BaseGuard",
		props:{
				guard:{
						type:Object
				}
		}
}
</script>