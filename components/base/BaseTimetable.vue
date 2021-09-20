<template>
  <table class="base-timetable">

    <!--  HEADS  -->
    <tr>
      <th class="base-timetable__time base-timetable__head">Время</th>
      <th class="base-timetable__head" v-for="head in heads" :key="head.id">{{ head.name }}</th>
    </tr>

    <!--  MAIN INFO  -->
    <tr v-for="(time, index) in times" :key="index">
      <td class="base-timetable__time" >{{ time.start }} - {{ time.end }}</td>

      <td class="base-timetable__cell" v-for="head in heads" :key="head.id">
        <CardTimetable
            :data="findLesson(head.id, time)"
            :time="time"
        />
      </td>
    </tr>

  </table>
</template>

<script>
import mainTimetable from "@/config/examples/mainTimetable";
import weekDays from "@/config/weekDays";

import CardTimetable from "@/components/common/timetable/CardTimetable";

export default {
  name: "BaseTimetable",
  components: { CardTimetable },
  props: {
    data: {
      type: Object,
      default: () => mainTimetable
    }
  },
  data: () => ({
    HIGHEST_TIME_DEFAULT: "9:00",
    LOWEST_TIME_DEFAULT: "22:00",
  }),
  methods: {
    isTimeIncludes(time, lesson) {
      return this.formatTimeToMinutes(time.start) >= this.formatTimeToMinutes(lesson.start)
          && this.formatTimeToMinutes(time.end) <= this.formatTimeToMinutes(lesson.end)
    },
    findLesson(dayId, time) {
      const dayLessons = this.data[dayId];
      return dayLessons.find(lesson => this.isTimeIncludes(time, lesson))
    },

    calculateMinutes(time, val = -30) {
      const [hours, minutes] = time.split(":").map(t => parseInt(t));
      const timeInMinutes = (hours*60 + minutes) + val;
      return this.minutesToTime(timeInMinutes);
    },
    minutesToTime(val) {
      const minutes = val % 60;
      const hours = (val - minutes)/60;
      return this.timeToFormat(`${hours}:${minutes}`);
    },
    timeToFormat(time) {
      const hour = time.split(":")[0];
      const minute = time.split(":")[1];

      const processedHour = hour.length > 1 ? hour : `0${hour}`;
      const processedMinute = minute.length > 1 ? minute : `0${minute}`;

      return `${processedHour}:${processedMinute}`
    },
    formatTimeToMinutes(time) {
      let [hours, minutes] = time.split(":").map(t => parseInt(t));
      return hours*60 + minutes;
    },
    timeToMinutes(hour, minute) {
      return ( hour * 60 ) + minute;
    },
    getIntHour(time) {
      return parseInt(time.split(":")[0])
    },
    getIntMinute(time) {
      return parseInt(time.split(":")[1])
    },
    getBiggest(time1, time2) {
      const time1Minutes = (this.getIntHour(time1) * 60) + this.getIntMinute(time1);
      const time2Minutes = (this.getIntHour(time2) * 60) + this.getIntMinute(time2);
      return time1Minutes > time2Minutes
        ? time1
        : time2;
    },
    getLowest(time1, time2) {
      const time1Minutes = (this.getIntHour(time1) * 60) + this.getIntMinute(time1);
      const time2Minutes = (this.getIntHour(time2) * 60) + this.getIntMinute(time2);
      return time1Minutes < time2Minutes
        ? time1
        : time2;
    },
  },
  computed: {
    highestTime() {
      let highestTime = this.LOWEST_TIME_DEFAULT;
      Object.keys(this.data).forEach(dayId => {
        this.data[dayId].forEach(lesson => {
          highestTime = this.getLowest(highestTime, lesson.start);
        })
      })
      return highestTime;
    },
    lowestTime() {
      let lowestTime = this.HIGHEST_TIME_DEFAULT;
      Object.keys(this.data).forEach(dayId => {
        this.data[dayId].forEach(lesson => {
          lowestTime = this.getBiggest(lowestTime, lesson.end);
        })
      })
      return lowestTime;
    },
    heads() {
      return Object.keys(this.data).map(key => ({
        name: weekDays[key].name,
        id: key
      }));
    },
    times() {
      let [startHour, startMinute] = this.highestTime.split(":").map(time => parseInt(time));
      let [endHour, endMinute] = this.lowestTime.split(":").map(time => parseInt(time));
      let times = [];

      while(this.timeToMinutes(startHour, startMinute) <= (this.timeToMinutes(endHour, endMinute) - 30)) {
        const edgeStart = this.timeToFormat(`${startHour}:${startMinute}`);
        const edgeEnd = this.calculateMinutes(`${startHour}:${startMinute}`, +30);
        times.push(
            {
              start: edgeStart,
              end: edgeEnd
            }
        );

        if (!!startMinute) {
          startHour++;
          startMinute = 0;
        }
        else {
          startMinute += 30;
        }
      }

      return times;
    }
  },
}
</script>

<style lang="scss" scoped>
$cell_height: 40px;
$cell_border_color: black;

.base-timetable {
  width: 100%;
  border-spacing: 0;
  border: 1px solid $cell_border_color;

  &__cell {
    padding: 0;
    height: $cell_height;
    text-align: center;
    border-right: 1px solid $cell_border_color;
    &:last-child { border-right: none }
  }

  &__head {
    height: $cell_height;
    text-align: center;
    border-right: 1px solid $cell_border_color;
    border-bottom: 1px solid $cell_border_color;
    &:last-child { border-right: none }
  }

  &__time {
    border-right: 1px solid $cell_border_color;
    border-bottom: 1px solid $cell_border_color;
    text-align: center;
    width: 1%;
    white-space: nowrap;
    padding: 0 6px;
  }

  tr:last-child .base-timetable__time{
    border-bottom: none;
  }
}
</style>
