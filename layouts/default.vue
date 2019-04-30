<template>
  <div>
    <div id="nav">
      <AppNav></AppNav>
    </div>
    <div id="body">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";

export default {
  name: 'layout',
  components: {
    AppNav,
  }
};
</script>

<style lang="scss">
#__layout {
  background: #e2e2e2;
  #nav {
    width: 100%;
    position: fixed;
    height: 40px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    z-index: 20;
  }
  #body {
    padding: 50px 10px 10px;
    max-width: 980px;
    margin: 0 auto;
    min-height: 100vh;
  }
}
</style>
