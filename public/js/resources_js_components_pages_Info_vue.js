"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

// import anime from 'animejs/lib/anime.es.js';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var height = innerHeight;
    // const width = innerWidth;
    var grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var clickedBoxes = [];
    console.log(height);
    for (var i = 0; i < 15; i++) {
      var row = [];
      for (var j = 0; j < 30; j++) {
        row.push({});
      }
      grid.value.push(row);
    }
    var handleBoxClick = function handleBoxClick(row, col) {
      console.log("Box at row ".concat(row, ", col ").concat(col, " clicked!"));
      var clickedBox = document.querySelector(".row:nth-child(".concat(row + 2, ") .box:nth-child(").concat(col + 1, ")"));
      var clickedBox1 = document.querySelector(".row:nth-child(".concat(row + 2, ") .box:nth-child(").concat(col + 1, ")"));
      var clickedBox2 = document.querySelector(".row:nth-child(".concat(row + 2, ") .box:nth-child(").concat(col + 1, ")"));
      if (row === 1 && col === 1) {
        if (clickedBoxes.toString().replace(/,/g, '').includes('11')) {
          clickedBox.style.backgroundColor = '';
          clickedBox.style.boxShadow = '';
          var valuesToRemove = [1, 1];
          for (var _i = clickedBoxes.length - 1; _i >= 0; _i--) {
            if (valuesToRemove.includes(clickedBoxes[_i])) {
              clickedBoxes.splice(_i, 1);
            }
          }
        } else {
          clickedBox.style.backgroundColor = '#343a40';
          clickedBox.style.boxShadow = '1px 1px 0 rgba(0, 0, 0, 1)';
          clickedBoxes.push(row, col);
        }
        ;
      }
      if (row === 2 && col === 7) {
        if (clickedBoxes.toString().replace(/,/g, '').includes('27')) {
          clickedBox1.style.backgroundColor = '';
          clickedBox1.style.boxShadow = '';
          var _valuesToRemove = [2, 7];
          for (var _i2 = clickedBoxes.length - 1; _i2 >= 0; _i2--) {
            if (_valuesToRemove.includes(clickedBoxes[_i2])) {
              clickedBoxes.splice(_i2, 1);
            }
          }
        } else {
          clickedBox1.style.backgroundColor = '#343a40';
          clickedBox1.style.boxShadow = '1px 1px 0 rgba(0, 0, 0, 1)';
          clickedBoxes.push(row, col);
        }
      }
      if (row === 9 && col === 8) {
        if (clickedBoxes.toString().replace(/,/g, '').includes('98')) {
          clickedBox2.style.backgroundColor = '';
          clickedBox2.style.boxShadow = '';
          var _valuesToRemove2 = [9, 8];
          for (var _i3 = clickedBoxes.length - 1; _i3 >= 0; _i3--) {
            if (_valuesToRemove2.includes(clickedBoxes[_i3])) {
              clickedBoxes.splice(_i3, 1);
            }
          }
        } else {
          clickedBox2.style.backgroundColor = '#343a40';
          clickedBox2.style.boxShadow = '1px 1px 0 rgba(0, 0, 0, 1)';
          clickedBoxes.push(row, col);
        }
      }
      if (clickedBoxes.toString().replace(/,/g, '').includes('112798')) {
        var _clickedBox = document.querySelector(".row:nth-child(".concat(1 + 2, ") .box:nth-child(").concat(1 + 1, ")"));
        var _clickedBox2 = document.querySelector(".row:nth-child(".concat(2 + 2, ") .box:nth-child(").concat(7 + 1, ")"));
        var _clickedBox3 = document.querySelector(".row:nth-child(".concat(9 + 2, ") .box:nth-child(").concat(8 + 1, ")"));
        _clickedBox.style.backgroundColor = '#26b1f7';
        _clickedBox2.style.backgroundColor = '#26b1f7';
        _clickedBox3.style.backgroundColor = '#26b1f7';
      }
      console.log(clickedBoxes);
      //give the key to store.js
      //in route, only the user that has the key will granted the access
    };

    return {
      handleBoxClick: handleBoxClick,
      grid: grid,
      height: height,
      clickedBoxes: clickedBoxes
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onDblclick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_card, {
    "class": "grid",
    height: $setup.height - 50,
    width: "100%",
    elevation: "0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.grid, function (row, rowIndex) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: rowIndex,
          "class": "row"
        }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row, function (box, colIndex) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            onDblclick: function onDblclick($event) {
              return $setup.handleBoxClick(rowIndex, colIndex);
            },
            key: colIndex,
            "class": "box"
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1);
        }), 128 /* KEYED_FRAGMENT */))]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.grid {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\n}\n.row {\r\n  display: flex;\n}\n.box {\r\n  width: 100%; /* Adjust box width as needed */\r\n  height: 75px; /* Adjust box height as needed */\r\n  border-right: 1px solid #ccc;\r\n  border-bottom: 1px solid #ccc;\n}\n.box:hover{\r\n  background-color: #fcfcfc;\n}\n.special-box {\r\n  background-color: yellow;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_style_index_0_id_5a7edf78_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_style_index_0_id_5a7edf78_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_style_index_0_id_5a7edf78_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/Info.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Info.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Info_vue_vue_type_template_id_5a7edf78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info.vue?vue&type=template&id=5a7edf78 */ "./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78");
/* harmony import */ var _Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.vue?vue&type=script&lang=js */ "./resources/js/components/pages/Info.vue?vue&type=script&lang=js");
/* harmony import */ var _Info_vue_vue_type_style_index_0_id_5a7edf78_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css */ "./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Info_vue_vue_type_template_id_5a7edf78__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/Info.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/Info.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/pages/Info.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_template_id_5a7edf78__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_template_id_5a7edf78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=template&id=5a7edf78 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=template&id=5a7edf78");


/***/ }),

/***/ "./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_style_index_0_id_5a7edf78_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Info.vue?vue&type=style&index=0&id=5a7edf78&lang=css");


/***/ })

}]);