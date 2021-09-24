<template>
  <!-- CARD -->
  <div
      class="card-timetable card-timetable__lesson"
      :class="{'card-timetable__last': data.end === time.end}"
      v-if="data"
      @click="handleClick"
  >
    <span class="card-timetable__info" v-if="showInfo">
      <p class="card-timetable__text">{{ data.name }}</p>
      <p class="card-timetable__text">{{ data.start }} - {{ data.end }}</p>
    </span>
  </div>

  <!-- EMPTY -->
  <div v-else class="card-timetable card-timetable__empty"></div>
</template>

<script>
export default {
  name: "CardTimetable",
  data: () => ({
    CELL_MINUTES: 30,
  }),
  props: {
    data: {
      type: Object,
      default: null
    },
    time: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleClick() {
      console.log(this.data)
      this.$router.push(`/timetable/groups/${this.data.id}`)
    },
    timeToMinutes(time) {
      const [hours, minutes] = time.split(":").map(t => parseInt(t));
      return hours*60 + minutes;
    }
  },
  computed: {
    showInfo() {
      // ODD
      if (this.cellCount % 2 !== 0)
        return ((this.cellCount + 1) / 2) === this.cellPlace;
      //EVEN
      return (this.cellCount / 2) === this.cellPlace;
    },
    cellPlace() {
      const cellMinutes = 30;
      const lessonStart = this.timeToMinutes(this.data.start);
      const timeEnd = this.timeToMinutes(this.time.end);
      const lessonMinutes = timeEnd - lessonStart;
      return lessonMinutes / cellMinutes;
    },
    cellCount() {
      const beforeLesson = this.timeToMinutes(this.data.start);
      const afterLesson = this.timeToMinutes(this.data.end);
      return (afterLesson - beforeLesson) / this.CELL_MINUTES;
    }
  }
}
</script>

<style lang="scss" scoped>
.card-timetable {
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &__lesson {
    background: $color_secondary;
  }

  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
  }

  &__text {
    font-size: $fs_text;
  }

  tr:not(:last-child) &__empty {
    box-sizing: border-box;
    border-bottom: 1px solid black;
  }
  tr:not(:last-child) &__last {
    box-sizing: border-box;
    border-bottom: 1px solid black;
  }
}
</style>
