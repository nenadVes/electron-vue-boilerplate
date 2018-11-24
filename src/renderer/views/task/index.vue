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
            prop="status"
            :label="$t('task.status')">
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Due by:</b> {{scope.row.dueBy}}</span>
        <span v-else><b>Recurring every:</b> {{scope.row.dueEvery}} days</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Priority:</b> {{scope.row.priority}}</span>
        <span v-else><b>Advance notice:</b> {{scope.row.advanceNotice}}</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'"><b>Requested by:</b> {{scope.row.requestor}}</span>
        <span v-else><b>Last performed on:</b> <span v-if="scope.row.lastPerformed != ''">{{scope.row.lastPerformed}}</span><span v-else>Never</span></span>
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
  export default {
    computed: {
      activeTasksByEquipmentID() {
        return this.$store.getters['activeTasksByEquipmentID'](this.equipment.id)
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
