<template>
  <div class="quality-wrap">
    <div class="quality-left">
      <h-title class="title">通风分析</h-title>
      <h-frame class="left-content-item">
        本年度内通风次数为0
      </h-frame>
    </div>
    <div class="quality-right">
      <!-- <h-frame class="content-item"></h-frame> -->
      <div class="right-top">
        <div class="button">
          <div id="particles-inte"></div>
          <img class="feng" src="./img.png" alt="" />
        </div>
        <div class="contral">
          <div class="left">←</div>
          <div class="time">检测时间：<span>2020-05-08 08:11:13</span></div>
          <div class="right">→</div>
        </div>
      </div>
      <h-frame class="content-item detail">
        <div
          class="detail-item"
          v-for="(item, index) in detailData"
          :key="index"
        >
          <div class="detail-label">{{ item.name }}：</div>
          <div class="detail-value">232131234</div>
        </div>
      </h-frame>
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
import particlesJs from "particles.js";
export default {
  components: { hTitle },
  props: {
    thisIndex: String
  },
  data() {
    return {
      detailData: [
        {
          name: "通风编号",
          value: ""
        },
        {
          name: "通风时粮温",
          value: ""
        },
        {
          name: "通风时仓温",
          value: ""
        },
        {
          name: "开始时间",
          value: ""
        },
        {
          name: "通风时长",
          value: ""
        },
        {
          name: "通风目的",
          value: ""
        },
        {
          name: "通风后粮温",
          value: ""
        },
        {
          name: "通风后仓温",
          value: ""
        },
        {
          name: "结束时间",
          value: ""
        },
        {
          name: "通风能耗",
          value: ""
        },
        {
          name: "通风设备",
          value: ""
        },
        {
          name: "通风负责人",
          value: ""
        }
      ]
    };
  },
  mounted() {
    this.draw();
  },
  watch: {
    thisIndex(newVal) {
      console.log(newVal);
      if (newVal === "智能通风") {
        this.drawBack();
      }
    }
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
    },
    drawBack() {
      particlesJS("particles-inte", {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#add3ff"
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 2,
            direction: "right"
          }
        }
        // interactivity: {
        //   events: {
        //     onclick: {
        //       enable: true,
        //       mode: "bubble"
        //     }
        //   }
        // }
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
    min-height: 400px;
    color: #95d3ff;
  }
}
.quality-right {
  flex: 1;
  .right-top {
    display: flex;
    align-items: center;
    .button {
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      background: rgba(0, 76, 129, 0.4);
      padding: 0 20px;
      border-left: 2px solid #23a4fe;
      border-right: 2px solid #23a4fe;
      position: relative;
      #particles-inte {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
      }
      .feng {
        width: 60px;
        @keyframes rotation {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        transform: rotate(360deg);
        animation: rotation 3s linear infinite;
      }
    }
    .contral {
      flex: 1;
      display: flex;
      padding: 0 50px;
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
  .content-item {
    margin-top: 40px;
    // height: 200px;
    margin-bottom: 20px;
    // border: 1px solid #2e8fff;
    // box-sizing: border-box;
    &.three {
      height: 300px;
      padding: 15px 0;
    }
    &.detail {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .detail-item {
        margin: 10px 0;
        display: flex;
        .detail-label {
          width: 120px;
        }
        .detail-value {
          width: 200px;
          background: #004c81;
          padding: 0 10px;
        }
      }
    }
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-size: 22px;
    margin: 10px 0;
    margin-top: 40px;
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
