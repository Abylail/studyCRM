<template>
  <div class="teachers page">
    <!--  HEAD  -->
    <div class="page__head">
      <p class="page__title">Учителя</p>
      <span>sa</span>
    </div>

    <div class="page__block">
      <p class="page__sub-title">Поиск</p>
      <BaseTextField class="margin-top-5" v-model="searchText" placeholder="Поиск по имени" />
    </div>

    <div class="page__block">
      <p class="page__text">Список учителей, что бы посмотреть детали нажмите на имя учителя</p>

      <!--  teachers list  -->
      <div class="teachers__list">
        <nuxt-link
          class="teachers__edge"
          :class="{active: teacher.id.toString() === teacherId}"
          v-for="teacher in teachers" :key="teacher.id"
          :to="`/timetable/teachers/${teacher.id}`"
        >{{ teacher.name }}</nuxt-link>
        <p class="page__text--strong" v-if="!teachers.length" >Учителей с таким именем нет</p>
      </div>

      <div class="teacher__details" v-if="teacherId">
        <BaseDevider/>
        <nuxt-child/>
      </div>
    </div>

  </div>
</template>

<script>
import { list } from "@/config/examples/teachers";

export default {
  name: "teachers",
  data: () => ({
    searchText: "",
  }),
  computed: {
    teacherId() {
      return this.$route.params.id;
    },
    teachers() {
      return list.filter(teacher => teacher.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
</script>

<style lang="scss" scoped>
.teachers {

  &__list {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  &__edge {
    background: $color_gray_light;
    color: $color_gray;
    font-size: $fs_content;
    padding: 4px 8px;
    margin: 3px 6px 3px 0;
    transition: $transition_fast;

    &.active {
      //background: $color_gray;
      //color: $color_gray_light;
      background: $color_primary;
      color: $color_secondary_extra;
    }

    &:hover {
      opacity: $opacity_low;
    }
  }

}
</style>
