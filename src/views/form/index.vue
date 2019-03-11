<template>
	<div>
		<h1>Form 表单</h1>
		<p>在element-ui框架的基础上进行二次封装</p>
		<h2>基础表单</h2>
		<p>基础表单展示用法</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<custom-form :formOptions="formOptions1"></custom-form>
				<div>{{val}}</div>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">

				<pre>
&lt;template&gt;
  &lt;custom-form :formOptions="formOptions1"&gt;&lt;/custom-form&gt;
&lt;/template&gt;
import CustomForm from '@/components/CustomForm'
export default {
  comonents: {
    CustomForm
  },
  data(){
    return {
      formOptions: {
        formName: 'custom-form1',
        labelWidth: '80px',
        forms: [{
          itemType: 'input',
          label: '用户名',
          prop: 'username'
        }, {
          itemType: 'select',
          label: '性别',
          prop: 'sex',
          options: [{
            label: '男',
            value: 0
          }, {
            label: '女',
            value: 1
          }]
        }, {
          itemType: 'date',
          label: '日期',
          prop: 'date'
        }, {
          itemType: 'daterange',
          label: '日期范围',
          prop: 'daterange'
        }],
        handleSubmit(val) {
          console.log(val)
        }
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h2>带重置按钮的表单</h2>
		<p>重置表单</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<custom-form :formOptions="formOptions2"></custom-form>
				<div>要显示重置按钮，只需要在配置参数中将 showResetBtn 设置为 true 即可</div>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
	&lt;custom-form :formOptions="formOptions2"&gt;&lt;/custom-form&gt;
&lt;/template&gt;
import CustomForm from '@/components/CustomForm'
export default {
  comonents: {
    CustomForm
  },
  data(){
    return {
      formOptions2: {
        formName: 'custom-form2',
        labelWidth: '80px',
        showResetBtn: true,
        forms: [{
          // 这里并没有写  itemType 属性，默认值就是输入框
          label: 'username',
          prop: 'usernmae'
        }]
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>带快捷选择方式的日期</h3>
		<p>快捷方式日期</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<custom-form :formOptions="formOptions3"></custom-form>
				<div>
					可以看到文字对齐方式变成左对齐了，labelPosition 属性决定文字对齐方式
				</div>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
	&lt;custom-form :formOptions="formOptions3"&gt;&lt;/custom-form&gt;
&lt;/template&gt;
import CustomForm from '@/components/CustomForm'
export default {
  comonents: {
    CustomForm
  },
  data(){
    return {
      formOptions3: {
        formName: 'custom-form3',
        labelWidth: '120px',
        labelPosition: 'left',
        forms: [{
          label: '输入框',
          prop: 'input'
        }, {
          itemType: 'daterange',
          label: '快捷方式日期',
          prop: 'daterange',
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                console.log(start.getTime())
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            }, {
              text: '最近三周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7 * 3)
                picker.$emit('pick', [start, end])
              }
            }]
          }
        }]
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h2>带验证规则的表单</h2>
		<p>验证表单, 同时演示了默认定义规则的方法以及自定义规则的方法</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<custom-form :formOptions="formOptions4"></custom-form>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
	&lt;custom-form :formOptions="formOptions4"&gt;&lt;/custom-form&gt;
&lt;/template&gt;
import CustomForm from '@/components/CustomForm'
export default {
  comonents: {
    CustomForm
  },
  data(){
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length &lt; 6) {
        callback(new Error('密码长度最少6位'))
      } else {
        callback()
      }
    }
    return {
      formOptions4: {
        formName: 'custom-form4',
        labelWidth: '120px',
        showResetBtn: true,
        labelPosition: 'top',
        forms: [{
          label: '用户名',
          prop: 'username',
          itemWidth: '180px'
        }, {
          label: '密码',
          itemType: 'password',
          prop: 'password',
          itemWidth: '280px'
        }, {
          itemType: 'select',
          label: '性别',
          prop: 'sex'
        }, {
          itemType: 'date',
          label: '出生日期',
          prop: 'date'
        }],
        rules: {
          username: [{
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
          }, {
            min: 4,
            max: 16,
            trigger: 'blur',
            message: '长度在 4 到 16 个字符'
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }]
        }
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h2>更多参数参考以下参数配置</h2>
		<h3>参数配置</h3>
		<el-table :data="formParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
		<h3>forms参数配置</h3>
		<el-table :data="formsParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import CustomForm from '@/components/CustomForm'
import { formParams, formsParams } from './formParams'
export default {
  name: 'Form',
  components: {
    CustomForm
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length < 6) {
        callback(new Error('密码长度最少6位'))
      } else {
        callback()
      }
    }
    return {
      formOptions1: {
        formName: 'custom-form',
        labelWidth: '80px',
        forms: [{
          itemType: 'input',
          label: '用户名',
          prop: 'username'
        }, {
          itemType: 'select',
          label: '性别',
          prop: 'sex',
          options: [{
            label: '男',
            value: 0
          }, {
            label: '女',
            value: 1
          }]
        }, {
          itemType: 'date',
          label: '日期',
          prop: 'date'
        }, {
          itemType: 'daterange',
          label: '日期范围',
          prop: 'daterange'
        }],
        handleSubmit: this.handleSubmit
      },
      formOptions2: {
        formName: 'custom-form2',
        labelWidth: '80px',
        showResetBtn: true,
        forms: [{
          label: 'username',
          prop: 'usernmae'
        }]
      },
      formOptions3: {
        formName: 'custom-form3',
        labelWidth: '120px',
        labelPosition: 'left',
        forms: [{
          label: '输入框',
          prop: 'input'
        }, {
          itemType: 'daterange',
          label: '快捷方式日期',
          prop: 'daterange',
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                console.log(start.getTime())
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            }, {
              text: '最近三周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7 * 3)
                picker.$emit('pick', [start, end])
              }
            }]
          }
        }]
      },
      formOptions4: {
        formName: 'custom-form4',
        labelWidth: '120px',
        showResetBtn: true,
        labelPosition: 'top',
        forms: [{
          label: '用户名',
          prop: 'username',
          itemWidth: '180px'
        }, {
          label: '密码',
          itemType: 'password',
          prop: 'password',
          itemWidth: '280px'
        }, {
          itemType: 'select',
          label: '性别',
          prop: 'sex'
        }, {
          itemType: 'date',
          label: '出生日期',
          prop: 'date'
        }],
        rules: {
          username: [{
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
          }, {
            min: 4,
            max: 16,
            trigger: 'blur',
            message: '长度在 4 到 16 个字符'
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }]
        }
      },
      val: '',
      formParams: formParams,
      formsParams: formsParams
    }
  },
  methods: {
    handleSubmit(val) {
      this.val = val
    }
  }
}
</script>

<style lang="less">

</style>
