<template>
  <div :class="$style.container">
    <i class="icon-category" @click="show.left = true"></i>
    <span :class="$style.title">{{ map[activeTab]}}</span>
    <i class="icon-threePoints" @click="show.right = true"></i>
    <transition name="slide-left">
      <div
        :class="$style.leftPannelWrap"
        @click.stop=""
        v-show="show.left"
      >
        <ul @click="show.left = false">
          <nuxt-link
            v-for="(item, index) in navArr.left"
            :key="index"
            :to="item.path"
            :class="$style.li"
            tag="li"
          >
            <span>{{ item.name }}</span>
          </nuxt-link>
        </ul>
      </div>
    </transition>
    <transition name="slide-right">
      <div
        :class="$style.rightPannelWrap"
        @click.stop=""
        v-show="show.right"
      >
        <ul @click="show.right = false">
          <nuxt-link
            v-for="(item, index) in navArr.right"
            :key="index"
            :to="item.path"
            :class="$style.li"
            tag="li"
          >
            <span>{{ item.name }}</span>
          </nuxt-link>
        </ul>
      </div>
    </transition>
    <div
      :class="$style.shadow"
      v-show="show.left || show.right"
      @click="toggleDisplay"
    ></div>
  </div>
</template>

<script>
const tabMap = {
  all: "全部",
  good: "精华",
  share: "分享",
  ask: "问答",
  job: "招聘",
  message: "消息",
  about: "关于",
  login: "登陆",
  favorites: "我的收藏",
  my: "个人中心"
};
export default {
  name: "app-nav",
  data() {
    return {
      show: {
        left: false,
        right: false
      },
      map: tabMap,
      navArr: {
        left: [
          { name: "登陆", path: "/logIn" },
          { name: "个人中心", path: "/my" },
          { name: "我的收藏", path: "/favorites" },
          { name: "消息", path: "/message" },
          { name: "关于", path: "/about" }
        ],
        right: [
          { name: "全部", path: "/" },
          { name: "精华", path: "/?tab=good" },
          { name: "分享", path: "/?tab=share" },
          { name: "问答", path: "/?tab=ask" },
          { name: "招聘", path: "/?tab=job" }
        ]
      }
    };
  },
  computed: {
    activeTab() {
      let ans = "全部";
      if (this.$route.name === "index") {
        ans = this.$route.query.tab || "all";
      } else {
        ans = this.$route.name;
      }
      return ans;
    }
  },
  methods: {
    toggleDisplay() {
      this.show.left = false;
      this.show.right = false;
    }
  }
};
</script>
<style lang="scss" module>
.container {
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
  :global(.icon-category) {
    width: 28px;
    height: 28px;
    display: inline-block;
    background-image: url("~assets/img/icon-category.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 6px;
    top: 6px;
  }
  :global(.icon-threePoints) {
    width: 28px;
    height: 28px;
    display: inline-block;
    background-image: url("~assets/img/threePoints.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    right: 6px;
    top: 6px;
  }
  .title {
    font-size: 16px;
  }
  .leftPannelWrap,
  .rightPannelWrap {
    position: fixed;
    top: 0;
    width: 100px;
    height: 100vh;
    background: #fff;
    cursor: pointer;
    z-index: 2;
    .li {
      &:global(.nuxt-link-exact-active),
      &:hover {
        background: lightblue;
      }
    }
  }
  .leftPannelWrap {
    left: 0;
  }
  .rightPannelWrap {
    right: 0;
  }
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100px);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100px);
}
</style>
