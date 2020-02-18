<template>
  <div id="app">
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="./assets/tabbar_index.png" />
      </mt-tab-item>
      <mt-tab-item id="found">
        <img slot="icon" src="./assets/tabbar_found.png" />
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="./assets/tabbar_me.png" />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'index'
    }
  },
  watch: {
    selected: function (newSelected, oldSelected) {
      this.$router.push({ path: newSelected })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
