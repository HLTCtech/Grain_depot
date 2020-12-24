<template>
  <div class="quality-wrap">
    <div class="quality-left">
      <h-title class="title">检查统计</h-title>
      <h-frame class="left-content-item">
        该仓房还没有进行过质量检查
      </h-frame>

      <h-title class="title">保管期内作业分析</h-title>
      <h-frame class="left-content-item">
        该仓房还没有进行过分析作业
      </h-frame>
    </div>
    <div class="quality-right">
      <h-frame class="content-item"></h-frame>
      <h-frame class="content-item"></h-frame>
      <div class="title-wrap">
        <h-title class="title">001仓温、粮温、气温最大值趋势图</h-title>
        <div>
          选取时间：<select>
            <option value="六个月">近六个月</option>
            <option value="六个月">近一年</option>
          </select>
        </div>
      </div>
      <h-frame class="content-item three">
        <div style="width:1223px;height:270px" ref="chartthree"></div>
      </h-frame>
    </div>
  </div>
</template>

<script>
import hTitle from "../../../components/h-title.vue";
export default {
  components: { hTitle },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      let myChart = this.$echarts.init(this.$refs.chartthree);
      myChart.setOption({
        title: {
          text: "折线图堆叠",
          textStyle: { color: "#Fff" },
          padding: [0, 0, 0, 20]
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["粮温", "仓温", "气温"],
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            show: true,
            type: "slider",
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0]
          },
          {
            type: "inside"
          }
        ],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#315070"],
              width: 1,
              type: "dotted"
            }
          }
        },
        series: [
          {
            name: "粮温",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "仓温",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "气温",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.quality-wrap {
  display: flex;
}
.quality-left {
  width: 20%;
  margin-right: 20px;
  .left-content-item {
    margin: 20px 0;
    min-height: 200px;
    color: #95d3ff;
  }
}
.quality-right {
  flex: 1;
  .content-item {
    height: 200px;
    margin-bottom: 40px;
    // border: 1px solid #2e8fff;
    // box-sizing: border-box;
    &.three {
      height: 300px;
      padding: 15px 0;
      margin-bottom: 0;
    }
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-size: 22px;
    margin-bottom: 20px;
    select {
      font-size: 20px;
      padding: 5px;
      outline: none;
      background: #00234b;
      color: #fff;
      option {
        padding: 3px 5px;
      }
    }
  }
}
</style>
