<template>
  <div class="teachers page">
    <!--  HEAD  -->
    <div class="page__head">
      <p class="page__title">Дети</p>
      <BaseButton>Добавить +</BaseButton>
    </div>

    <div class="page__block">
      <p class="page__sub-title">Поиск</p>
      <BaseTextField class="margin-top-5" v-model="searchText" placeholder="Поиск по имени" />
    </div>

    <div class="page__block">
      <p class="page__text">Список учителей, что бы посмотреть детали нажмите на имя</p>

      <!--  teachers list  -->
      <div class="page__list">
        <nuxt-link
            class="page__edge"
            :class="{active: child.id.toString() === childId}"
            v-for="child in children" :key="child.id"
            :to="`/timetable/children/${child.id}`"
        >{{ child.name }}</nuxt-link>
        <p class="not-found" v-if="!children.length" >Детей с таким именем нет</p>
      </div>

      <div class="page__details" v-if="childId">
        <BaseDevider/>
        <nuxt-child/>
      </div>
    </div>

  </div>
</template>

<script>
import { list } from "@/config/examples/children";

export default {
  name: "childrens",
  data: () => ({
    searchText: "",
  }),
  computed: {
    childId() {
      return this.$route.params.id;
    },
    children() {
      return list.filter(child => child.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
</script>

<style scoped>

</style>
