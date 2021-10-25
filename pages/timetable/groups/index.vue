<template>
  <div class="groups page">
    <!-- HEAD -->
    <div class="page__head">
      <p class="page__title unselect">Группы</p>
      <BaseButton>Добавить +</BaseButton>
    </div>


    <!-- SEARCH BY NAME -->
    <div class="page__block">
      <p class="page__sub-title unselect">Поиск по названию</p>
      <BaseTextField class="margin-top-5" v-model="searchName" placeholder="Поиск по имени" clearable />
    </div>


    <!-- FILTER -->
    <DownOpener title="Фильтр">
      <div class="flex-row margin-top-10">
        <BaseSelect
            class="margin-right-10"
            title="Начало урока:"
            placeholder="Выберите время"
            keySpace="start"
            nameSpace="start"
            v-model="timeStart"
            :options="times"
        />

        <BaseSelect
            title="Конец урока:"
            placeholder="Выберите время"
            keySpace="end"
            nameSpace="end"
            v-model="timeEnd"
            :options="times"
        />
      </div>

      <div class="flex-row margin-top-10">
        <BaseSelect
            class="margin-right-10"
            title="Учитель:"
            placeholder="Выберите учителя"
            v-model="teacher"
            :options="teachers"
        />

        <BaseSelect
            title="Аудитория:"
            placeholder="Выберите аудиторию"
            v-model="classroom"
            :options="classrooms"
        />
      </div>
    </DownOpener>

    <!-- INFO -->
    <DownOpener title="Информация" v-if="details" openStart>
      <div class="margin-top-10">
      <div>Название: <span class="groups__info">{{ details.name }}</span></div>
      <div>Учитель: <span class="groups__info">{{ details.teacher.name }}</span></div>
      <div>Аудитория: <span class="groups__info">{{ details.classroom.name }}</span></div>
      <div>Колличество детей: <span class="groups__info">{{ details.childrenCount }}</span></div>
      </div>
    </DownOpener>

    <!-- LIST -->
    <div class="page__list">
      <GroupCard
        v-for="group in groups" :key="group.id"
        :value="group"
        :active="isActive(group)"
        @click="goGroup"
      />
      <p class="not-found margin-top-10" v-show="!groups.length">Групп не найдено</p>
    </div>

  </div>
</template>

<script>
import { teachers, classrooms } from "@/config/examples/lists";
import { list } from "@/config/examples/groups";
import { getTimes, formatTimeToMinutes } from "@/helpers/time";

import GroupCard from "@/components/common/groups/GroupCard";
import Slide from "@/components/transitions/Slide";
import DownOpener from "../../../components/common/openers/DownOpener";

export default {
  data: () => ({
    teachers,
    classrooms,

    searchName: "",
    timeStart: "",
    timeEnd: "",
    teacher: "",
    classroom: "",


    HIGHEST_TIME_DEFAULT: "9:00",
    LOWEST_TIME_DEFAULT: "22:00",
  }),
  methods: {
    clearFilter() {
      this.searchName = "";
      this.timeStart = "";
      this.timeEnd = "";
      this.teacher = "";
      this.classroom = "";
    },
    isActive(group) {
      return this.groupId && group.id.toString() === this.groupId.toString();
    },
    goGroup(group) {
      this.$router.push(`/timetable/groups/${group.id}`)
    },

    byName(group) {
      if (!this.searchName) return true;
      return group.name.toLowerCase().includes(this.searchName.toLowerCase())
    },
    byTimeStart(group) {
      if (!this.timeStart) return true;
      let include = false;
      group.time.forEach(t => {
      if (formatTimeToMinutes(t.start) >= formatTimeToMinutes(this.timeStart.start)) {
          include = true;
          return true;
        }
      })
      return include;
    },
    byTimeEnd(group) {
      if (!this.timeEnd) return true;
      let include = false;
      group.time.forEach(t => {
        if (formatTimeToMinutes(t.end) <= formatTimeToMinutes(this.timeEnd.end)) {
          include = true;
          return true;
        }
      })
      return include;
    },
    byTeacher(group) {
      if (!this.teacher) return true;
      return group.teacher.id.toString() === this.teacher.id.toString()
    },
    byClassroom(group) {
      if (!this.classroom) return true;
      return group.classroom.id.toString() === this.classroom.id.toString();
    },
  },
  computed: {
    haveFilters() {
      return this.searchName
          || this.timeStart
          || this.timeEnd
          || this.teacher
          || this.classroom;
    },
    times() {
      return getTimes(this.HIGHEST_TIME_DEFAULT, this.LOWEST_TIME_DEFAULT);
    },
    groupId() {
      return this.$route.params.id;
    },
    details() {
      if (!this.groupId) return null;
      else return list.find(group => +group.id === +this.groupId);
    },
    groups() {
      return list.filter(group => (
          this.byName(group) &&
          this.byTimeStart(group) &&
          this.byTimeEnd(group) &&
          this.byTeacher(group) &&
          this.byClassroom(group)
      ))
    }
  },
  components: {DownOpener, Slide, GroupCard }
}
</script>

<style lang="scss" scoped>
.groups {

  &__filter {
    margin-top: 15px;
    padding: 10px;
    background: $color_gray_light;
    border-radius: $border_radius;
  }

  &__info {
    font-weight: bold;
  }
}
</style>
