<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ $t('controlPanel.title') }}</div>

    <el-row>
      <el-button @click="createAndDownloadBackup" type="primary">{{ $t('controlPanel.backupDb') }}</el-button>
    </el-row>
    <el-row>
      <el-upload
        class="upload-demo"
        drag
        :before-upload="handlePreview"
        action="https://example.com">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </el-upload>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { shell, remote } from 'electron'
import path from 'path'

import fs from 'fs'
export default {
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
    createAndDownloadBackup() {
      const fileContents = JSON.stringify(this.$store.getters['employees'])
      fs.writeFile(path.join(remote.app.getPath('userData'), '/backup.json'), fileContents, 'utf8', function(err) {
        if (err) {
          return console.log(err)
        }
        shell.openItem(remote.app.getPath('userData'))
      })
    },
    handlePreview(file) {
      console.log(JSON.parse(fs.readFileSync(file.path, 'utf-8')))
      return false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
