<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="First name">
            <el-input v-model="form.fname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Last name">
            <el-input v-model="form.lname"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Email">
        <el-input prefix-icon="el-icon-message" type="email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Number">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="Status">
        <el-select v-model="form.status" placeholder="please select status">
          <el-option label="Active" value="active"></el-option>
          <el-option label="Archived" value="archived"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Labels">
        <el-select
              v-model="form.keywords"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="Choose labels">
          <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Labor rate">
        <el-input v-model="form.labor" controls-position="right" @change="handleChange" :min="1" :max="200"><template slot="prepend">$</template></el-input>
      </el-form-item>
      <el-form-item label="Notes">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      form: {
        fname: '',
        lname: '',
        email: '',
        number: '',
        status: '',
        desc: '',
        labor: '',
        keywords: []
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('Data is saved to store')
      this.$store.fname = this.fname
    },
    onCancel() {
      this.$router.push('/employees/index')
    },
    handleChange(value) {
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

