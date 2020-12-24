<template>
  <div class="wrap-frame">
    <div
      class="top-left wrap-frame-item"
      :style="{ width: itemWidth, height: itemHeight }"
    ></div>
    <div
      class="top-right wrap-frame-item"
      :style="{ width: itemWidth, height: itemHeight }"
    ></div>
    <div
      class="bottom-left wrap-frame-item"
      :style="{ width: itemWidth, height: itemHeight }"
    ></div>
    <div
      class="bottom-right wrap-frame-item"
      :style="{ width: itemWidth, height: itemHeight }"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemWidth: "30px",
      itemHeight: "30px"
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap-frame {
  font-size: 20px;
  padding: 10px;
  line-height: 32px;
  border: 2px solid #23a4fe;
  // background: #001936;
  position: relative;
  box-shadow: 0 0 25px 5px rgba($color: #23a4fe, $alpha: 0.3) inset;
  .wrap-frame-item {
    position: absolute;
  }
  .top-left {
    left: 0;
    top: 0;
    border-left: 3px solid #23a4fe;
    border-top: 3px solid #23a4fe;
  }
  .top-right {
    right: 0;
    top: 0;
    border-right: 3px solid #23a4fe;
    border-top: 3px solid #23a4fe;
  }
  .bottom-left {
    left: 0;
    bottom: 0;
    border-left: 3px solid #23a4fe;
    border-bottom: 3px solid #23a4fe;
  }
  .bottom-right {
    right: 0;
    bottom: 0;
    border-right: 3px solid #23a4fe;
    border-bottom: 3px solid #23a4fe;
  }
}
</style>
