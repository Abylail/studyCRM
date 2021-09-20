<template>
  <div class="default-layout">
    <Header class="default-layout__header" />

    <div class="default-layout__main">
      <nuxt/>
    </div>

    <Sidebar class="default-layout__sidebar" />
  </div>
</template>

<script>
import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/sidebar/Sidebar";
export default {
  name: "default",
  components: {Sidebar, Header }
}
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  right: 0;

  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: $size_head-foot 1fr;
  grid-template-areas:  "header header"
                        "sidebar main";

  overflow: auto;

  &__header {
    grid-area: header;
  }

  &__sidebar {
    grid-area: sidebar;
  }

  &__main {
    grid-area: main;
    overflow: auto;
  }
}
</style>
