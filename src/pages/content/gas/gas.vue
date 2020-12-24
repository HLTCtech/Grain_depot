<template>
  <div class="gas-wrap">
    <div class="top-info">
      <h-title class="title">001气体浓度检测结果</h-title>
      <div class="contral">
        <div class="left">←</div>
        <div class="time">作业时间：<span>2020-05-08 08:11:13</span></div>
        <div class="right">→</div>
      </div>
    </div>
    <div class="result">
      <div class="result-item">
        <div class="result-title">氧气浓度</div>
        <div class="result-content">
          <div class="result-name">O<span>2</span></div>
          <div class="result-value">23%</div>
        </div>
      </div>
      <div class="result-item">
        <div class="result-title">氮气浓度</div>
        <div class="result-content">
          <div class="result-name">N<span>2</span></div>
          <div class="result-value">33%</div>
        </div>
      </div>
      <div class="result-item">
        <div class="result-title">二氧化碳浓度</div>
        <div class="result-content">
          <div class="result-name">CO<span>2</span></div>
          <div class="result-value">14%</div>
        </div>
      </div>
      <div class="result-item">
        <div class="result-title">酸碱度浓度</div>
        <div class="result-content">
          <div class="result-name">PH<span>2</span></div>
          <div class="result-value">23%</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <h-title class="title">安全作业检测</h-title>
        <h-frame class="value"></h-frame>
      </div>
      <div class="content-center">
        <h-title>001气体浓度走势图</h-title>
        <h-frame class="value">
          <div style="width:725px;height:395px" ref="chart"></div>
        </h-frame>
      </div>
      <div class="content-right">
        <h-title>最近一次熏蒸作业</h-title>
        <h-frame class="value">该仓库还没有进行过熏蒸作业</h-frame>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      let myChart = this.$echarts.init(this.$refs.chart);
      myChart.setOption({
        title: {
          text: "001气体浓度走势图",
          textStyle: { color: "#Fff" },
          padding: [0, 0, 0, 20]
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["氧气", "氮气", "二氧化碳"],
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
            name: "氧气",
            type: "line",
            stack: "总量",
            data: [13, 23, 21, 13, 15, 18, 32]
          },
          {
            name: "氮气",
            type: "line",
            stack: "总量",
            data: [22, 21, 23, 13, 23, 32, 23]
          },
          {
            name: "二氧化碳",
            type: "line",
            stack: "总量",
            data: [24, 32, 12, 33, 12, 23, 32]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top-info {
  display: flex;
  align-items: center;
  .title {
    width: 700px;
  }
  .contral {
    flex: 1;
    display: flex;
    padding: 0 50px;
    margin-left: 20px;
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
}
.result {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  .result-item {
    width: 24%;
    height: 160px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &:nth-child(1) {
      background: rgba(18, 164, 237, 0.3);
    }
    &:nth-child(2) {
      background: rgba(70, 126, 239, 0.3);
    }
    &:nth-child(3) {
      background: rgba(59, 142, 236, 0.3);
    }
    &:nth-child(4) {
      background: rgba(63, 168, 197, 0.3);
    }
    .result-title {
      line-height: 40px;
      padding: 0 20px;
      font-size: 20px;
      background: rgba($color: #fff, $alpha: 0.1);
    }
    .result-content {
      display: flex;
      flex: 1;
      padding: 0 20px;
      justify-content: space-around;
      align-items: center;
      .result-name {
        width: 80px;
        height: 80px;
        text-align: center;
        flex-shrink: 0;
        line-height: 80px;
        border-radius: 50%;
        background: rgba($color: #000000, $alpha: 0.1);
        font-size: 40px;
        span {
          font-size: 20px;
        }
      }
      .result-value {
        font-size: 48px;
      }
    }
  }
}
.content {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  .content-left {
    width: 350px;
    .value {
      margin-top: 40px;
      min-height: 200px;
      color: #95d3ff;
    }
  }
  .content-center {
    width: 750px;
    .value {
      margin-top: 40px;
      height: 400px;
    }
  }
  .content-right {
    width: 350px;
    .value {
      color: #95d3ff;
      margin-top: 40px;
      min-height: 200px;
    }
  }
}
</style>
