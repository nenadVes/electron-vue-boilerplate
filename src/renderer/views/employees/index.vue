<template>
  <div>
    <el-header><br>
      <el-row>
        <el-col :span="6">{{ $t("employees.title") }}</el-col>
        <el-col :span="10"><el-input :placeholder="$t('employees.inputtext')" v-model="input"></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-search">{{ $t("employees.buttonsearch") }}</el-button></el-col>
        <el-col :span="4"><el-button type="primary" @click=buttonHandler>{{ $t("employees.buttonnew") }}</el-button></el-col>
      </el-row>
    </el-header>
  <el-table
          :data="activeEmployees"
          style="width: 100%">
    <el-table-column
            prop="number"
            :label="$t('employees.number')"
            width="180">
    </el-table-column>
    <el-table-column
            prop="fname"
            :label="$t('employees.fname')">
    </el-table-column>
    <el-table-column
            prop="lname"
            :label="$t('employees.lname')">
    </el-table-column>
    <el-table-column
            prop="status"
            :label="$t('employees.status')"
            width="100"
            :filters="[{ text: 'Active', value: 'Active' }, { text: 'Archived', value: 'Archived' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
                :type="scope.row.status === 'Active' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.status}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
            prop="email"
            :label="$t('employees.email')">
    </el-table-column>
    <el-table-column
            prop="keywords"
            :label="$t('employees.labels')"
            width="180"
    >
    </el-table-column>
    <el-table-column
            :label="$t('employees.actions')"
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
      activeEmployees() {
        return this.$store.getters['activeEmployees']()
      }
    },
    data() {
      return {
        input: ''
      }
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
        this.$router.push('/employees/add')
      },
      handleEdit(id) {
        this.$router.push({ name: 'EditEmployee', query: { employeeID: id }})
      },
      handleDelete(id) {
        this.$store.dispatch('DeleteEmployee', id)
      }
    }
  }
</script>

