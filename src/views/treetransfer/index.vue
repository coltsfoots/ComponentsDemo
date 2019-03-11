<template>
	<div>
		<custom-form :formOptions="formOptions"></custom-form>
	</div>
</template>

<script>
import CustomForm from '@/components/CustomForm'
export default {
  components: { CustomForm },
  data() {
    return {
      formOptions: {
        formName: 'custom-form',
        forms: [{
          itemType: 'daterange',
          prop: 'date',
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                console.log(picker)
                start.setTime(start.getTime() * 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            }]
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
