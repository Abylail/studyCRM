<template>
  <table class="base-timetable" border="1">

    <!--  HEADS  -->
    <tr>
      <th></th>
      <th v-for="head in heads" :key="head">{{ head }}</th>
    </tr>

    <!--  MAIN INFO  -->
    <tr v-for="time in times" :key="time">
      <td>{{ time }}</td>
      <td v-for="head in heads" :key="head">
        check
      </td>
    </tr>

  </table>
</template>

<script>
import mainTimetable from "@/config/examples/mainTimetable";
import weekDays from "@/config/weekDays";

export default {
  name: "BaseTimetable",
  data: () => ({
    dayStart: "9:00",
    dayEnd: "20:00",

    HIGHEST_TIME_DEFAULT: "9:00",
    LOWEST_TIME_DEFAULT: "22:00",
  }),
  methods: {
    calculateMinutes(time, val = -30) {

    },
    minutesToTime(val) {
      const minutes = val % 60;
      const hours = val/60;
      return this.timeToFormat(`${hours}:${minutes}`);
    },
    timeToFormat(time) {
      const hour = time.split(":")[0];
      const minute = time.split(":")[1];

      const processedHour = hour.length > 1 ? hour : `0${hour}`;
      const processedMinute = minute.length > 1 ? minute : `0${minute}`;

      return `${processedHour}:${processedMinute}`
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
      return Object.keys(this.data).map(key => weekDays[key]?.name || "empty");
    },
    times() {
      let [startHour, startMinute] = this.highestTime.split(":").map(time => parseInt(time));
      let [endHour, endMinute] = this.lowestTime.split(":").map(time => parseInt(time));
      let times = [];

      while(this.timeToMinutes(startHour, startMinute) <= (this.timeToMinutes(endHour, endMinute) - 30)) {
        const edgeStart = this.timeToFormat(`${startHour}:${startMinute}`);
        // const edgeEnd = this.timeToFormat(`${startHour}:${startMinute}`);
        times.push(edgeStart);

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
  props: {
    data: {
      type: Object,
      default: () => mainTimetable
    }
  }
}
</script>

<style lang="scss" scoped>
.base-timetable {
  width: 100%;
}
</style>
