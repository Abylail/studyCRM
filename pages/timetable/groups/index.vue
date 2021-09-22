<template>
  <div class="groups page">
    <!-- HEAD -->
    <div class="page__head">
      <p class="page__title">Группы</p>
    </div>


    <!-- SEARCH BY NAME -->
    <div class="page__block">
      <p class="page__sub-title">Поиск по названию</p>
      <BaseTextField class="margin-top-5" v-model="searchName" placeholder="Поиск по имени" />
    </div>


    <!-- FILTER -->
    <div class="page__head page__block pointer min-height-35" @click.self="toggleFilter">
      <p class="page__sub-title">
        Фильтр
        <BaseIcon class="margin-left-10 ic-16 transition rotate-90"
                  :class="{'rotate-270': showFilter}"
        >arrow</BaseIcon>
      </p>
      <span/>
      <BaseButton v-show="haveFilters" @click="clearFilter">Сбросить</BaseButton>
    </div>

    <div class="">

    </div>

    <Slide>
      <div v-show="showFilter">

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

      </div>
    </Slide>

    <!-- LIST -->
    <div class="page__list">
      <GroupCard
        v-for="group in groups" :key="group.id"
        :value="group"
        :active="isActive(group)"
        @click="goGroup"
      />
    </div>

  </div>
</template>

<script>
import { teachers, classrooms } from "@/config/examples/lists";
import { list } from "@/config/examples/groups";
import { getTimes, formatTimeToMinutes } from "@/helpers/time";

import GroupCard from "@/components/common/groups/GroupCard";
import Slide from "@/components/transitions/Slide";

export default {
  data: () => ({
    teachers,
    classrooms,

    searchName: "",
    timeStart: "",
    timeEnd: "",
    teacher: "",
    classroom: "",


    showFilter: false,

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
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
    isActive(group) {
      return this.groupId && group.id.toString() === this.groupId.toString();
    },
    goGroup(group) {
      this.$router.push(`/timetable/groups/${group.id}`)
    },

    byName(array) {
      return array.filter(group => group.name.toLowerCase().includes(this.searchName.toLowerCase()));
    },
    byTimeStart(array) {
      return array.filter(group => {
        let include = false;
        group.time.forEach(t => {
          if (formatTimeToMinutes(t.start) >= formatTimeToMinutes(this.timeStart.start)) {
            include = true;
            return true;
          }
        })
        return include;
      });
    },
    byTimeEnd(array) {
      return array.filter(group => {
        let include = false;
        group.time.forEach(t => {
          if (formatTimeToMinutes(t.end) <= formatTimeToMinutes(this.timeEnd.end)) {
            include = true;
            return true;
          }
        })
        return include;
      });
    },
    byTeacher(array) {
      return array.filter(group => group.teacher.id.toString() === this.teacher.id.toString())
    },
    byClassroom(array) {
      return array.filter(group => group.classroom.id.toString() === this.classroom.id.toString())
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
    groups() {
      let filteredList = list.slice();

      if (this.searchName) filteredList = this.byName(filteredList);
      if (this.timeStart) filteredList = this.byTimeStart(filteredList);
      if (this.timeEnd) filteredList = this.byTimeEnd(filteredList);
      if (this.teacher) filteredList = this.byTeacher(filteredList);
      if (this.classroom) filteredList = this.byClassroom(filteredList);

      return filteredList;
    }
  },
  components: { Slide, GroupCard }
}
</script>

<style lang="scss" scoped></style>
