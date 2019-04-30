<template>
  <div :class="$style.container" v-show="show">
    <img src="@/assets/back-to-top.svg" alt="" @click="backToTop" />
  </div>
</template>

<script>
export default {
  name: "backToTop",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.throttle(this.handleScroll, 200));
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 400) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    backToTop() {
      window.scrollTo(0, 0);
      // window.requestAnimationFrame(this.scrollStep);
    },
    scrollStep() {
      let scrollTop = document.documentElement.scrollTop;
      document.documentElement.scrollTop -= 1000;
      if (scrollTop > 0) {
        window.requestAnimationFrame(this.scrollStep);
      }
    }
  }
};
</script>

<style lang="scss" module>
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  :global(img) {
    &:hover {
      animation: bounce 0.8s linear infinite;
    }
  }
}
</style>
