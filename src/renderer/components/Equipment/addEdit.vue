<template>
  <div class="app-container">
    <el-form ref="equipment" :rules="rules" :model="equipment" label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item prop="id" label="UnitID">
            <el-input v-model="equipment.unitId"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item prop="description" label="Description">
        <el-input type="email" v-model="equipment.description"></el-input>
      </el-form-item>
      <el-form-item prop="year" label="Year">
        <el-input v-model="equipment.year"></el-input>
      </el-form-item>
      <el-form-item prop="make" label="Make">
        <el-input v-model="equipment.make"></el-input>
      </el-form-item>
      <el-form-item prop="model" label="Model">
        <el-input v-model="equipment.model"></el-input>
      </el-form-item>
      <el-form-item prop="serialNumber" label="Serial Number">
        <el-input v-model="equipment.serialNumber"></el-input>
      </el-form-item>
      <el-form-item prop="assetType" label="Asset type">
        <el-select v-model="equipment.assetType" placeholder="Please select Asset type">
          <el-option label="SomeAsset" value="active"></el-option>
        </el-select>
      </el-form-item>   
      <el-form-item prop="status" label="Status">
        <el-select v-model="equipment.status" placeholder="Please select Status">
          <el-option label="SomeEnum" value="active"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="checkList" label="Checklist">
        <el-select v-model="equipment.checkList" placeholder="Please select Inspection checklist">
          <el-option label="SomeChecklist" value="active"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="notes" label="Notes">
          <el-input type="textarea" v-model="equipment.notes"></el-input>   
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { equipmentRules } from '../../utils/rules'
  export default {
    data() {
      return {
        rules: equipmentRules
      }
    },
    props: {
      equipment: Object
    },
    methods: {
      onCancel() {
        this.$router.push('/equipment/index')
      },
      onSubmit() {
        this.$refs['equipment'].validate((valid) => {
          if (valid) {
            this.$emit('onSubmit', this.equipment)
            this.$router.push('/equipment/index')
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
    .line{
        text-align: center;
    }
</style>