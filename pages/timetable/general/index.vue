<template>
  <div class="timetable page">
    <div class="page__head">
      <p class="page__title">Общее расписание</p>
      <BaseButton @click="createHandle">Создать урок +</BaseButton>
    </div>
    <div class="page__main">
      <BaseMultiTimeTable/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createHandle() {
      this.$modal.show("create-lesson");
    }
  }
}
</script>

<style scoped>

</style>
