<template>
  <AddEditForm :equipment="equipment" @onSubmit="onSubmit"></AddEditForm>
</template>

<script>
import AddEditForm from '../../components/Equipment/addEdit'
import { Equipment } from '../../models/equipment.model'

export default {
  name: 'Equipment',
  data() {
    return {
      equipment: new Equipment({}, this.$store.getters['equipment'])
    }
  },
  methods: {
    onSubmit() {
      this.$message('Equipment is successfully created')
      this.$store.dispatch('AddEquipment', this.equipment)
      this.$router.push('/equipment/index')
    },
    onCancel() {
      this.$router.push('/equipment/index')
    },
    handleChange(value) {
    }
  },
  components: {
    AddEditForm
  }
}
</script>

