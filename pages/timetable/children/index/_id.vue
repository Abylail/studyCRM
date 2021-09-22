<template>
  <div class="children-details">
    <!--  HEAD  -->
    <div class="page__head">
      <p class="page__title">{{ details.name }}</p>
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
import { details } from "@/config/examples/children"

export default {
  data: () => ({
    details,
  }),
  computed: {
    childId() {
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>

</style>