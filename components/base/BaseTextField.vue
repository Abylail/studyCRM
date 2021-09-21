<template>
  <div class="base-text-field">

    <div class="base-text-field__title" v-if="!!title">
      {{ title }}
    </div>

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
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      required: true
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

  &__title {
    font-size: $fs_sub-title;
    margin-bottom: 2px;
  }

  &__input {
    height: 26px;
    width: -webkit-fill-available;
    padding: 0 5px;
    font-size: $fs_text;
  }

}
</style>
