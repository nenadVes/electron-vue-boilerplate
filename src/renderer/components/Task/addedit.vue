<template>
  <div class="app-container">
    <el-form ref="task" :rules="rules" :model="task" label-width="120px">
      <el-form-item prop="name" :label="$t('task.name')">
        <el-input v-model="task.name"></el-input>
      </el-form-item>
      <el-form-item prop="status" :label="$t('task.type')">
        <el-tooltip :content="'Switch value: ' + task.type" placement="top">
        <el-switch
                v-model="task.type"
                active-text="Preventive maintenance task"
                inactive-text="Repair request"
                inactive-color="#ff4949"
                inactive-value="1"
                active-value="2">
        </el-switch>
        </el-tooltip>
      </el-form-item>
      <template v-if="task.type === '1'">
        <el-header>
          <el-row>
            <el-col :span="6">{{ $t("task.repairTitle") }}</el-col>
          </el-row>
        </el-header>
        <el-form-item prop="dueBy" :label="$t('task.dueBy')">
          <el-date-picker
                  v-model="task.dueBy"
                  type="date"
                  placeholder="Pick a day">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="requestor" :label="$t('task.requestor')">
          <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="Please Input"
                  value-key="name"
                  @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item prop="priority" :label="$t('task.priority')">
          <el-select v-model="task.priority" :placeholder="$t('task.placeholder.priority')">
            <el-option label="High" value="High"></el-option>
            <el-option label="Medium" value="Medium"></el-option>
            <el-option label="Low" value="Low"></el-option>
          </el-select>
        </el-form-item>
      </template>
      <template v-else>
        <el-header>
          <el-row>
            <el-col :span="6">{{ $t("task.preventTitle") }}</el-col>
          </el-row>
        </el-header>
        <el-form-item prop="dueEvery" :label="$t('task.dueEvery')">
          <el-input placeholder="Please input" v-model="task.dueEvery">
            <template slot="append">days</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="advanceNotice" :label="$t('task.advanceNotice')">
          <el-input placeholder="Please input" v-model="task.advanceNotice">
            <template slot="append">days</template>
          </el-input>
        </el-form-item>
      </template>
      <el-header>
        <el-row>
          <el-col :span="6">{{ $t("task.additionalTitle") }}</el-col>
        </el-row>
      </el-header>
      <el-form-item prop="expectedLabor" :label="$t('task.expectedLabor')">
        <el-input v-model="task.expectedLabor"><template slot="prepend">hours</template></el-input>
      </el-form-item>
      <el-form-item prop="notes" :label="$t('task.notes')">
        <el-input type="textarea" v-model="task.notes"></el-input>
      </el-form-item>
      <el-form-item prop="labels" :label="$t('task.labels')">
        <el-select
                v-model="task.labels"
                multiple
                filterable
                allow-create
                default-first-option
                :placeholder="$t('task.placeholder.labels')">
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button v-if="['EditTask'].indexOf(this.$route.name) > -1" type="primary" @click="onSubmit">{{ $t("task.button.update") }}</el-button>
        <el-button v-else type="primary" @click="onSubmit">{{ $t("task.button.create") }}</el-button>
        <el-button @click="onCancel">{{ $t("task.button.cancel") }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { taskRules } from '../../utils/rules'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getEquipmentById',
        'activeEmployees'
      ]),
      employees() {
        return this.$store.getters['activeEmployees']()
      }
    },
    data() {
      return {
        rules: taskRules,
        equipment: {},
        state1: ''
      }
    },
    props: {
      task: Object
    },
    methods: {
      onCancel() {
        this.$emit('onCancel')
      },
      onSubmit() {
        this.$refs['task'].validate((valid) => {
          if (valid) {
            this.task.equipment = this.equipment.id
            this.$emit('onSubmit', this.task)
          } else {
            return false
          }
        })
      },
      querySearch(queryString, cb) {
        const employees = this.employees
        const results = queryString ? employees.filter(this.createFilter(queryString)) : employees
        const filteredResults = []
        results.forEach(function(employee) {
          employee.name = employee.fname + ' ' + employee.lname
          filteredResults.push(employee)
        })
        // call callback function to return suggestions
        cb(filteredResults)
      },
      createFilter(queryString) {
        return (employee) => {
          return (employee.fname.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect(item) {
        this.task.requestor = item.id
      }
    },
    mounted() {
      if ('equipmentID' in this.$route.query) {
        this.equipment = this.getEquipmentById(this.$route.query.equipmentID)
      }
    }
  }
</script>

<style scoped>
    .line{
        text-align: center;
    }
</style>
