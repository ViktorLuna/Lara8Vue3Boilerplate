"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Sample_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fruits: ['Apples', 'Apricots', 'Avocado', 'Bananas', 'Blueberries', 'Blackberries', 'Boysenberries', 'Bread fruit', 'Cantaloupes (cantalope)', 'Cherries', 'Cranberries', 'Cucumbers', 'Currants', 'Dates', 'Eggplant', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Honeydew melons', 'Huckleberries', 'Kiwis', 'Kumquat', 'Lemons', 'Limes', 'Mangos', 'Mulberries', 'Muskmelon', 'Nectarines', 'Olives', 'Oranges', 'Papaya', 'Peaches', 'Pears', 'Persimmon', 'Pineapple', 'Plums', 'Pomegranate', 'Raspberries', 'Rose Apple', 'Starfruit', 'Strawberries', 'Tangerines', 'Tomatoes', 'Watermelons', 'Zucchini'],
      selectedFruits: []
    };
  },
  computed: {
    likesAllFruit: function likesAllFruit() {
      return this.selectedFruits.length === this.fruits.length;
    },
    likesSomeFruit: function likesSomeFruit() {
      return this.selectedFruits.length > 0;
    },
    title: function title() {
      if (this.likesAllFruit) return 'Holy smokes, someone call the fruit police!';
      if (this.likesSomeFruit) return 'Fruit Count';
      return 'How could you not like fruit?';
    },
    subtitle: function subtitle() {
      if (this.likesAllFruit) return undefined;
      if (this.likesSomeFruit) return this.selectedFruits.length;
      return 'Go ahead, make a selection above!';
    }
  },
  methods: {
    toggle: function toggle() {
      if (this.likesAllFruit) {
        this.selectedFruits = [];
      } else {
        this.selectedFruits = this.fruits.slice();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "hi!", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_checkbox_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-checkbox-btn");
  var _component_v_list_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list-item");
  var _component_v_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-divider");
  var _component_v_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-avatar");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: _ctx.selectedFruits,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selectedFruits = $event;
    }),
    items: _ctx.fruits,
    label: "Favorite Fruits",
    multiple: ""
  }, {
    "prepend-item": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item, {
        title: "Select All",
        onClick: $options.toggle
      }, {
        prepend: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_checkbox_btn, {
            color: $options.likesSomeFruit ? 'indigo-darken-4' : undefined,
            indeterminate: $options.likesSomeFruit && !$options.likesAllFruit,
            "model-value": $options.likesSomeFruit
          }, null, 8 /* PROPS */, ["color", "indeterminate", "model-value"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_divider, {
        "class": "mt-2"
      })];
    }),
    "append-item": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_divider, {
        "class": "mb-2"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item, {
        subtitle: $options.subtitle,
        title: $options.title,
        disabled: ""
      }, {
        prepend: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_avatar, {
            icon: "mdi-food-apple",
            color: "primary"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" mdi-food-apple ")];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["subtitle", "title"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "items"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/pages/Sample.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Sample.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sample_vue_vue_type_template_id_c5e48880__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sample.vue?vue&type=template&id=c5e48880 */ "./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880");
/* harmony import */ var _Sample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sample.vue?vue&type=script&lang=js */ "./resources/js/components/pages/Sample.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sample_vue_vue_type_template_id_c5e48880__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/Sample.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/Sample.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Sample.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sample.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sample_vue_vue_type_template_id_c5e48880__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sample_vue_vue_type_template_id_c5e48880__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sample.vue?vue&type=template&id=c5e48880 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Sample.vue?vue&type=template&id=c5e48880");


/***/ })

}]);