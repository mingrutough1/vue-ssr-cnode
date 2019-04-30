<template>
  <div :class="$style.container">
    <BaseHeader v-for="(item, index) in listData" :key="index" :data="item">
    </BaseHeader>
    <div :class="$style.loadMore"></div>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader";

export default {
  name: "base-list",
  props: {
    listData: {
      require: true
    },
    loading: {
      default: false
    }
  },
  watch: {
    // loading(newValue) {
    //   if (newValue) {
    //     this.loadingObj = this.$loading({
    //       target: `.${this.$style.loadMore}`,
    //       backgroundColor: "rgba(0,0,0,0)"
    //     });
    //   } else {
    //     this.loadingObj.close();
    //   }
    // }
  },
  data() {
    return {
      loadingObj: null
    };
  },
  components: {
    BaseHeader
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        this.$emit("loadMore");
      }
    }
  }
};
</script>

<style lang="scss" module>
.container {
  .loadMore {
    height: 80px;
  }
}
</style>
