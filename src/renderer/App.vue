<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"></script>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
</style>
