<template>
	<div>
		<custom-form
			:forms="formOptions.forms"
			:formName="'formss'"
			:inline="true"
			:size="'small'"
			:handleSubmit="handleSubmit"
		></custom-form>
	</div>
</template>

<script>
import CustomForm from '@/components/CustomForm/index'
export default {
  name: 'NewForm',
  components: {
    CustomForm
  },
  data() {
    return {
      formOptions: {
        forms: [
          {
            label: '用户名',
            prop: 'username'
          },
          {
            label: '下拉框',
            itemType: 'select',
            prop: 'select1',
            options: [
              {
                label: '1111',
                value: 1
              },
              {
                label: '2222',
                value: 2
              }
            ]
          },
          {
            label: '动态下拉框',
            itemType: 'select',
            prop: 'select2'
          },
          {
            label: '日期',
            itemType: 'date',
            prop: 'date'
          },
          {
            label: '范围日期',
            itemType: 'daterange',
            prop: 'daterange'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(formParams) {
      console.log(formParams)
    },
    selectFetch() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
