<template>
  <AddEditForm :employee="employee" @onSubmit="onSubmit"></AddEditForm>
</template>

<script>
import AddEditForm from '../../components/Employee/addedit'
import { Employee } from '../../models/employee.model'

export default {
  name: 'Employee',
  data() {
    return {
      employee: new Employee({}, this.$store.getters['employees'])
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

