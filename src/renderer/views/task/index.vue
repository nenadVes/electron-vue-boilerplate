<template>
  <div>
    <el-header><br>
      <el-row>
        <el-col :span="4"><el-button type="primary" @click=buttonHandler>{{ $t("task.button.new") }}</el-button></el-col>
      </el-row>
    </el-header>
    <el-table
          :data="activeTasksByEquipmentID"
          style="width: 100%">
      <el-table-column
              width="30">
        <template slot-scope="scope">
          <span v-if="scope.row.type === '1'"><svg-icon icon-class="repair" /></span>
          <span v-else><svg-icon icon-class="preventive" /></span>
        </template>
      </el-table-column>
    <el-table-column
            prop="name"
            :label="$t('task.name')"
            width="200">
    </el-table-column>
    <el-table-column
            :label="$t('task.status')">
      <template slot-scope="scope">
        <span v-if="scope.row.status > 0">Due in {{scope.row.status}} days</span>
        <span style="color:red" v-else>Due {{scope.row.status * -1}} days ago</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Due by:</b><br>{{scope.row.dueBy}}</span>
        <span v-else><b>Recurring every:</b><br> {{scope.row.dueEvery}} days</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Priority:</b><br> {{scope.row.priority}}</span>
        <span v-else><b>Advance notice:</b><br> {{scope.row.advanceNotice}}</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Requested by:</b><br> {{scope.row.requestor}}</span>
        <span v-else><b>Last performed on:</b><br> <span v-if="scope.row.lastPerformed != ''">{{scope.row.lastPerformed}}</span><span v-else>Never</span></span>
      </template>
    </el-table-column>
    <el-table-column
            :label="$t('task.actions')"
            width="250">
      <template slot-scope="scope">
        <el-button-group
                style="width: 100%">
          <el-button type="primary" style="width: 45%" @click="handleEdit(scope.row.id)">Edit</el-button>
          <el-button type="danger" style="width: 45%" @click="handleDelete(scope.row.id)">Delete</el-button>
        </el-button-group>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { parseTime } from '../../utils/index'

  export default {
    computed: {
      activeTasksByEquipmentID() {
        const tasks = this.$store.getters['activeTasksByEquipmentID'](this.equipment.id)
        tasks.forEach(task => {
          if (task.type === '1') {
            const employee = this.$store.getters['getEmployeeById'](task.requestor)
            task.requestor = employee.fname + ' ' + employee.lname
            task.dueBy = parseTime(task.dueBy, '{y}-{m}-{d}')
          }
        })
        return tasks
      }
    },
    data() {
      return {
        input: ''
      }
    },
    props: {
      equipment: Object
    },
    methods: {
      filterTag(value, row) {
        return row.status === value
      },
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      buttonHandler() {
        this.$router.push({ name: 'AddTask', query: { equipmentID: this.equipment.id }})
      },
      handleEdit(id) {
        this.$router.push({ name: 'EditTask', query: { taskID: id }})
      },
      handleDelete(id) {
        this.$store.dispatch('DeleteTask', id)
      }
    }
  }
</script>
<style scoped>
  span {
    display: block;
  }
</style>
