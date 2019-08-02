require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03989fe2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(13);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03989fe2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03989fe2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\greet\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03989fe2", Component.options)
  } else {
    hotAPI.reload("data-v-03989fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__ = __webpack_require__(2);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Greet',
  data: function data() {
    return {
      userList: [],
      openId: '',
      userInfo: ''
    };
  },
  onShow: function onShow() {
    var that = this;
    that.getUserList();
  },

  methods: {
    sendGreet: function sendGreet(e) {
      var that = this;
      if (e.target.errMsg === 'getUserInfo:ok') {
        wx.getUserInfo({
          success: function success(res) {
            that.userInfo = res.userInfo;
            that.getOpenId();
          }
        });
      }
    },
    addUser: function addUser() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('user');
      user.add({
        data: {
          user: that.userInfo
        }
      }).then(function (res) {
        that.getUserList();
      });
    },
    getOpenId: function getOpenId() {
      var that = this;
      wx.cloud.callFunction({
        name: 'user',
        data: {}
      }).then(function (res) {
        that.openId = res.result.openid;
        that.getIsExist();
      });
    },
    getIsExist: function getIsExist() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('user');
      user.where({
        _openid: that.openId
      }).get().then(function (res) {
        if (res.data.length === 0) {
          that.addUser();
        } else {
          __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('您已经送过祝福了~');
        }
      });
    },
    getUserList: function getUserList() {
      var that = this;
      wx.cloud.callFunction({
        name: 'userList',
        data: {}
      }).then(function (res) {
        that.userList = res.result.data.reverse();
      });
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "greet"
  }, [_c('image', {
    staticClass: "head",
    attrs: {
      "src": "../../static/images/heart-animation.gif"
    }
  }), _vm._v(" "), _c('scroll-view', {
    staticClass: "box",
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.userList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('image', {
      attrs: {
        "src": item.user.avatarUrl
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.user.nickName))])], 1)
  })), _vm._v(" "), _c('p', {
    staticClass: "count"
  }, [_vm._v("已收到" + _vm._s(_vm.userList.length) + "位好友送来的祝福")]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "eventid": '2_0'
    },
    on: {
      "getuserinfo": _vm.sendGreet
    }
  }, [_vm._v("送上祝福")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("分享喜悦")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03989fe2", esExports)
  }
}

/***/ })
],[9]);
//# sourceMappingURL=main.js.map