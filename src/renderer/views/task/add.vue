<template>
  <AddEditForm :task="task" @onSubmit="onSubmit" @onCancel="onCancel"></AddEditForm>
</template>

<script>
import AddEditForm from '../../components/Task/addedit'
import { Task } from '../../models/task.model'

export default {
  name: 'Task',
  data() {
    return {
      task: new Task({}, this.$store.getters['tasks'])
    }
  },
  methods: {
    onSubmit() {
      this.$message('Task is successfully created')
      this.$store.dispatch('AddTask', this.task)
      this.$router.go(-1)
    },
    onCancel() {
      this.$router.go(-1)
    },
    handleChange(value) {
    }
  },
  components: {
    AddEditForm
  }
}
</script>

