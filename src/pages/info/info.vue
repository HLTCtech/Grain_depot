<template>
  <div class="wrap-info">
    <div class="title">001</div>
    <h-frame class="content">
      <div class="form-item">
        <div class="label">仓房类型：</div>
        <div class="value">地下仓</div>
      </div>
      <div class="form-item">
        <div class="label">仓房容量：</div>
        <div class="value">450.000吨</div>
      </div>
      <div class="form-item">
        <div class="label">品种：</div>
        <div class="value">混合小麦</div>
      </div>
      <div class="form-item">
        <div class="label">年限：</div>
        <div class="value">2016</div>
      </div>
      <div class="form-item">
        <div class="label">数量：</div>
        <div class="value">0.220吨</div>
      </div>
      <div class="form-item">
        <div class="label">等级：</div>
        <div class="value">一等</div>
      </div>
      <div class="form-item">
        <div class="label">入库时间：</div>
        <div class="value">2018-10-31</div>
      </div>
    </h-frame>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap-info {
  /* border: 1px solid rgb(3, 0, 179); */
}
.title {
  text-align: center;
  line-height: 48px;
  font-size: 24px;
  background: linear-gradient(
    to right,
    rgb(0, 25, 54),
    #004c81,
    rgb(0, 25, 54)
  );
  border-top: 1px solid rgb(46, 143, 255);
  border-bottom: 1px solid rgb(46, 143, 255);
}
.content {
  margin-top: 40px;
  border: 1px solid rgb(46, 143, 255);
  padding: 10px;
}
.form-item {
  display: flex;
  font-size: 20px;
  margin-bottom: 15px;
  line-height: 36px;
}
.form-item .label {
  width: 100px;
}
.form-item .value {
  background: #004c81;
  text-align: right;
  flex: 1;
  padding-right: 5px;
}
</style>
