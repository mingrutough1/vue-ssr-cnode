<template>
  <div :class="$style.container" @click="toTopicDetail">
    <div :class="$style.top">
      <div :class="[$style.tag, 'top']" v-if="data.top">置顶</div>
      <div :class="[$style.tag, 'top']" v-if="data.good">精华</div>
      <div :class="$style.tag" v-else>{{ tabMap[data.tab] || "问答" }}</div>
      <h2 :title="data.title">{{ data.title }}</h2>
    </div>
    <div :class="$style.bottom">
      <div :class="$style.bottomItem">
        <img :src="data.author.avatar_url" :onerror="defaultImg" />
        <div>
          <div :class="$style.des">{{ data.author.loginname }}</div>
          <div :class="$style.des">{{ getDateDiff(data.create_at) }}</div>
        </div>
      </div>
      <div :class="$style.bottomItem">
        <div>
          <span :style="{ fontWeight: 'bold' }">{{ data.reply_count }}</span>
          {{ `/${data.visit_count}` }}
        </div>
        <div :style="{ paddingTop: '10px' }">
          {{ getDateDiff(data.last_reply_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tabMap = {
  share: "分享",
  ask: "问答",
  job: "招聘",
  good: "精华"
};
export default {
  name: "BaseHeader",
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      tabMap
    };
  },
  methods: {
    toTopicDetail() {
      this.$router.push({
        name: "topicDetail-id",
        params: {
          id: this.data.id
        }
      });
    }
  }
};
</script>

<style lang="scss" module>
.container {
  min-height: 20px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 6px;
  .top {
    display: flex;
    padding: 10px;
    cursor: pointer;
    :global(h2) {
      // word-break: break-all;
      line-height: 20px;
    }
    .tag {
      width: 40px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 4px;
      background: #3498db;
      color: #fff;
      margin-right: 6px;
      &:global(.top) {
        background: #e74c3c;
      }
    }
  }
  .bottom {
    display: flex;
    padding: 10px;
    padding-top: 0px;
    justify-content: space-between;
    font-size: 12px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
    }
    .bottomItem {
      display: flex;
      &:nth-child(2) {
        display: block;
        text-align: right;
      }
      .des {
        padding-left: 6px;
        &:nth-child(1) {
        }
        &:nth-child(2) {
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
