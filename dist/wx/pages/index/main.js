require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(15);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d62fdb2a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d62fdb2a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d62fdb2a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d62fdb2a", Component.options)
  } else {
    hotAPI.reload("data-v-d62fdb2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_indexSwiper__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_h_tools__ = __webpack_require__(2);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Index',
  components: {
    IndexSwiper: __WEBPACK_IMPORTED_MODULE_0_components_indexSwiper__["a" /* default */]
  },
  data: function data() {
    return {
      isPlay: true,
      list: [],
      audioCtx: '',
      audioUrl: ''
    };
  },
  onShow: function onShow() {
    var that = this;
    that.audioCtx = wx.createAudioContext('myAudio');
    that.isPlay = true;
    that.getMusicUrl();
  },


  methods: {
    audioPlay: function audioPlay() {
      var that = this;
      if (that.isPlay) {
        that.audioCtx.pause();
        that.isPlay = false;
        __WEBPACK_IMPORTED_MODULE_1_common_js_h_tools__["a" /* default */].showToast('您已暂停音乐播放~');
      } else {
        that.audioCtx.play();
        that.isPlay = true;
        __WEBPACK_IMPORTED_MODULE_1_common_js_h_tools__["a" /* default */].showToast('背景音乐已开启~');
      }
    },
    getList: function getList() {
      var that = this;
      var db = wx.cloud.database();
      var banner = db.collection('banner');
      banner.get().then(function (res) {
        that.list = res.data[0].bannerList;
        console.log(that.list);
      });
    },
    getMusicUrl: function getMusicUrl() {
      var that = this;
      var db = wx.cloud.database();
      var music = db.collection('music');
      music.get().then(function (res) {
        that.audioUrl = res.data[0].musicUrl;
        that.audioCtx.play();
        that.getList();
      });
    }
  },

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      path: '/pages/index/main'
    };
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexSwiper_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_431afe40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexSwiper_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-431afe40"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_431afe40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\indexSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] indexSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-431afe40", Component.options)
  } else {
    hotAPI.reload("data-v-431afe40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'GoodSwiper',
  props: ['list']
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "autoplay": true,
      "circular": true,
      "current": "0",
      "indicator-dots": true,
      "vertical": true
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "item",
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "mode": "aspectFill",
        "lazy-load": "true",
        "src": item
      }
    })])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-431afe40", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "bg-swiper"
  }, [_c('index-swiper', {
    attrs: {
      "list": _vm.list,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('image', {
    staticClass: "inv",
    attrs: {
      "src": "../../static/images/inv.png"
    }
  }), _vm._v(" "), (_vm.isPlay) ? _c('div', {
    staticClass: "bg_music",
    attrs: {
      "eventid": '1_1'
    },
    on: {
      "tap": _vm.audioPlay
    }
  }, [_c('image', {
    staticClass: "musicImg music_icon",
    attrs: {
      "src": "../../static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "music_play pauseImg",
    attrs: {
      "src": "../../static/images/music_play.png"
    }
  })]) : _c('div', {
    staticClass: "bg_music",
    attrs: {
      "eventid": '1_0'
    },
    on: {
      "tap": _vm.audioPlay
    }
  }, [_c('image', {
    staticClass: "musicImg",
    attrs: {
      "src": "../../static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "music_play playImg",
    attrs: {
      "src": "../../static/images/music_play.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h1', [_vm._v("王汀洲 & 陈梦莎")]), _vm._v(" "), _c('p', [_vm._v("谨定于 2019年10月4日 （星期五）中午11:30")]), _vm._v(" "), _c('p', [_vm._v("农历 九月初六 中午十一点半整 举办婚礼")]), _vm._v(" "), _c('p', [_vm._v("席设：枣庄市薛城区惠我南黎花园湖景酒店")]), _vm._v(" "), _c('p', [_vm._v("地址：枣庄市薛城区光明大道4199号")]), _vm._v(" "), _c('image', {
    staticClass: "img_footer",
    attrs: {
      "src": "../../static/images/we.png"
    }
  })], 1)]), _vm._v(" "), _c('audio', {
    attrs: {
      "id": "myAudio",
      "src": _vm.audioUrl,
      "autoplay": "",
      "loop": ""
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d62fdb2a", esExports)
  }
}

/***/ })
],[14]);
//# sourceMappingURL=main.js.map