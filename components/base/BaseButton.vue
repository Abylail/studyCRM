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

  &__default {

  }

  &__goBack {

  }

}
</style>
