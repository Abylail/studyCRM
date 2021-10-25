<template>
  <div class="down-opener">
    <div class="down-opener__head" @click="toggleOpen">
      <p class="down-opener__title">{{ title }}</p>
      <BaseIcon
          class="ic-16 down-opener__arrow transition rotate-90"
          :class="{'rotate-270': isOpen}"
      >arrow</BaseIcon>
    </div>

    <Slide>
      <div class="down-opener__body" v-show="isOpen">
        <slot/>
      </div>
    </Slide>
  </div>
</template>

<script>
import Slide from "@/components/transitions/Slide";
export default {
  name: "DownOpener",
  components: {Slide},
  data:() => ({
    isOpen: false
  }),
  mounted() {
    this.isOpen = this.openStart;
  },
  props: {
    title: {
      type: String,
      default: "Открыть"
    },
    openStart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) this.$emit("onOpen")
      else this.$emit("onClose")
    }
  }
}
</script>

<style lang="scss" scoped>
.down-opener {
  margin: 10px 0;
  background: $color_gray_light;
  border-radius: $border_radius;
  padding: 10px;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  &__title {
    font-size:  $fs_sub-title;
    font-weight: bold;
  }

}
</style>
