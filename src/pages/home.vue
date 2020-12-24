<template>
  <div class="wrap">
    <div id="particles-js"></div>
    <info class="info"></info>
    <main-content class="main-content"></main-content>
  </div>
</template>

<script>
import info from "./info/info";
import mainContent from "./content/content";
import particlesJs from "particles.js";
export default {
  components: {
    info,
    mainContent
  },
  data() {
    return {};
  },
  mounted() {
    this.drawBackground();
  },
  methods: {
    drawBackground() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#23a4fe"
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(0, 25, 54);
  padding: 20px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  overflow: auto;
}
#particles-js {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
}
.info {
  width: 300px;
  height: 500px;
  margin-right: 20px;
  z-index: 2;
}
.main-content {
  flex: 1;
  z-index: 2;
}
</style>
