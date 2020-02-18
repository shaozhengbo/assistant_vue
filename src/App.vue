<template>
  <div id="app">
    <mt-header fixed :title="title"></mt-header>
    <keep-alive>
      <router-view />
    </keep-alive>
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
      selected: 'index',
      title: '首页'
    }
  },
  watch: {
    selected: function (newSelected, oldSelected) {
      this.$router.push({ path: newSelected })
      if (newSelected === 'index') {
        this.title = '首页'
      } else if (newSelected === 'found') {
        this.title = '发现'
      } else if (newSelected === 'me') {
        this.title = '我的'
      }
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
