<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <img :src="data.author.avatar_url" :alt="data.author.loginname" />
      <span>{{ data.author.loginname }}</span>
      <span>{{ `${order}楼` }}</span>
      <span>{{ getDateDiff(data.create_at) }}</span>
      <span v-if="authorName === data.author.loginname">作者</span>
    </div>
    <div v-html="data.content" class="markdown-body"></div>
  </div>
</template>

<script>
export default {
  name: "reply-item",
  props: {
    data: {
      required: true,
      dafault: {}
    },
    order: {},
    authorName: {}
  },
  components: {}
};
</script>

<style lang="scss" module>
.container {
  .header {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    :global(span) {
      font-size: 12px;
      color: #08c;
      margin-right: 6px;
      &:nth-child(2) {
        color: #000;
      }
    }
    :global(img) {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
