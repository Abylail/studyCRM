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

    <span class="base-text-field__clearable" v-show="value && clearable" @click="clear">
      <BaseIcon class="ic-16">close</BaseIcon>
    </span>
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
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    inputHandle(event) {
      this.$emit("input", event.target.value)
    },
    clear() {
      this.$emit("input", "")
    }
  }
}
</script>

<style lang="scss" scoped>
.base-text-field {
  position: relative;
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
    background: white;
  }

  &__clearable {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }

}
</style>
