<template>
  <div class="multi-table">

    <!-- DAY LIST -->
    <div v-for="(info, day) in timetable" :key="day" class="multi-table__item">

      <!-- DAY NAME -->
      <div class="multi-table__title">{{ weekDays[day].name }}</div>

      <!-- LESSONS LIST -->
      <div class="multi-table__lessons">
        <div class="multi-table__lesson" v-for="lesson in info">
          <span>{{ lesson.name }}</span>
          <span class="multi-table__lesson__time">{{ lesson.start }} - {{ lesson.end }}</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import mainTimetable from "@/config/examples/mainTimetable";
import weekDays from "@/config/weekDays";

export default {
  name: "BaseMultiTimeTable",
  data: () => ({
    weekDays,
  }),
  props: {
    timetable: {
      type: Object,
      default: ()=>mainTimetable
    }
  }
}
</script>

<style lang="scss" scoped>
.multi-table {

  &__item {
    background: $color_gray_light;
    padding: 20px;
    border-radius: $border-radius;
    margin-top: 20px;
  }

  &__title {
    font-size: $fs_sub-title;
  }

  &__lessons {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  &__lesson {
    border-radius: $border-radius-mini;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    margin-right: 10px;
    margin-top: 5px;
    background: #1e2c5b;
    color: white;
    cursor: pointer;
    transition: $transition_fast;
    font-size: $fs_text;
    &__time { font-size: $fs_nano }
    &:hover { opacity: .8 }
  }

}
</style>
