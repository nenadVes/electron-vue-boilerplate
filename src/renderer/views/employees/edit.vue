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
        this.$store.dispatch('EditEmployee', { employee })
      },
      onCancel() {
        this.$router.push('/employees/index')
      }
    },
    components: {
      AddEditForm
    },
    mounted() {
      if ('employeeID' in this.$route.query) {
        this.employee = this.getEmployeeById(this.$route.query.employeeID)
      }
    }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

