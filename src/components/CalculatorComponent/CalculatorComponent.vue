<template>
	<div class="calculator">
		<div class="form">
			<section class="form-group">
				<label for="bill">Bill</label>
				<img src="/images/icon-dollar.svg" alt="dollar icon" />
				<input
					type="text"
					placeholder="0"
					v-model="formData.bill"
					@blur="onSubmitFormTip"
					id="bill"
				/>
			</section>

			<section class="form-group">
				<label for="numberCustom">Select Tip %</label>
				<div class="buttons-tip">
					<BtnTipComponent number="5" @click="selectedBtnTip(0)" />
					<BtnTipComponent number="10" @click="selectedBtnTip(1)" />
					<BtnTipComponent number="15" @click="selectedBtnTip(2)" />
					<BtnTipComponent number="25" @click="selectedBtnTip(3)" />
					<BtnTipComponent number="50" @click="selectedBtnTip(4)" />
					<input
						type="text"
						placeholder="Custom"
						v-model="formData.numberCustom"
						class="btn-tip"
						@click="selectedBtnTip(5)"
						@blur="onSubmitFormTip"
						id="numberCustom"
					/>
				</div>
			</section>

			<section class="form-group">
				<label for="people">Number of people</label>
				<img src="/images/icon-person.svg" alt="person icon" />
				<input
					type="text"
					placeholder="1"
					v-model="formData.people"
					@blur="onSubmitFormTip"
					id="people"
				/>
			</section>
		</div>
		<div class="result">
			<div class="result-section">
				<SectionTotalComponent
					title="Tip Amount"
					:amount="!formData.tipAmount.length ? 0 : formData.tipAmount"
				/>
				<SectionTotalComponent
					title="Total"
					:amount="!formData.total.length ? 0 : formData.total"
				/>
			</div>
			<BtnReset @click="resetForm" />
		</div>
	</div>
</template>

<script setup>
	import './CalculatorComponent.css';
	import useTipSplitter from '../../hooks/useTipSplitter';
	import BtnTipComponent from '../BtnTipComponent/BtnTipComponent.vue';
	import SectionTotalComponent from '../SectionTotalComponent/SectionTotalComponent.vue';
	import BtnReset from '../BtnReset/BtnReset.vue';
	const { onSubmitFormTip, selectedBtnTip, resetForm, formData } =
		useTipSplitter();
</script>
