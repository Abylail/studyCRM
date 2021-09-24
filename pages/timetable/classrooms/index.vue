<template>
  <div class="classrooms page">
    <!-- HEAD -->
    <div class="page__head">
      <p class="page__title">Аудитории</p>
      <BaseButton>Добавить +</BaseButton>
    </div>

    <div class="page__block">
      <p class="page__sub-title">Поиск</p>
      <BaseTextField class="margin-top-5" v-model="searchText" placeholder="Поиск по имени" clearable/>
    </div>

    <div class="page__block">
      <p>Список аудиторий, что бы посмотреть детали нажмите на имя</p>

      <!-- classrooms list -->
      <div class="page__list">
        <nuxt-link
            class="page__edge"
            :class="{active: classroom.id.toString() === classroomId}"
            v-for="classroom in classrooms" :key="classroom.id"
            :to="`/timetable/classrooms/${classroom.id}`"
        >
          {{ classroom.name }}
        </nuxt-link>
        <p class="not-found" v-show="!classrooms.length">Центров не найдено</p>
      </div>
    </div>

    <div class="page__details" v-if="classroomId">
      <BaseDevider/>
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import { list } from "@/config/examples/classrooms";

export default {
  name: "classrooms",
  data: () => ({

    searchText: "",
  }),
  computed: {
    classrooms() {
      return list.filter(classroom => classroom.name.toLowerCase().includes(this.searchText.toLowerCase()));
    },
    classroomId() {
      return this.$route.params.id;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
