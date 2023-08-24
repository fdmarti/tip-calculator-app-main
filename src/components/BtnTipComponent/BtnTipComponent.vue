<template>
	<div class="btn-tip">{{ number }}%</div>
</template>
<script setup>
	import './BtnTipComponent.css';
	const { number } = defineProps(['number']);
</script>
