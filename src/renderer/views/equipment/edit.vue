<template>
  <div v-if=equipment>
  <el-header><br>
    <el-row>
      <el-col :span="6">
        <span>{{ equipment.description }}</span>
        <span style="font-size: 13px;">{{ equipment.make }}</span>
        <span style="font-size: 11px;">{{ equipment.model }}</span>
      </el-col>
    </el-row>
  </el-header>
  <el-tabs style="padding-left:20px" v-model="activeName">
    <el-tab-pane label="Profile" name="first"><AddEditForm :equipment="equipment" @onSubmit="onSubmit"></AddEditForm></el-tab-pane>
    <el-tab-pane label="Tasks" name="second"><TaskTables :equipment="equipment"></TaskTables></el-tab-pane>
    <el-tab-pane label="History" name="third">History</el-tab-pane>
    <el-tab-pane label="Documents" name="fourth">Documents</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddEditForm from '../../components/Equipment/addedit'
  import TaskTables from '../../components/Equipment/taskTables'
  export default {
    computed: {
      ...mapGetters([
        'getEquipmentById'
      ])
    },
    data() {
      return {
        equipment: {},
        activeName: 'first'
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
      AddEditForm,
      TaskTables
    },
    mounted() {
      if ('equipmentID' in this.$route.query) {
        this.equipment = this.getEquipmentById(parseInt(this.$route.query.equipmentID))
      }
    }
}
</script>

