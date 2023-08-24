<template>
	<section class="tip-result tip">
		<p>
			{{ title }} <br />
			<span>/ person</span>
		</p>
		<div class="tip-amount">$ {{ amount }}</div>
	</section>
</template>
<script setup>
	import './SectionTotalComponent.css';
	const props = defineProps(['title', 'amount']);
</script>
