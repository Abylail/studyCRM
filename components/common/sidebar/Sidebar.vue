<template>
  <nav class="sidebar">

    <div class="sidebar__main">
    <!-- BLOCK -->
    <div class="sidebar__block" v-for="block in config" :key="block.key">
      <!-- TITLE -->
      <h3 class="sidebar__title" >{{ block.name }}</h3>

      <!-- LIST -->
      <div class="sidebar__list">
        <nuxt-link class="sidebar__link"
                   v-for="(item, i) in block.list" :key="i"
                   :to="item.url"
        >
          {{ item.name }}
        </nuxt-link>
      </div>

    </div>
    </div>

    <div class="sidebar__footer">
      <nuxt-link class="sidebar__link"
                 to="/settings"
      >
        Настройки
      </nuxt-link>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    config: [
      {
        name: "Расписание", key: "timetable",
        list: [
          { name: "Расписание",       url: "/timetable/desc" },
          { name: "Учителя",          url: "/timetable/teachers" },
          { name: "Дети",             url: "/timetable/children" },
          { name: "Классы",           url: "/timetable/classrooms" },
          { name: "Группы и уроки",   url: "/timetable/groupsAndLessons" },
        ],
        show: true,
      },
      {
        name: "CRM", key: "crm",
        list: [
        ],
        show: false,
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
$mini_padding: 10px;
$big_padding: 20px;

.sidebar {
  display: grid;
  grid-template-rows: 1fr $size_head-foot;
  grid-template-areas: "main" "footer";
  background: $color_secondary;

  &__main {
    grid-area: main;
    overflow: auto;
  }

  &__footer {
    grid-area: footer;
  }

  &__title {
    font-size: $fs_sub-title;
    font-weight: bolder;
    padding-left: $mini_padding;
    margin: $big_padding 0 $mini_padding;
    color: $color_primary;
  }

  &__link {
    font-size: $fs_content;
    padding: $mini_padding $big_padding;
    display: block;
    color: $color_primary;
    border: 3px solid $color_secondary;
    border-radius: $border-radius;
    margin: 0;

    &:hover {
      background: $color_secondary_extra;
    }

    &.nuxt-link-active {
      background: $color_primary;
      color: $color_secondary;
    }
  }

  &__block {

  }

  &__list {
    margin-top: $mini_padding;
  }

  &__item {

  }

}
</style>
