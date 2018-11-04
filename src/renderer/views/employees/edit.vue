<template>
  <AddEditForm :employee="employee" @onSubmit="onSubmit"></AddEditForm>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddEditForm from '../../components/Employee/addedit'

  export default {
    computed: {
      ...mapGetters([
        'getEmployeeById'
      ])
    },
    data() {
      return {
        employee: {}
      }
    },
    methods: {
      onSubmit(employee) {
        this.$message('Employee is successfully updated')
        this.$store.dispatch('EditEmployee', { employee, index: this.$route.query.employeeID })
      },
      onCancel() {
        this.$router.push('/employees/index')
      },
      handleChange(value) {
      }
    },
    components: {
      AddEditForm
    },
    mounted() {
      if ('employeeID' in this.$route.query) {
        const obj = this.getEmployeeById(this.$route.query.employeeID)
        this.employee = Object.assign({}, obj)
      }
    }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

