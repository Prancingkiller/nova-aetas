<template>
	<div class="p-5">
		<div class="player-container">
        <video v-if="hit.filename" controls loop="true" muted preload="none" autoplay="true" :src="`https://notes-api.it/scrima-api/videos/actions/${hit.filename}`"
          poster="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.18169-9/282897_480770435306842_322505912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s7sO73x2HjsAX8xX3s1&_nc_ht=scontent.ffco2-1.fna&oh=00_AfD98N8xN-X_POnAWvRAtx1yzHoWUUbaalcpYqAlC1DzmQ&oe=652D1C7D" width="620">
          Sorry, your browser doesn't support embedded videos, but don't worry, you can
          <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
          and watch it with your favorite video player!
        </video>
      </div>
		<h5 class="p-3">{{ hit.name }}</h5>
		<p >{{ hit.description }}</p>
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
<style>
video{
	width:100%
}
</style>