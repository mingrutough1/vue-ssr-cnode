<template>
  <div :class="$style.container">
    <BaseList
      :listData="listData"
      @loadMore="getTopics"
      :loading="listLoading"
    ></BaseList>
  </div>
</template>

<script>
import BaseList from "@/components/BaseList";

export default {
  name: "app-list",
  components: {
    BaseList
  },
  data() {
    return {
      page: 1,
      listLoading: false,
      listData: []
    };
  },
  watchQuery: ['tab'],
  async asyncData( { $axios, query } ) {
    const { type, url } = $apiData.GET_TOPICS;  
    const tab = query.tab;
    const { data } = await $axios[type](url, {
        params: {
          tab,
          page: 1,
          limit: 10,
          mdrender: true
        }
      });
      return {
        listData: data.data
      };
  },
  computed: {
    activeTab() {
      return this.$route.query.tab;
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    resetData() {
      this.page = 0;
      this.listData = [];
    },
    getTopics() {
      this.page += 1;
      // this.listLoading = true;
      this.topicsAjax().then(res => {
        if (res.data.success) {
          this.listData = this.listData.concat(res.data.data || []);
        }
        // this.listLoading = false;
      });
    },
    topicsAjax() {
      const { type, url } = $apiData.GET_TOPICS;
      return this.$axios[type](url, {
        params: {
          tab: this.activeTab,
          page: this.page,
          limit: 10,
          mdrender: true
        }
      });
    },
  }
};
</script>

<style lang="scss" module>
.container {
  border-radius: 2px;
  padding: 6px;
}
</style>
