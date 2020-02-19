<template>
  <div id="found">
    <el-row>
      <el-col :span="7">
        <router-link :to="{name: 'overtime'}" tag="a">
          <el-card :body-style="{ padding: '10px' }">
            <img src="../../assets/found_overtime.png" class="image" width="50rem" height="50rem" />
            <div style="padding-top: 10px;">
              <span>加班记录</span>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Found',
  data () {
    return {
      inIndex: true
    }
  },
  methods: {
    toChildrenPage (path) {
      this.inIndex = false
      this.$router.push({ path: path }).catch(err => {
        this.inIndex = true
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#found {
  margin-top: 60px;
  width: 100%;
}
</style>
