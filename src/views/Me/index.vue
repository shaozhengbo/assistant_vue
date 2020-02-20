<template>
  <div id="me">
    <el-row>
      <el-col :span="24">
        <mt-cell title="标题文字" icon="more" to="/login" is-link value="去登录"></mt-cell>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Me'
}
</script>

<style scoped>
#me {
  margin-top: 40px;
}
</style>
