<template>
  <header class="header">
    <div class="header__left">left</div>
    <div class="header__right">right</div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header {
  background: $color_primary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  &__left {

  }
}
</style>
