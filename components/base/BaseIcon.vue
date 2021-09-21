<template>
  <svg v-bind="$attrs">
    <use :href="`${require('@/assets/icons/sprite.svg')}#${name}`" />
  </svg>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$slots.default?.[0]?.text || "";
    }
  },
}
</script>

<style lang="scss" scoped>
.ic {

  // SIZE
  @for $size from 0 through 100 {
    &-#{$size} {
      height: $size + px;
      width: $size + px;
      min-width: $size + px;
    }
  }

  &-height {
    @for $size from 0 through 100 {
      &-#{$size} {
        height: $size + px;
      }
    }
  }

  &-width {
    @for $size from 0 through 100 {
      &-#{$size} {
        width: $size + px;
        min-width: $size + px;
      }
    }
  }

  // COLOR

  &-stroke {
    &-gray { stroke: $color_gray }
  }

  &-fill {
    &-gray { fill: $color_gray }
  }
}
</style>