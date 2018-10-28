<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="margin: 0px 0px 30px 0px">
        <div class="floatLeft">
          <el-button @click="equipmentShow()"><p>Equipment - {{2}}</p></el-button>
        </div>
          <div class="floatLeft">
            <el-button style="margin-left: 15px" @click="workOrdersShow()"><p>Work orders - {{2}}</p></el-button>
          </div>
      </div>
      <div>
        <a> {{ this.tableTitle }} </a>
      </div>
      <br>
      <el-table
      v-if="this.equipmentShowing"
      :data="tableDataEquipment"
      style="width: 100%">
      <el-table-column
        label="Equipment">
        <template slot-scope="scope">
          <el-dropdown>
            <span style="margin-left: 10px">{{ scope.row.equipment }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>{{1}}</el-dropdown-item>
              <el-dropdown-item>{{2}}</el-dropdown-item>
              <el-dropdown-item>{{3}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column
        label="Tasks">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.task }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
            class="floatRight"
            type="primary" 
            round
            size="mini"
            @click="createWorkOrder()">New WO</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table
      v-else
      :data="tableDataWO"
      style="width: 100%">
      <el-table-column
        label="Number">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>    
        </template>
      </el-table-column>
      <el-table-column
        label="Due">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.due }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
        label="Assignees">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.assignees }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
        label="Equipment">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.equipment }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
        label="Progress">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.progress }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
        label="Status">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.status }}</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row>
        <div class="block">
          <span class="demonstration">Page: </span>
          <el-pagination
            layout="prev, pager, next"
            :page-size="5">
          </el-pagination>
        </div>
      </el-row>
    </el-card>
  </div>
</template>
  

<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      pageNumber: 0,
      currentPage: 1,
      tableTitle: 'Equipment resources',
      equipmentShowing: true,
      tableDataEquipment: [
        {
          equipment: 'Traktor',
          task: 'Due'
        },
        {
          equipment: 'Masinerija',
          task: 'Due'
        }
      ],
      tableDataWO: [
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        },
        {
          number: 'Otici u WC',
          due: 'Petar',
          assignees: 'Otici u WC',
          equipment: 'Petar',
          progress: 'Otici u WC',
          status: 'Petar'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    equipmentShow() {
      this.equipmentShowing = true
      this.tableTitle = 'Equipment resources'
    },
    workOrdersShow() {
      this.equipmentShowing = false
      this.tableTitle = 'Work Orders'
    },
    createWorkOrder() {
      console.log('Creating WO!')
    }
  }
}
</script>

<style>
.border {
  border: 1px black solid;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}

.width35 {
  width: 35%;
}

.floatLeft {
  float: left;
}

.floatRight {
  float: right;
}

a {
  font-size: 12px;
  font-style: normal;
  color: darkgray;
}
</style>