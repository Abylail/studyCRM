<template>
  <div class="base-text-field">

    <input
      class="base-text-field__input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="inputHandle"
    />

  </div>
</template>

<script>
export default {
  name: "BaseTextField",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    inputHandle(event) {
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-text-field {
  display: block;

  &__input {
    height: 26px;
    width: -webkit-fill-available;
    padding: 0 5px;
    font-size: $fs_text;
  }

}
</style>
