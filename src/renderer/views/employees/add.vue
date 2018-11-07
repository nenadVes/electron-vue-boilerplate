<template>
  <AddEditForm :employee="employee" @onSubmit="onSubmit"></AddEditForm>
</template>

<script>
import AddEditForm from '../../components/Employee/addedit'

export default {
  name: 'Employee',
  data() {
    return {
      employee: {
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
      this.$message('Employee is successfully created')
      this.$store.dispatch('AddEmployee', this.employee)
    }
  },
  components: {
    AddEditForm
  }
}
</script>

