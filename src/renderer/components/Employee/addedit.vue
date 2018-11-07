<template>
    <div class="app-container">
        <el-form ref="employee" :rules="rules" :model="employee" label-width="120px">
            <el-row>
                <el-col :span="12">
                    <el-form-item prop="fname" label="First name">
                        <el-input v-model="employee.fname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="lname" label="Last name">
                        <el-input v-model="employee.lname"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item prop="email" label="Email">
                <el-input prefix-icon="el-icon-message" type="email" v-model="employee.email"></el-input>
            </el-form-item>
            <el-form-item prop="number" label="Number">
                <el-input v-model.number="employee.number"></el-input>
            </el-form-item>
            <el-form-item prop="status" label="Status">
                <el-select v-model="employee.status" placeholder="please select status">
                    <el-option label="Active" value="active"></el-option>
                    <el-option label="Archived" value="archived"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="labels" label="Labels">
                <el-select
                        v-model="employee.keywords"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="Choose labels">
                </el-select>
            </el-form-item>
            <el-form-item prop="labor" label="Labor rate">
                <el-input v-model.number="employee.labor"><template slot="prepend">$</template></el-input>
            </el-form-item>
            <el-form-item prop="description" label="Notes">
                <el-input type="textarea" v-model="employee.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button v-if="['EditEmployee'].indexOf(this.$route.name) > -1" type="primary" @click="onSubmit">Update</el-button>
                <el-button v-else type="primary" @click="onSubmit">Create</el-button>
                <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import { rules } from '../../../validation-rules/rules'
  export default {
    data() {
      return {
        rules: rules
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

