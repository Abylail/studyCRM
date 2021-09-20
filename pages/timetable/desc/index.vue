<template>
  <div class="timetable page">
    <div class="page__head">
      <p class="page__title">Расписание</p>
      <span>sa</span>
    </div>
    <div class="page__main">
      <BaseTimetable/>
    </div>
  </div>
</template>

<script>
import BaseTimetable from "@/components/base/BaseTimetable";
export default {
  components: {BaseTimetable}
}
</script>

<style scoped>

</style>
