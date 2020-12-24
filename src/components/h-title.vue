<template>
  <div class="wrap-frame">
    <div
      class="top-left wrap-frame-item"
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
  padding: 10px 10px 10px 15px;
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  color: #23a4fe;
  position: relative;
  background: rgba($color: #23a4fe, $alpha: 0.2);
  // box-shadow: 0 0 25px 5px rgba($color: #23a4fe, $alpha: 0.3) inset;
  .wrap-frame-item {
    position: absolute;
  }
  .top-left {
    left: 0;
    top: 0;
    border-left: 3px solid #23a4fe;
    border-top: 3px solid #23a4fe;
  }
  .bottom-right {
    right: 0;
    bottom: 0;
    border-right: 3px solid #23a4fe;
    border-bottom: 3px solid #23a4fe;
  }
}
</style>
