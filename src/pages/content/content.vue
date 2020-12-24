<template>
  <div class="wrap-content">
    <div class="top">
      <div class="top-nav">
        <h-frame
          class="nav-item"
          v-for="item in nav"
          :key="item"
          :class="{ active: thisIndex === item }"
          @click.native="thisIndex = item"
        >
          {{ item }}
        </h-frame>
      </div>
      <div class="user">管理员崔凯航</div>
    </div>
    <div class="content">
      <food-stuff v-show="thisIndex === '粮情测控'"></food-stuff>
      <quality v-show="thisIndex === '质量检查'"></quality>
      <gas v-show="thisIndex === '气体浓度'"></gas>
      <intelligence
        v-show="thisIndex === '智能通风'"
        :thisIndex="thisIndex"
      ></intelligence>
    </div>
  </div>
</template>

<script>
import foodStuff from "./foodstuff/foodstuff";
import quality from "./quality/quality";
import gas from "./gas/gas";
import intelligence from "./intelligence/intelligence";
export default {
  components: {
    foodStuff,
    quality,
    gas,
    intelligence
  },
  data() {
    return {
      nav: ["粮情测控", "质量检查", "气体浓度", "智能通风"],
      thisIndex: "粮情测控"
    };
  }
};
</script>

<style scoped>
.wrap-content {
  height: 500px;
}
.top {
  display: flex;
}
.top-nav {
  width: 84%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.nav-item {
  width: 24%;
  margin-right: 2%;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  /* line-height: 48px; */
  color: #8bb0ff;
}
.nav-item.active {
  background: #004c81;
  box-shadow: none;
  color: #a8d0ff;
}
.user {
  flex: 1;
  line-height: 50px;
  font-size: 24px;
  text-align: center;
}
.content {
  margin-top: 40px;
}
</style>
