<template>
  <div id="overtime" v-loading="loading">
    <!-- 页头 -->
    <el-row>
      <el-col :span="24">
        <el-page-header @back="goBack()" content="加班记录"></el-page-header>
      </el-col>
    </el-row>
    <!-- 数据展示 -->
    <el-row>
      <el-col :span="8">
        <b>共加班</b>
        <br />
        <span style="color: blue">100h</span>
      </el-col>
      <el-col :span="8">
        <b>已用调休</b>
        <br />
        <span style="color: red">50h</span>
      </el-col>
      <el-col :span="8">
        <b>可用调休</b>
        <br />
        <span style="color: green">50h</span>
      </el-col>
    </el-row>
    <!-- 记录 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" height="420" border style="width: 100%;">
          <el-table-column label="日期" align="center">
            <template slot-scope="scope">
              <div class="content-rowspan">
                {{scope.row.year + '-' + scope.row.month + '-' + scope.row.day}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="加班" width="50" align="center"></el-table-column>
          <el-table-column prop="used" label="已用" width="50" align="center"></el-table-column>
          <el-table-column prop="unused" label="可用" width="50" align="center"></el-table-column>
          <el-table-column label="状态" align="center">
            <template slot-scope="scope">
              <div class="content-rowspan">
                {{scope.row.status==0?'可使用':scope.row.status==1?'已使用':scope.row.status==2?'失效':'err'}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 操作按钮 -->
    <el-row>
      <el-col :span="24">
        <el-button type="primary" style="width: 100%;" @click="sheetVisible = true">操作</el-button>
      </el-col>
    </el-row>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { getOvertimeListByUid } from '@/api/overtime'
import NumberGrow from '@/components/NumberGrow'

export default {
  name: 'overtime',
  components: {
    NumberGrow
  },
  data () {
    return {
      uid: 1,
      tableData: [],
      loading: true,
      sheetVisible: false,
      actions: [
        {
          name: '加班',
          method: function () {
            alert('加班')
          }
        },
        {
          name: '串休',
          method: function () {
            alert('串休')
          }
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getTableDate () {
      getOvertimeListByUid(this.uid)
        .then(res => {
          this.tableData = res.data.data
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
    }
  },
  mounted () {
    this.getTableDate()
  }
}
</script>

<style scoped>
#overtime {
  margin-top: 60px;
  height: 100%;
  width: 100%;
}

.el-row {
  margin-top: 10px;
}
</style>
