<template>
  <div
    class="base-devider"
    :class="[
      {'base-devider--mini': mini},
      {'base-devider--transparent': transparent},
    ]"
  />
</template>

<script>
export default {
  name: "BaseDevider",
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-devider {
  height: 10px;
  margin: 20px 0;
  background: $color_primary;
  border-radius: $border-radius;

  &--mini {
    height: 5px;
    margin: 10px 0;
  }

  &--transparent {
    background: transparent;
  }

}
</style>
