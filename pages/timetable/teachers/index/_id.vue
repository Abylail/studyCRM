<template>
  <div class="teachers-details">
    <!--  HEAD  -->
    <div class="page__head">
      <p class="page__title">{{ details.name }}</p>
      <BaseButton @click="createHandle">Создать урок +</BaseButton>
    </div>

    <div class="page__block">
      <p class="page__sub-title">Расписание:</p>
    </div>

    <div class="page__block">
      <BaseTimetable :data="details.timeTable"/>
    </div>

  </div>
</template>

<script>
import { details } from "@/config/examples/teachers";

export default {
  data: () => ({
    details,
  }),
  methods: {
    createHandle() {
      this.$modal.show("create-lesson", { teacher_id: this.id });
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
