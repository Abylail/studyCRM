exports.ids = [17,4];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/timetable/teachers/index/_id.vue?vue&type=template&id=3276dbd4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"teachers-details"},[_vm._ssrNode("<div class=\"page__head\" data-v-3276dbd4>","</div>",[_vm._ssrNode("<p class=\"page__title\" data-v-3276dbd4>"+_vm._ssrEscape(_vm._s(_vm.details.name))+"</p> "),_c('BaseButton',{on:{"click":_vm.createHandle}},[_vm._v("Создать урок +")])],2),_vm._ssrNode(" <div class=\"page__block\" data-v-3276dbd4><p class=\"page__sub-title\" data-v-3276dbd4>Расписание:</p></div> "),_vm._ssrNode("<div class=\"page__block\" data-v-3276dbd4>","</div>",[_c('BaseTimetable',{attrs:{"data":_vm.details.timeTable}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/timetable/teachers/index/_id.vue?vue&type=template&id=3276dbd4&scoped=true&

// EXTERNAL MODULE: ./config/examples/teachers.js
var teachers = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/timetable/teachers/index/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data: () => ({
    details: teachers["a" /* details */]
  }),
  methods: {
    createHandle() {
      this.$modal.show("create-lesson", {
        teacher_id: this.id
      });
    }

  },
  computed: {
    id() {
      return this.$route.params.id;
    }

  }
});
// CONCATENATED MODULE: ./pages/timetable/teachers/index/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/timetable/teachers/index/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3276dbd4",
  "4f3c4bb3"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(31).default,BaseTimetable: __webpack_require__(88).default})


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  1: [{
    id: 1,
    start: "11:00",
    end: "12:30",
    type_id: 0,
    name: "Робототехника"
  }, {
    id: 2,
    start: "13:00",
    end: "14:30",
    type_id: 0,
    name: "Робототехника"
  }],
  2: [{
    id: 3,
    start: "11:00",
    end: "12:30",
    type_id: 1,
    name: "Программирование"
  }],
  3: [{
    id: 4,
    start: "11:00",
    end: "12:30",
    type_id: 0,
    name: "Робототехника"
  }],
  4: [{
    id: 5,
    start: "11:00",
    end: "12:30",
    type_id: 0,
    name: "Робототехника"
  }],
  5: [{
    id: 6,
    start: "11:00",
    end: "12:30",
    type_id: 0,
    name: "Робототехника"
  }]
});

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e8243254", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a1eb6eb2", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTimetable_vue_vue_type_style_index_0_id_c7c9cb5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTimetable_vue_vue_type_style_index_0_id_c7c9cb5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTimetable_vue_vue_type_style_index_0_id_c7c9cb5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTimetable_vue_vue_type_style_index_0_id_c7c9cb5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTimetable_vue_vue_type_style_index_0_id_c7c9cb5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card-timetable[data-v-c7c9cb5a]{height:100%;cursor:pointer;display:flex;justify-content:center;align-items:center}.card-timetable__lesson[data-v-c7c9cb5a]{background:#d3e2f6}.card-timetable__info[data-v-c7c9cb5a]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:-webkit-fill-available;width:-webkit-fill-available}.card-timetable__text[data-v-c7c9cb5a]{font-size:15px}tr:not(:last-child) .card-timetable__empty[data-v-c7c9cb5a],tr:not(:last-child) .card-timetable__last[data-v-c7c9cb5a]{box-sizing:border-box;border-bottom:1px solid #000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTimetable_vue_vue_type_style_index_0_id_a028fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTimetable_vue_vue_type_style_index_0_id_a028fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTimetable_vue_vue_type_style_index_0_id_a028fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTimetable_vue_vue_type_style_index_0_id_a028fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTimetable_vue_vue_type_style_index_0_id_a028fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".base-timetable[data-v-a028fae0]{width:100%;border-spacing:0;border:1px solid #000}.base-timetable__cell[data-v-a028fae0]{padding:0;height:40px;text-align:center;border-right:1px solid #000}.base-timetable__cell[data-v-a028fae0]:last-child{border-right:none}.base-timetable__head[data-v-a028fae0]{height:40px;text-align:center;border-right:1px solid #000;border-bottom:1px solid #000}.base-timetable__head[data-v-a028fae0]:last-child{border-right:none}.base-timetable__time[data-v-a028fae0]{border-right:1px solid #000;border-bottom:1px solid #000;text-align:center;width:1%;white-space:nowrap;padding:0 6px}.base-timetable tr:last-child .base-timetable__time[data-v-a028fae0]{border-bottom:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/BaseTimetable.vue?vue&type=template&id=a028fae0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"base-timetable"},[_vm._ssrNode("<tr data-v-a028fae0><th class=\"base-timetable__time base-timetable__head\" data-v-a028fae0>Время</th> "+(_vm._ssrList((_vm.heads),function(head){return ("<th class=\"base-timetable__head\" data-v-a028fae0>"+_vm._ssrEscape(_vm._s(head.name))+"</th>")}))+"</tr> "),_vm._l((_vm.times),function(time,index){return _vm._ssrNode("<tr data-v-a028fae0>","</tr>",[_vm._ssrNode("<td class=\"base-timetable__time\" data-v-a028fae0>"+_vm._ssrEscape(_vm._s(time.start)+" - "+_vm._s(time.end))+"</td> "),_vm._l((_vm.heads),function(head){return _vm._ssrNode("<td class=\"base-timetable__cell\" data-v-a028fae0>","</td>",[_c('CardTimetable',{attrs:{"data":_vm.findLesson(head.id, time),"time":time}})],1)})],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/BaseTimetable.vue?vue&type=template&id=a028fae0&scoped=true&

// EXTERNAL MODULE: ./config/examples/mainTimetable.js
var mainTimetable = __webpack_require__(76);

// EXTERNAL MODULE: ./config/weekDays.js
var weekDays = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/timetable/CardTimetable.vue?vue&type=template&id=c7c9cb5a&scoped=true&
var CardTimetablevue_type_template_id_c7c9cb5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.data)?_c('div',{staticClass:"card-timetable card-timetable__lesson",class:{'card-timetable__last': _vm.data.end === _vm.time.end},on:{"click":_vm.handleClick}},[_vm._ssrNode(((_vm.showInfo)?("<span class=\"card-timetable__info\" data-v-c7c9cb5a><p class=\"card-timetable__text\" data-v-c7c9cb5a>"+_vm._ssrEscape(_vm._s(_vm.data.name))+"</p> <p class=\"card-timetable__text\" data-v-c7c9cb5a>"+_vm._ssrEscape(_vm._s(_vm.data.start)+" - "+_vm._s(_vm.data.end))+"</p></span>"):"<!---->"))],2):_c('div',{staticClass:"card-timetable card-timetable__empty"},[])}
var CardTimetablevue_type_template_id_c7c9cb5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/common/timetable/CardTimetable.vue?vue&type=template&id=c7c9cb5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/timetable/CardTimetable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CardTimetablevue_type_script_lang_js_ = ({
  name: "CardTimetable",
  data: () => ({
    CELL_MINUTES: 30
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
      console.log(this.data);
      this.$router.push(`/timetable/groups/${this.data.id}`);
    },

    timeToMinutes(time) {
      const [hours, minutes] = time.split(":").map(t => parseInt(t));
      return hours * 60 + minutes;
    }

  },
  computed: {
    showInfo() {
      // ODD
      if (this.cellCount % 2 !== 0) return (this.cellCount + 1) / 2 === this.cellPlace; //EVEN

      return this.cellCount / 2 === this.cellPlace;
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
});
// CONCATENATED MODULE: ./components/common/timetable/CardTimetable.vue?vue&type=script&lang=js&
 /* harmony default export */ var timetable_CardTimetablevue_type_script_lang_js_ = (CardTimetablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/timetable/CardTimetable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  timetable_CardTimetablevue_type_script_lang_js_,
  CardTimetablevue_type_template_id_c7c9cb5a_scoped_true_render,
  CardTimetablevue_type_template_id_c7c9cb5a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "c7c9cb5a",
  "7925c2cd"
  
)

/* harmony default export */ var CardTimetable = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/BaseTimetable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BaseTimetablevue_type_script_lang_js_ = ({
  name: "BaseTimetable",
  components: {
    CardTimetable: CardTimetable
  },
  props: {
    data: {
      type: Object,
      default: () => mainTimetable["a" /* default */]
    }
  },
  data: () => ({
    HIGHEST_TIME_DEFAULT: "9:00",
    LOWEST_TIME_DEFAULT: "22:00"
  }),
  methods: {
    isTimeIncludes(time, lesson) {
      return this.formatTimeToMinutes(time.start) >= this.formatTimeToMinutes(lesson.start) && this.formatTimeToMinutes(time.end) <= this.formatTimeToMinutes(lesson.end);
    },

    findLesson(dayId, time) {
      const dayLessons = this.data[dayId];
      return dayLessons.find(lesson => this.isTimeIncludes(time, lesson));
    },

    calculateMinutes(time, val = -30) {
      const [hours, minutes] = time.split(":").map(t => parseInt(t));
      const timeInMinutes = hours * 60 + minutes + val;
      return this.minutesToTime(timeInMinutes);
    },

    minutesToTime(val) {
      const minutes = val % 60;
      const hours = (val - minutes) / 60;
      return this.timeToFormat(`${hours}:${minutes}`);
    },

    timeToFormat(time) {
      const hour = time.split(":")[0];
      const minute = time.split(":")[1];
      const processedHour = hour.length > 1 ? hour : `0${hour}`;
      const processedMinute = minute.length > 1 ? minute : `0${minute}`;
      return `${processedHour}:${processedMinute}`;
    },

    formatTimeToMinutes(time) {
      let [hours, minutes] = time.split(":").map(t => parseInt(t));
      return hours * 60 + minutes;
    },

    timeToMinutes(hour, minute) {
      return hour * 60 + minute;
    },

    getIntHour(time) {
      return parseInt(time.split(":")[0]);
    },

    getIntMinute(time) {
      return parseInt(time.split(":")[1]);
    },

    getBiggest(time1, time2) {
      const time1Minutes = this.getIntHour(time1) * 60 + this.getIntMinute(time1);
      const time2Minutes = this.getIntHour(time2) * 60 + this.getIntMinute(time2);
      return time1Minutes > time2Minutes ? time1 : time2;
    },

    getLowest(time1, time2) {
      const time1Minutes = this.getIntHour(time1) * 60 + this.getIntMinute(time1);
      const time2Minutes = this.getIntHour(time2) * 60 + this.getIntMinute(time2);
      return time1Minutes < time2Minutes ? time1 : time2;
    }

  },
  computed: {
    highestTime() {
      let highestTime = this.LOWEST_TIME_DEFAULT;
      Object.keys(this.data).forEach(dayId => {
        this.data[dayId].forEach(lesson => {
          highestTime = this.getLowest(highestTime, lesson.start);
        });
      });
      return highestTime;
    },

    lowestTime() {
      let lowestTime = this.HIGHEST_TIME_DEFAULT;
      Object.keys(this.data).forEach(dayId => {
        this.data[dayId].forEach(lesson => {
          lowestTime = this.getBiggest(lowestTime, lesson.end);
        });
      });
      return lowestTime;
    },

    heads() {
      return Object.keys(this.data).map(key => ({
        name: weekDays["a" /* default */][key].name,
        id: key
      }));
    },

    times() {
      let [startHour, startMinute] = this.highestTime.split(":").map(time => parseInt(time));
      let [endHour, endMinute] = this.lowestTime.split(":").map(time => parseInt(time));
      let times = [];

      while (this.timeToMinutes(startHour, startMinute) <= this.timeToMinutes(endHour, endMinute) - 30) {
        const edgeStart = this.timeToFormat(`${startHour}:${startMinute}`);
        const edgeEnd = this.calculateMinutes(`${startHour}:${startMinute}`, +30);
        times.push({
          start: edgeStart,
          end: edgeEnd
        });

        if (!!startMinute) {
          startHour++;
          startMinute = 0;
        } else {
          startMinute += 30;
        }
      }

      return times;
    }

  }
});
// CONCATENATED MODULE: ./components/base/BaseTimetable.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_BaseTimetablevue_type_script_lang_js_ = (BaseTimetablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/base/BaseTimetable.vue



function BaseTimetable_injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BaseTimetable_component = Object(componentNormalizer["a" /* default */])(
  base_BaseTimetablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  BaseTimetable_injectStyles,
  "a028fae0",
  "8a07a500"
  
)

/* harmony default export */ var BaseTimetable = __webpack_exports__["default"] = (BaseTimetable_component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return details; });
const list = [{
  id: 0,
  name: "Феликс"
}, {
  id: 1,
  name: "Диас"
}, {
  id: 2,
  name: "Фелкс"
}, {
  id: 3,
  name: "Диа"
}, {
  id: 4,
  name: "Фликс"
}, {
  id: 5,
  name: "Дас"
}, {
  id: 6,
  name: "еликс"
}, {
  id: 7,
  name: "иас"
}];
const details = {
  id: 69,
  name: "Феликс",
  timeTable: {
    1: [{
      id: 1,
      type_id: 0,
      start: "11:00",
      end: "12:30",
      name: "Робототехника"
    }, {
      id: 2,
      type_id: 0,
      start: "13:00",
      end: "14:30",
      name: "Робототехника"
    }],
    3: [{
      id: 9,
      type_id: 0,
      start: "13:00",
      end: "14:30",
      name: "Робототехника"
    }],
    5: [{
      id: 6,
      type_id: 0,
      start: "11:00",
      end: "12:30",
      name: "Робототехника"
    }, {
      id: 7,
      type_id: 0,
      start: "12:30",
      end: "13:30",
      name: "Робототехника"
    }]
  }
};

/***/ })

};;
//# sourceMappingURL=_id.js.map