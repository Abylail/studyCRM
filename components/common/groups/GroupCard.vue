<template>
  <div class="group-card" :class="{active: active}" @click="$emit('click', value)">

    <div class="group-card__head">
      <p class="group-card__name">{{ value.name }}</p>
    </div>

    <div class="group-card__row">
      <div class="group-card__info margin-right-10">
        <div class="group-card__title">Учитель</div>
        <div class="group-card__text">{{ value.teacher.name }}</div>
      </div>

      <div class="group-card__info margin-right-10">
        <div class="group-card__title">Аудитория</div>
        <div class="group-card__text">{{ value.classroom.name }}</div>
      </div>

      <div class="group-card__info">
        <div class="group-card__title">Учеников</div>
        <div class="group-card__text">{{ value.childrenCount }}</div>
      </div>
    </div>

    <div class="group-card__info">
      <div class="group-card__title">Дни уроков:</div>
      <div class="group-card__row">
        <span
            class="group-card__day"
            v-for="(time, index) in value.time" :key="index"
        >{{ weekDays[time.dayId].name }}</span>
      </div>
    </div>

    <div class="group-card__info">
      <div class="group-card__title">Дни уроков:</div>
      <div class="group-card__row">
        <span
            class="group-card__day"
            v-for="(time, index) in value.time" :key="index"
        >{{ time.start }} - {{ time.end }}</span>
      </div>
    </div>

    <div class="group-card__foot">

    </div>

  </div>
</template>

<script>
import weekDays from "@/config/weekDays";

export default {
  name: "GroupCard",
  data: () => ({
    weekDays
  }),
  props: {
    value: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.group-card {
  border-radius: $border-radius;
  padding: 20px 30px;
  cursor: pointer;
  margin-right: 30px;
  margin-top: 15px;
  box-shadow: 0 2px 6px 4px rgba(34, 60, 80, 0.1);
  transition: $transition;
  color: $color_primary;

  &:hover { box-shadow: 0 4px 10px 4px rgba(34, 60, 80, 0.2) }

  &.active {
    background: $color_primary;
    color: $color_secondary;
    box-shadow: 0 2px 6px 4px rgba(34, 60, 80, 0.5);
    &:hover { box-shadow: 0 4px 10px 4px rgba(34, 60, 80, 0.8) }
  }

  &__name {
    font-size: $fs_content;
  }

  &__title {
    font-size: $fs_text;
    color: $color_gray;
  }

  &__text {
    font-size: $fs_text;
  }

  &__info {
    margin-top: 8px;
  }

  &__day {
    padding: 3px 6px;
    margin-top: 2px;
    margin-right: 6px;
    background: $color_gray_light;
    color: $color_primary;
    border-radius: $border_radius-mini;
    font-size: $fs_text;
  }

  &__row {
    display: flex;
    flex-direction: row;
  }

}
</style>