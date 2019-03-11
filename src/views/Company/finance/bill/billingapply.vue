<template>
    <div class="app-container">

    </div>
</template>

<script>
export default {
  data() {
    return {
      billingApplyForm: {
        startTime: '',
        endTime: '',
        companyName: '',
        billingState: ''
      },
      billDetails: false,
      lookBill: false,
      billEntry: false
    }
  }
}
</script>

<style scoped>
.el-input{
    width: 300px;
}
.save{
    margin-left: 80px;
}
</style>
