<template>
  <div>
    <el-header><br>
      <el-row>
        <el-col :span="6">{{ $t("equipment.title") }}</el-col>
        <el-col :span="10"><el-input :placeholder="$t('equipment.inputText')" v-model="input"></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-search">{{ $t("equipment.button.search") }}</el-button></el-col>
        <el-col :span="4"><el-button type="primary" @click=buttonHandler>{{ $t("equipment.button.new") }}</el-button></el-col>
      </el-row>
    </el-header>
    <el-table
          :data="activeEquipment"
          style="width: 100%">
    <el-table-column
            prop="description"
            :label="$t('equipment.equipment')"
            width="180">
    </el-table-column>
    <el-table-column
            prop="keywords"
            :label="$t('equipment.keywords')">
    </el-table-column>
    <el-table-column
            prop="tasks"
            :label="$t('equipment.tasks')"
            width="100">
    </el-table-column>
   <el-table-column
            :label="$t('equipment.actions')"
            width="250">
      <template slot-scope="scope">
        <el-button-group
                style="width: 100%">
          <el-button type="primary" style="width: 45%" @click="handleEdit(scope.$index)">Edit</el-button>
          <el-button type="danger" style="width: 45%" @click="handleDelete(scope.$index)">Delete</el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    computed: {
      activeEquipment() {
        return this.$store.getters['activeEquipment']()
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
        this.$router.push('/equipment/add')
      },
      handleEdit(id) {
        this.$router.push({ name: 'EditEquipment', query: { equipmentID: id }})
      },
      handleDelete(id) {
        this.$store.dispatch('DeleteEquipment', id)
      }
    }
  }
</script>