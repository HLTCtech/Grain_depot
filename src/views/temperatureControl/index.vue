<template>
  <el-container>
    <!--    主体-->
    <!--    左侧仓库导航-->
    <el-aside width="100px">
      <div class="choose-Warehouse">
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">1</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">2</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">3</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">4</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">5</span>
        </div>
        <div class="warehouse-wrap active">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">6</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">7</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">8</span>
        </div>
        <div class="warehouse-wrap">
          <img class="warehouse-img" src="@/assets/images/气温图.png" width="50" height="50" alt="">
          <span class="warehouse-num">9</span>
        </div>
      </div>
    </el-aside>
    <!--    右侧内容-->
    <el-main>
      <!--      头部数据-->
      <div class="data_head">
        <el-row class="data-info">
          <el-col :span="4">
            <span class="info-title">仓型:</span>
            <span class="info-show">平房仓</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">品种：</span>
            <span class="info-show">混合小麦</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">年限：</span>
            <span class="info-show">2016</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">数量：</span>
            <span class="info-show">0.100吨</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">水分：</span>
            <span class="info-show">%</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">水分：</span>
            <span class="info-show">%</span>
          </el-col>
        </el-row>
        <el-row class="data-info">
          <el-col :span="4">
            <span class="info-title">虫害情况：</span>
            <span class="info-show">暂无</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">O2浓度：</span>
            <span class="info-show">1.0%</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">CO2浓度：</span>
            <span class="info-show">0.2%</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">N2浓度：</span>
            <span class="info-show">0.2%</span>
          </el-col>
          <el-col :span="4">
            <span class="info-title">PH浓度</span>
            <span class="info-show">0.2%</span>
          </el-col>
          <el-col :span="4">
            <div class="look-more">查看更多</div>
          </el-col>
        </el-row>
        <el-row class="model-show">
          <span>3D展示</span><span>历史记录</span>
        </el-row>
      </div>
      <!--      核心内容-->
      <div class="info-content">
        <!--        左侧仓库温度展示模块-->
        <div class="temperature-model">
          <div class="temperature-info">
            <table>
              <thead>
              <tr>
                <th>检测时间</th>
                <th>外温</th>
                <th>外湿</th>
                <th>仓温</th>
                <th>仓湿</th>
                <th>粮温</th>
                <th>最大值</th>
                <th>最小值</th>
                <th>状态</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2020-06-28 08:00:00</td>
                <td>28.3</td>
                <td>16.5</td>
                <td>16.5</td>
                <td>16.5</td>
                <td>16.5</td>
                <td>16.5</td>
                <td>16.5</td>
                <td>正常</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="temperature-chart">
            <div class="tips-model">
              <div class="tips-item">
                <span class="color_block Warning"></span>
                <span class="tips-title">异常温</span>
              </div>
              <div class="tips-item">
                <span class="color_block Danger"></span>
                <span class="tips-title">最高温</span>
              </div>
              <div class="tips-item">
                <span class="color_block Cold"></span>
                <span class="tips-title">最低温</span>
              </div>
            </div>
            <div class="data-details">
              <span class="data-details-info">
              <div>当前层</div>
              <div>{{CurrentLayerData.live}}</div>
            </span>
              <span class="data-details-info">
              <div>层高温</div>
              <div>{{CurrentLayerData.highest}}</div>
            </span>
              <span class="data-details-info">
              <div>层低温</div>
              <div>{{CurrentLayerData.minimum}}</div>
            </span>
              <span class="data-details-info">
              <div>层均温</div>
              <div>{{CurrentLayerData.average}}</div>
            </span>
            </div>
          </div>
          <div class="choose-wrap">
            <!--            左侧选择层-->
            <div class="choose-hierarchy">
              <el-button type="primary" @click="getTemList">第一层</el-button>
              <el-button type="primary" @click="reverse">第二层</el-button>
              <el-button type="primary" @click="reverse1">第三层</el-button>
              <el-button type="primary" @click="reverse2">第四层</el-button>
            </div>
            <div class="hierarchy-info">
              <div class="hierarchy-box">
                <div>第1行</div>
                <div>第2行</div>
                <div>第3行</div>
                <div>第4行</div>
              </div>
              <div class="temperature-data">
                <div class="temperature-inline" style="margin-left: 60px">
                  <span v-for="(item,index) in TemList" :key="index" class="temperature-color"
                        :class="item>15?'Danger':(item<10?'Color':'Warning')">{{ item }}</span>
                </div>
                <div class="temperature-inline" style="margin-left: 40px">
                  <span v-for="(item,index) in TemList1" :key="index" class="temperature-color"
                        :class="item>15?'Danger':(item<10?'Color':'Warning')">{{ item }}</span>
                </div>
                <div class="temperature-inline" style="margin-left: 20px">
                  <span v-for="(item,index) in TemList2" :key="index" class="temperature-color"
                        :class="item>15?'Danger':(item<10?'Color':'Warning')">{{ item }}</span>
                </div>
                <div class="temperature-inline">
                  <span v-for="(item,index) in TemList3" :key="index" class="temperature-color"
                        :class="item>15?'Danger':(item<10?'Color':'Warning')">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        右侧图表展示模块-->
        <div class="echarts-wrap">
          <div id="chartBar" style="width: 100%; height: 400px;"></div>
          <div id="chartColumn" style="width: 100%; height: 400px;"></div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import echarts from 'echarts'

export default {
  name: "index",
  data() {
    return {
      chartColumn: null,
      chartBar: null,
      TemList: ['15.6', '13.2', '14.6', '17.8', '8.5', '5.3', '20.5'],
      TemList1: ['14', '13.2', '16.6', '17.8', '18.5', '15.3', '0.5'],
      TemList2: ['14', '13.2', '16.6', '17.8', '15.5', '13.3', '10.5'],
      TemList3: ['17', '13.4', '15', '19.8', '22.5', '5.3', '9.5'],
      CurrentLayerData: {
        live: '1',
        highest: '0',
        minimum: '0',
        average: '0'
      }
    }
  },
  mounted() {
    this.drawShape();
    this.Calculation(this.TemList);
  },
  methods: {
    drawShape() {
      this.chartColumn = echarts.init(document.getElementById('chartColumn'));
      this.chartBar = echarts.init(document.getElementById('chartBar'));

      this.chartColumn.setOption({
        title: {text: 'Column Chart'},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      });

      this.chartBar.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    },
    //获取第几层的温度列表
    getTemList() {
      let numbers = [];
      while (true) {
        // 生成随机数
        var n = this.randomNumber(1, 20);

        // 判断是否存在: 不存在返回-1
        var value = numbers.indexOf(n);

        // 存入
        if (value == -1) {
          numbers.push(n);
        }
        // 想什么时候跳出循环
        if (numbers.length == 7) break;
        this.TemList = numbers;
      }
      this.CurrentLayerData.live = "1"
      this.Calculation(this.TemList);
    },
    randomNumber(a = 1, b = 20) {
      // 这两个函数会做个类型转换, 假如含有其他字符,返回的是NaN
      var max = Math.max(a, b);
      var min = Math.min(a, b);
      if (isNaN(max)) throw "参数不规范!";
      return (Math.random() * (max - min + 1) + min).toFixed(2);
    },
    reverse() {
      let numbers = [];
      while (true) {
        // 生成随机数
        var n = this.randomNumber(1, 20);

        // 判断是否存在: 不存在返回-1
        var value = numbers.indexOf(n);

        // 存入
        if (value == -1) {
          numbers.push(n);
        }
        // 想什么时候跳出循环
        if (numbers.length == 7) break;
        this.TemList1 = numbers;
      }
      this.CurrentLayerData.live = "2"
      this.Calculation(this.TemList1);
    },
    reverse1() {
      let numbers = [];
      while (true) {
        // 生成随机数
        var n = this.randomNumber(1, 20);

        // 判断是否存在: 不存在返回-1
        var value = numbers.indexOf(n);

        // 存入
        if (value == -1) {
          numbers.push(n);
        }
        // 想什么时候跳出循环
        if (numbers.length == 7) break;
        this.TemList2 = numbers;
      }
      this.CurrentLayerData.live = "3"
      this.Calculation(this.TemList2);
    },
    reverse2() {
      let numbers = [];
      while (true) {
        // 生成随机数
        var n = this.randomNumber(1, 20);

        // 判断是否存在: 不存在返回-1
        var value = numbers.indexOf(n);

        // 存入
        if (value == -1) {
          numbers.push(n);
        }
        // 想什么时候跳出循环
        if (numbers.length == 7) break;
        this.TemList3 = numbers;
      }
      this.CurrentLayerData.live = "4"
      this.Calculation(this.TemList3);
    },
    //计算当前层数据
    Calculation(array) {
      //最高温
      let MaxValue = Math.max.apply(null, array);//最大值
      //最低温
      let MinValue = Math.min.apply(null, array);//最小值
      //平均温
      let AVG = ((eval(array.join("+")) / array.length * 100) / 100).toFixed(2)  //平均值
      this.CurrentLayerData.highest = MaxValue;
      this.CurrentLayerData.minimum = MinValue;
      this.CurrentLayerData.average = AVG;

    }
  }
}
</script>

<style scoped>
.info-title {
  background: #00C1DE;
  color: white;
  width: 49%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  border: 1px solid #00C1DE;
}

.info-show {
  width: 48%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  border: 1px solid #eeeeee;
}

.look-more {
  display: inline-block;
  text-align: center;
  line-height: 30px;
  border: 1px solid #00C1DE;
  background: #00C1DE;
  color: white;
  width: 100%;
  cursor: pointer;
}

.data-info ~ .data-info {
  margin-top: 5px;
}

.choose-Warehouse {
  background: #00C1DE;
  min-height: 800px;
  color: white;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.warehouse-wrap {
  position: relative;
  width: 100%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 70px;
  cursor: pointer;
}

.active {
  background: #2a6496;
}

.warehouse-num {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 10px;
}

.warehouse-img {
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 50px;
}

.model-show {
  text-align: center;
  margin-top: 10px;
}

.model-show span {
  background: #00C1DE;
  color: white;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  border: 1px solid #00C1DE;
  width: 100px;
  cursor: pointer;
}

.model-show span ~ span {
  margin-left: 10px;
}

.info-content {
  display: flex;
  display: -webkit-flex;
  margin-top: 15px;
}

.temperature-model {
  flex: 3;
  min-height: 400px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 10px 20px;
  margin-right: 10px;
}

.echarts-wrap {
  padding: 10px 15px;
  flex: 1;
  border: 1px solid #eeeeee;
  border-radius: 10px;
}

.temperature-info {

}

.temperature-info table {
  width: 100%;
  text-align: center;
  border: 1px solid #eeeeee;
}

.temperature-info table th {
  background-color: #f7f8fa;
  line-height: 20px;
  padding: 10px 12px;
  font-weight: 500;
}

.temperature-info table td {
  line-height: 20px;
  padding: 5px 10px;
}

.tips-model {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.tips-item {

}

.temperature-chart {
  margin-top: 40px;
  margin-bottom: 15px;
}

.color_block {
  display: inline-block;
  width: 80px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}

.tips-title {
  display: inline-block;
  width: 80px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}

.Danger {
  background: #F56C6C !important;
}

.Warning {
  background: #E6A23C !important;
}

.Cold {
  background: #409EFF !important;
}

.data-details {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.data-details-info {
  width: 120px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #eeeeee;
}

.data-details-info div {
  height: 30px;
  line-height: 30px;
}

.data-details-info div:first-child {
  background: #f7f8fa;
}

.data-details-info div ~ div {
  border-top: 1px solid #eeeeee;
}

.choose-wrap {
  display: flex;
  display: -webkit-flex;
}

.choose-hierarchy {
  width: 100px;
  align-self: flex-end;
}

.choose-hierarchy .el-button {
  margin-bottom: 5px;
  margin-left: 0;
}

.hierarchy-info {
  flex: 1;
  min-height: 400px;
  background-image: url("../../assets/images/cuboid.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  min-width: 680px;
}

.hierarchy-box {
  position: absolute;
  transform: rotate(40deg);
  left: 0px;
  top: -30px;
}

.hierarchy-box > div {
  transform: rotate(-40deg);
  margin: 35px 0;
}

.temperature-inline {
  margin-bottom: 15px;
}

.temperature-color {
  display: inline-block;
  width: 80px;
  line-height: 40px;
  color: white;
  background: #409EFF;
  text-align: center;
  border-radius: 5px;
  margin-right: 5px;
}

.temperature-data {
  margin-bottom: 50px;
  margin-left: 20px;
}
.el-button:focus, .el-button:hover{
  color: white;
  border-color: #2a6496;
  background-color: #2a6496;
}
</style>
