<template>
  <button class="base-button" :class="`base-button__${variant}`">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "default",
          "goBack",
        ].includes(value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  cursor: pointer;
  outline: none;
  transition: $transition_fast;

  &__default {
    font-size: $fs_content;
    background: $color_primary;
    color: $color_secondary;
    border-radius: $border_radius;
    border: none;
    padding: 5px 10px;
    &:hover { opacity: .8 }
    &:active { opacity: .6 }
  }

  &__goBack {

  }

}
</style>
