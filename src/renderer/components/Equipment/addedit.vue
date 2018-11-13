<template>
  <div class="app-container">
    <el-form ref="equipment" :rules="rules" :model="equipment" label-width="120px">
      <el-form-item prop="description" :label="$t('equipment.description')">
        <el-input v-model="equipment.description"></el-input>
      </el-form-item>
      <el-form-item prop="year" :label="$t('equipment.year')">
        <el-input v-model="equipment.year"></el-input>
      </el-form-item>
      <el-form-item prop="make" :label="$t('equipment.make')">
        <el-input v-model="equipment.make"></el-input>
      </el-form-item>
      <el-form-item prop="model" :label="$t('equipment.model')">
        <el-input v-model="equipment.model"></el-input>
      </el-form-item>
      <el-form-item prop="serialNumber" :label="$t('equipment.serialNumber')">
        <el-input v-model="equipment.serialNumber"></el-input>
      </el-form-item>
      <el-form-item prop="assetType" :label="$t('equipment.assetType')">
        <el-select v-model="equipment.assetType" :placeholder="$t('equipment.placeholder.assetType')">
          <el-option label="SomeAsset" value="active"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="status" :label="$t('equipment.status')">
        <el-select v-model="equipment.status" :placeholder="$t('equipment.placeholder.status')">
          <el-option label="SomeEnum" value="active"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="checkList" :label="$t('equipment.checklist')">
        <el-select v-model="equipment.checkList" :placeholder="$t('equipment.placeholder.checklist')">
          <el-option label="SomeChecklist" value="active"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="labels" :label="$t('equipment.labels')">
        <el-select
                v-model="equipment.keywords"
                multiple
                filterable
                allow-create
                default-first-option
                :placeholder="$t('equipment.placeholder.labels')">
        </el-select>
      </el-form-item>
      <el-form-item prop="notes" :label="$t('equipment.notes')">
          <el-input type="textarea" v-model="equipment.notes"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="['EditEquipment'].indexOf(this.$route.name) > -1" type="primary" @click="onSubmit">{{ $t("equipment.button.update") }}</el-button>
        <el-button v-else type="primary" @click="onSubmit">{{ $t("equipment.button.create") }}</el-button>
        <el-button @click="onCancel">{{ $t("equipment.button.cancel") }}</el-button>
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
