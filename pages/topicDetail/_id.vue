<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <BaseHeader :data="topicData"></BaseHeader>
      <div v-html="topicData.content" class="markdown-body"></div>
    </div>
    <div :class="$style.reply">
      <div :class="$style.replyTitle">
        {{ `${topicData.reply_count}  回复` }}
      </div>
      <ReplyItem
        v-for="(item, index) in topicData.replies"
        :key="index"
        :order="index + 1"
        :authorName="topicData.author.loginname"
        :data="item"
      ></ReplyItem>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import ReplyItem from "@/components/ReplyItem.vue";

export default {
  name: "TopicDetail",
  components: {
    BaseHeader,
    ReplyItem
  },
  data() {
    return {
      topicData: {
        author: {}
      },
      loading: true
    };
  },
  async asyncData( { $axios, params } ) {
    const { type, url } = $apiData.GET_TOPIC_DETAIL;
    const id = params.id;
    const { data } = await $axios[type](`${url}${id}`);
    return {
      topicData: data.data
    };
  },
  // mounted() {
  //   this.getTopicDetail();
  // },
  computed: {
    topicId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getTopicDetail() {
      const { type, url } = $apiData.GET_TOPIC_DETAIL;
      this.$axios[type](`${url}${this.topicId}`).then(res => {
        this.topicData = res.data.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" module>
.container {
  min-height: calc(100vh - 60px);
  .content {
    background: #fff;
    border-radius: 6px;
  }
  .reply {
    margin-top: 10px;
    background: #fff;
    border-radius: 6px;
    .replyTitle {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 6px 6px 0 0;
    }
    :global(.markdown-body) {
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
</style>
