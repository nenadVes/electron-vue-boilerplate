<template>
    <div class="app-container">
        <el-form ref="employee" :rules="rules" :model="employee" label-width="120px">
            <el-row>
                <el-col :span="12">
                    <el-form-item prop="fname" :label="$t('employees.fname')">
                        <el-input v-model="employee.fname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="lname" :label="$t('employees.lname')">
                        <el-input v-model="employee.lname"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item prop="email" :label="$t('employees.email')">
                <el-input prefix-icon="el-icon-message" type="email" v-model="employee.email"></el-input>
            </el-form-item>
            <el-form-item prop="number" :label="$t('employees.number')">
                <el-input v-model="employee.number"></el-input>
            </el-form-item>
            <el-form-item prop="status" :label="$t('employees.status')">
                <el-select v-model="employee.status" placeholder="please select status">
                    <el-option label="Active" value="active"></el-option>
                    <el-option label="Archived" value="archived"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="labels" :label="$t('employees.labels')">
                <el-select
                        v-model="employee.keywords"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="Choose labels">
                </el-select>
            </el-form-item>
            <el-form-item prop="labor" :label="$t('employees.labor')">
                <el-input v-model="employee.labor"><template slot="prepend">$</template></el-input>
            </el-form-item>
            <el-form-item prop="description" :label="$t('employees.notes')">
                <el-input type="textarea" v-model="employee.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button v-if="['EditEmployee'].indexOf(this.$route.name) > -1" type="primary" @click="onSubmit">{{ $t("employees.button.update") }}</el-button>
                <el-button v-else type="primary" @click="onSubmit">{{ $t("employees.button.create") }}</el-button>
                <el-button @click="onCancel">{{ $t("employees.button.cancel") }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import { employeeRules } from '../../utils/rules'
  export default {
    data() {
      return {
        rules: employeeRules
      }
    },
    props: {
      employee: Object
    },
    methods: {
      onCancel() {
        this.$router.push('/employees/index')
      },
      onSubmit() {
        this.$refs['employee'].validate((valid) => {
          if (valid) {
            this.$emit('onSubmit', this.employee)
            this.$router.push('/employees/index')
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
    .line{
        text-align: center;
    }
</style>

