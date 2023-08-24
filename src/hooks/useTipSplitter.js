import { reactive } from "vue";

const useTipSplitter = () => {

    const initialState = {
        bill: '',
        tip: '',
        people: '',
        numberCustom: '',
        tipAmount: '',
        total: '',
    }

    const formData = reactive({ ...initialState });

    const onSplitterAmount = () => {

        const valuePercentage = formData.tip ? formData.tip : formData.numberCustom
        const amountOfPeople = !formData.people ? 1 : formData.people

        const percentage = ((formData.bill * valuePercentage) / 100).toFixed(2)
        const tipAmount = (percentage / amountOfPeople).toFixed(2)

        return {
            tipAmount,
            totalPerPerson: (tipAmount * amountOfPeople).toFixed(2)
        }
    }

    const selectedBtnTip = (position) => {
        const botonesTip = document.querySelectorAll('.btn-tip');
        botonesTip.forEach((el) => el.classList.remove('selected'));
        const btnSelected = Array.from(botonesTip).find((el, i) => i === position);

        if (position != 5) {
            formData.tip = btnSelected.textContent.split('%')[0];
            formData.numberCustom = '';
            onSubmitFormTip();
        } else {
            formData.tip = '';
        }

        btnSelected.classList.add('selected');
    };

    const onSubmitFormTip = () => {
        const results = onSplitterAmount();
        formData.tipAmount = results.tipAmount;
        formData.total = results.totalPerPerson;
    };

    const resetForm = () => {
        Object.assign(formData, initialState)
    }


    return {
        formData,

        selectedBtnTip,
        onSplitterAmount,
        onSubmitFormTip,
        resetForm
    }

}


export default useTipSplitter;