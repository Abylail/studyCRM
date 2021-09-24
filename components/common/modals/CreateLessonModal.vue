<template>
  <BaseModal
      name="create-lesson"
      title="Создание урока"
      ref="paren"
      @onModalOpen="onModalOpen"
      @onModalClose="clear"
  >
    <div class="create-lesson">

    <!--   TEACHER ( УЧИТЕЛЬ )   -->
      <BaseSelect
          class="create-lesson__input"
          title="Учитель:"
          v-model="selectedTeacher"
          :options="teachers"
      />

    <!--   LESSON ( УРОК )   -->
      <BaseSelect
          class="create-lesson__input"
          title="Урок:"
          v-model="lesson_type"
          :options="lesson_types"
      />

    <!--   CLASSES ( АУДИТОРИЯ )   -->
      <BaseSelect
          class="create-lesson__input"
          title="Аудитория:"
          v-model="classroom"
          :options="classrooms"
      />

    <!--   DAY ( ДЕНЬ )   -->
      <BaseSelect
          class="create-lesson__input"
          title="День:"
          v-model="day"
          :options="days"
      />

      <!--  TIME ( ВРЕМЯ )   -->
      <div class="create-lesson__row">
        <!-- START ( КОНЕЦ УРОКА ) -->
        <BaseSelect
            class="create-lesson__input margin-right-5"
            title="Начало урока:"
            placeholder="Начало"
            keySpace="start"
            nameSpace="start"
            :error="timeError"
            v-model="timeStart"
            :options="times"
        />
        <!-- END ( НАЧАЛО УРОКА ) -->
        <BaseSelect
            class="create-lesson__input"
            title="Конец урока:"
            placeholder="Конец"
            keySpace="end"
            nameSpace="end"
            :error="timeError"
            v-model="timeEnd"
            :options="times"
        />
      </div>

      <div class="create-lesson__buttons">
        <BaseButton variant="cancel" @click="cancel">Отменить</BaseButton>
        <BaseButton @click="send">Сохранить</BaseButton>
      </div>

    </div>
  </BaseModal>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import { teachers, lesson_types, classrooms } from "@/config/examples/lists";
import weekDays from "@/config/weekDays";

import { getTimes, formatTimeToMinutes } from "@/helpers/time";

export default {
  name: "CreateLessonModal",
  data: () => ({
    HIGHEST_TIME_DEFAULT: "9:00",
    LOWEST_TIME_DEFAULT: "22:00",

    teachers,
    lesson_types,
    classrooms,

    selectedTeacher: null,
    lesson_type: null,
    classroom: null,
    day: null,
    timeStart: null,
    timeEnd: null,
  }),
  methods: {
    findTeacher(payload) {
      // NEED { teacher_id }
      this.selectedTeacher = this.teachers.find(teacher => teacher.id.toString() === payload.teacher_id.toString()) || null;
    },
    onModalOpen(payload) {
      if (payload.teacher_id ) this.findTeacher(payload);
    },
    clear() {
      this.selectedTeacher = null;
      this.lesson_type = null;
      this.classroom = null;
      this.day = null;
      this.timeStart = null;
      this.timeEnd = null;
    },

    send() {
      this.$toast.success("Урок создан");
      this.$modal.hide("create-lesson");
    },
    cancel() {
      this.$modal.hide("create-lesson");
    }
  },
  computed: {
    timeError() {
      if (
          this.timeStart && this.timeEnd
          && formatTimeToMinutes(this.timeStart.start) >= formatTimeToMinutes(this.timeEnd.end)
      ) return "Невозможное время урока";
      return "";
    },

    times() {
      return getTimes(this.HIGHEST_TIME_DEFAULT, this.LOWEST_TIME_DEFAULT);
    },
    days() {
      return Object.keys(weekDays).map(dayId => ({
        id: dayId,
        ...weekDays[dayId]
      }))
    }
  },
  validations: {
    selectedTeacher: { required },
  }
}
</script>

<style lang="scss" scoped>
.create-lesson {
  width: 300px;

  &__input {
    margin-top: 10px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &__buttons {
    margin-top: 40px;
  }

}
</style>