<template>
  <div id="overtime">
    <!-- 页头 -->
    <el-row>
      <el-col :span="24">
        <el-page-header @back="goBack()" content="加班记录"></el-page-header>
      </el-col>
    </el-row>
    <!-- 分割线 -->
    <el-row>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <!-- 操作按钮 -->
    <el-row>
      <el-col :span="7">
        <el-button icon="el-icon-edit" type="primary" size="small" style="width: 100%;">创建记录</el-button>
      </el-col>
    </el-row>
    <!-- 记录 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" height="450" border style="width: 100%;">
          <el-table-column prop="date" label="日期" align="center"></el-table-column>
          <el-table-column prop="time" label="小时数" width="70" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" width="100" align="center"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'overtime',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.$axios.get('/api/getOvertimeList').then(res => {
      this.tableData = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
#overtime {
  height: 100%;
  width: 100%;
}
</style>
