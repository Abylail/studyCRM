<template>
  <Fade>
    <div class="modal" v-if="visible" @click.self="close">

      <div class="modal__content">
        <div class="modal__head">
          <div class="modal__title">{{ title }}</div>
          <div class="modal__close" @click="close">
            <BaseIcon class="ic-16">close</BaseIcon>
          </div>
        </div>

        <div class="modal__body">
          <slot :payload="payload"></slot>
        </div>
      </div>

    </div>
  </Fade>
</template>

<script>
import Fade from "@/components/transitions/Fade.vue";

export default {
  components: {
    Fade
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    this.$modal.$event.$on("show", (name, payload) => {
      if (this.name === name) {
        this.visible = true;
        // document.documentElement.style.overflowY = "hidden";
        this.payload = payload;
        this.$emit("onModalOpen", payload);
      }
      console.log("MODAL", name, this.payload)
    });
    this.$modal.$event.$on("hide", name => {
      // document.documentElement.style.overflowY = "initial";
      if (this.name === name) {
        this.visible = false;
        this.$emit("onModalClose");
      }
    });
  },
  methods: {
    close() {
      this.$modal.hide(this.name);
    }
  },
  data() {
    return {
      visible: false,
      payload: {}
    };
  }
};
</script>

<style lang="scss" scoped>
$padding_size: 40px;

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__head {
    height: $padding_size;
    display: grid;
    grid-template-columns: 1fr $padding_size;
    grid-template-areas: "title close";
    padding: $padding_size - 10px $padding_size 0;
  }

  &__title {
    font-size: $fs_title;
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__close {
    grid-area: close;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: $transition_fast;
    border-radius: 100px;
    &:hover { background: $color_gray_light }
  }


  &__content {
    min-width: 200px;
    max-width: 99vw;
    max-height: 99vh;
    background: white;
    border-radius: 10px;
  }

  &__body {
    padding: 0 $padding_size $padding_size;
  }
}
</style>
