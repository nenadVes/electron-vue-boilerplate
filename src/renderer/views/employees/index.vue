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
          :data="tableData"
          style="width: 100%">
    <el-table-column
            prop="number"
            :label="$t('employees.number')"
            width="180">
    </el-table-column>
    <el-table-column
            prop="name"
            :label="$t('employees.name')"
            :formatter="nameformatter">
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
            :label="$t('employees.email')"
            :formatter="emailformatter">
    </el-table-column>
    <el-table-column
            prop="labels"
            :label="$t('employees.labels')"
            width="180"
    >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        tableData: [{
          number: 1,
          labels: ['Maintenance', 'EX'],
          name: 'Tom',
          email: 'ilija89@gmail.com',
          status: 'Active'
        }, {
          number: 2,
          labels: ['Maintenance', 'EX'],
          name: 'Tom',
          email: 'ilija89@gmail.com',
          status: 'Active'
        }, {
          number: 3,
          labels: ['Maintenance', 'EX'],
          name: 'Tom',
          email: 'ilija89@gmail.com',
          status: 'Archived'
        }, {
          number: 4,
          labels: ['Maintenance', 'EX'],
          name: 'Tom',
          email: 'ilija89@gmail.com',
          status: 'Active'
        }]
      }
    },
    methods: {
      nameformatter(row, column) {
        return row.name
      },
      emailformatter(row, column) {
        return row.email
      },
      filterTag(value, row) {
        return row.status === value
      },
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      buttonHandler() {
        this.$router.push('/employees/add')
      }
    }
  }
</script>

