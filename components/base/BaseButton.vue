<template>
  <button class="unselect base-button" :class="`base-button__${variant}`" @click="$emit('click', $event)">
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
          "cancel"
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
  border: 2px solid transparent;
  transition: $transition_fast;
  font-size: $fs_content;
  border-radius: $border_radius;
  padding: 5px 10px;

  &__default {
    background: $color_primary;
    color: $color_secondary;
    &:hover { opacity: .9 }
    &:active { opacity: .6 }
  }

  &__cancel {
    border-color: $color_primary;
    background: transparent;
    color: $color_primary;
    &:hover {
      background: $color_primary;
      color: $color_secondary;
      opacity: .9;
    }
    &:active { opacity: .6 }
  }


}
</style>
