<template>
  <AddEditForm :task="task" @onSubmit="onSubmit" @onCancel="onCancel"></AddEditForm>
</template>

<script>
import AddEditForm from '../../components/Task/addedit'
import { Task } from '../../models/task.model'
import { mapGetters } from 'vuex'

export default {
  name: 'Task',
  computed: {
    ...mapGetters([
      'getTaskById'
    ])
  },
  data() {
    return {
      task: new Task({}, this.$store.getters['tasks'])
    }
  },
  methods: {
    onSubmit() {
      this.$message('Task is successfully updated')
      this.$store.dispatch('EditTask', this.task)
      this.$router.go(-1)
    },
    onCancel() {
      this.$router.go(-1)
    }
  },
  components: {
    AddEditForm
  },
  mounted() {
    if ('taskID' in this.$route.query) {
      this.task = this.getTaskById(this.$route.query.taskID)
    }
  }
}
</script>

