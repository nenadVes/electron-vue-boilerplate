<template>
  <AddEditForm :equipment="equipment" @onSubmit="onSubmit"></AddEditForm>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddEditForm from '../../components/Equipment/addedit'

  export default {
    computed: {
      ...mapGetters([
        'getEquipmentById'
      ])
    },
    data() {
      return {
        equipment: {}
      }
    },
    methods: {
      onSubmit() {
        this.$message('Equipment is successfully updated')
        this.$store.dispatch('EditEquipment', this.equipment)
        this.$router.push('/equipment/index')
      },
      onCancel() {
        this.$router.push('/equipment/index')
      }
    },
    components: {
      AddEditForm
    },
    mounted() {
      if ('equipmentID' in this.$route.query) {
        this.equipment = this.getEquipmentById(this.$route.query.equipmentID)
      }
    }
}
</script>

