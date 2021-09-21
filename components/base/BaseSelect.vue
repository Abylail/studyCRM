<template>
  <div class="base-select unselect" v-click-outside="outClick">

    <!-- TITLE -->
    <div class="base-select__title" v-if="!!title">
      {{ title }}
    </div>

    <!-- MAIN SELECT -->
    <div class="base-select__main" @click="toggleOptions">
      <div class="base-select__selected" :class="{'base-select__placeholder': !value}">
        {{ selectedTitle }}
      </div>
      <div class="base-select__arrow" :class="{opened: showOptions}">
        <BaseIcon class="ic-18 ic-fill-gray">arrow</BaseIcon>
      </div>
    </div>

    <!-- OPTIONS -->
    <Slide>
      <div class="base-select__options" v-show="showOptions">
        <div
            class="base-select__option"
            :class="{selected: isSelected(option)}"
            v-for="option in options" :key="options[keySpace]"
            @click="select(option)"
        >
          {{ option[nameSpace] }}
        </div>
      </div>
    </Slide>

    <!-- ERROR -->
    <Slide>
      <div class="base-select__error" v-show="!!error">
        {{ error }}
      </div>
    </Slide>

  </div>
</template>

<script>
import Slide from "@/components/transitions/Slide";

import ClickOutside from 'vue-click-outside'

export default {
  name: "BaseSelect",
  components: {Slide},
  data: () => ({
    showOptions: false,
  }),
  props: {
    placeholder: {
      type: String,
      default: "Выберите из списка"
    },
    // title ( top )
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [Object, String, Number, null],
      default: null
    },
    // options list ( for select )
    options: {
      type: Array,
      default: () => []
    },
    // name ( name )
    nameSpace: {
      type: String,
      default: "name"
    },
    // key ( id )
    keySpace: {
      type: String,
      default: "id"
    },
    // error message
    error: {
      type: String,
      default: ""
    }
  },
  computed: {
    selectedTitle() {
      if (!this.value) return this.placeholder;
      if (typeof this.value === "object") return this.value[this.nameSpace];
      return this.value;
    }
  },
  methods: {
    outClick() {
      if (this.showOptions) this.showOptions = false;
    },
    isSelected(option) {
      if (!this.value) return false;
      return this.value[this.keySpace] === option[this.keySpace];
    },
    select(option) {
      if (this.value && option[this.keySpace].toString() === this.value[this.keySpace].toString()) return null;
      this.$emit("input", option);
      this.hideOptions();
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    hideOptions() {
      this.showOptions = false;
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss" scoped>
$padding_edge: 5px 8px;

.base-select {
  position: relative;
  font-size: $fs_content;
  width: 100%;

  &__title {
    //font-size: $fs_sub-title;
    margin-bottom: 2px;
  }

  &__main {
    border-radius: $border_radius-mini;
    cursor: pointer;
    padding: $padding_edge;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 25px;
    grid-template-areas: "text arrow";
  }

  &__selected {
    grid-area: text;
  }

  &__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: arrow;
    transform: rotate(90deg);
    transition: $transition;
    &.opened { transform: rotate(-90deg) }
  }

  &__placeholder {
    color: $color_gray;
  }

  &__error {
    margin-top: 5px;
    color: red;
    font-size: $fs_text;
  }

  &__options {
    max-height: 200px;
    margin-top: 5px;
    border-radius: $border_radius-mini;
    width: inherit;
    position: absolute;
    z-index: 10;
    background: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
    overflow: auto;
  }

  &__option {
    cursor: pointer;
    padding: $padding_edge;
    transition: $transition_fast;
    &:hover {
      background: $color_secondary;
      color: $color_primary;
    }
    &.selected {
      background: $color_primary;
      color: $color_secondary;
      &:hover { opacity: .8 }
    }
  }

}
</style>
