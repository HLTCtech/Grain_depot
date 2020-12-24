<template>
  <div class="wrap-food">
    <div class="food-left">
      <!-- <div class="title">粮情分析</div> -->
      <h-title class="title">粮情分析</h-title>

      <h-frame class="left-content-item">
        近一个月共发生高温预警次数0次，点温度上升过快预警0次
      </h-frame>
      <h-frame class="left-content-item">本年度累计通风次数0</h-frame>
    </div>
    <div class="food-center">
      <div class="contral">
        <div class="left">←</div>
        <div class="time">检测时间：<span>2020-05-08 08:11:13</span></div>
        <div class="right">→</div>
      </div>
      <h-frame class="content">
        <div class="center-item">
          <div class="cicyle">18.5℃</div>
          <div class="desc">
            粮温正常<br />
            平均温度为18.5℃
          </div>
        </div>
        <div class="center-item">
          <div
            class="desc"
            style="margin-left: 0;
          margin-right: -30px;"
          >
            最高温度为24℃<br />
            超过25℃点（储量害虫活动适宜温区的温度点）0个
          </div>
          <div class="cicyle">24.0℃</div>
        </div>
        <div class="center-item">
          <div class="cicyle">9.57℃</div>
          <div class="desc">
            4、5层的平均温差最大，差值为9.57℃未超过预警值<br />
            不存在风险
          </div>
        </div>
      </h-frame>
    </div>
    <div class="food-right">
      <h-title class="title">
        温湿度检测<br />
        检测日期：2020-05-08 08:11:13
      </h-title>
      <div class="gauge">
        <div class="gauge-item">
          <div class="gauge-title">外温</div>
          <div class="gauge-content">
            <div style="width:250px;height:180px" ref="chartOut"></div>
          </div>
        </div>
        <div class="gauge-item">
          <div class="gauge-title">外湿</div>
          <el-progress
            type="circle"
            :percentage="25"
            :width="150"
            style="margin-top:20px"
          ></el-progress>
        </div>
        <div class="gauge-item">
          <div class="gauge-title">仓温</div>
          <div style="width:250px;height:180px" ref="chartInset"></div>
        </div>
        <div class="gauge-item">
          <div class="gauge-title">仓湿</div>
          <el-progress
            type="circle"
            :percentage="95"
            :width="150"
            style="margin-top:20px;"
          ></el-progress>
        </div>
      </div>
      <h-frame class="table-wrap">
        <table class="table">
          <tr>
            <td>值</td>
            <td>室温</td>
            <td>第一层</td>
            <td>第二层</td>
            <td>第三层</td>
            <td>第四层</td>
          </tr>
          <tr>
            <td>平均值</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
          <tr>
            <td>最高温</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
          <tr>
            <td>最低温</td>
            <td>室温</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
          <tr>
            <td>第五层</td>
            <td>第六层</td>
            <td>第七层</td>
          </tr>
          <tr>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
          <tr>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
          <tr>
            <td>25.36</td>
            <td>25.36</td>
            <td>25.36</td>
          </tr>
        </table>
      </h-frame>
    </div>
  </div>
</template>

<script>
import hFrame from "../../../components/h-frame.vue";
export default {
  components: { hFrame },
  mounted() {
    this.drawGauge(this.$refs.chartOut, 28.3);
    this.drawGauge(this.$refs.chartInset, 25.6);
  },
  methods: {
    drawGauge(dom, value) {
      console.log(this.$echarts);
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}℃"
        },
        // toolbox: {
        //   feature: {
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        series: [
          {
            name: "外温",
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 10 // 这个是修改宽度的属性
              }
            },
            splitLine: {
              // 分隔线
              show: false, // 默认显示，属性show控制显示与否
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                // color: '#eee',
                width: 10,
                type: "solid"
              }
            },
            detail: {
              formatter: "{value}℃",
              textStyle: { fontSize: 28, color: "#fff" }
            },
            data: [{ value: value }]
          }
        ]
      });
    }
  }
};
</script>

<style scoped lang="scss">
.wrap-food {
  display: flex;
  justify-content: space-between;
}
.food-left {
  width: 20%;
  .title {
  }
  .left-content-item {
    color: #95d3ff;
    margin-top: 20px;
    min-height: 200px;
  }
}
.food-center {
  width: 40%;
  .contral {
    display: flex;
    .left,
    .right {
      border: 1px solid rgb(46, 143, 255);
      color: rgb(46, 143, 255);
      padding: 0 10px;
      font-size: 28px;
      cursor: pointer;
    }
    .time {
      flex: 1;
      text-align: center;
      font-size: 28px;
      color: #62bffb;
      span {
        color: #23a4fe;
        background: rgba($color: #23a4fe, $alpha: 0.2);
        padding: 5px;
        font-size: 20px;
      }
    }
  }
  .content {
    margin-top: 40px;
    // border: 1px solid rgb(46, 143, 255);
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .center-item {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 40px;
      // &:nth-child(2) {
      //   .desc {
      //     margin-left: 0;
      //     margin-right: -30px;
      //   }
      // }
      .cicyle {
        flex-shrink: 0;
        width: 140px;
        height: 140px;
        border: 7px solid #004c81;
        border-radius: 50%;
        text-align: center;
        line-height: 126px;
        font-size: 36px;
        background-image: radial-gradient(#47d7f3, #1032a3);
        z-index: 2;
        box-sizing: border-box;
      }
      .desc {
        width: 100%;
        height: 100px;
        background: #004c81;
        border-radius: 20px;
        margin-left: -45px;
        padding: 0 45px;
        display: flex;
        align-items: center;
        color: #c5d8ff;
        font-size: 20px;
      }
    }
  }
}
.food-right {
  width: 35%;
  .title {
    // line-height: 36px;
    // background: rgba(255, 255, 255, 0.2);
    // padding: 10px;
    // font-size: 20px;
  }
  .gauge {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .gauge-item {
      height: 210px;
      width: 48%;
      background: #04112d;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .gauge-title {
        width: 60%;
        line-height: 40px;
        text-align: center;
        background: #004c81;
        height: 40px;
        margin-top: -20px;
        flex-shrink: 0;
        font-size: 22px;
      }
      & >>> .el-progress__text {
        font-size: 32px !important;
      }
    }
  }
  .table-wrap {
    // border: 1px solid rgb(46, 143, 255);
    margin-top: 20px;
    padding: 10px;
    .table {
      width: 100%;
      text-align: center;
      line-height: 38px;
      font-size: 20px;
      color: #95d3ff;
      border-collapse: collapse;
      td {
        border: 1px solid rgb(58, 70, 109);
      }
    }
  }
}
</style>
