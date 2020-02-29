function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_nar_main_nar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main-nar/main-nar.component */
    "./src/app/main-nar/main-nar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_main_nar_main_nar_component__WEBPACK_IMPORTED_MODULE_1__["MainNarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./body/body.component */
    "./src/app/body/body.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _main_nar_main_nar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-nar/main-nar.component */
    "./src/app/main-nar/main-nar.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _main_nar_main_nar_component__WEBPACK_IMPORTED_MODULE_7__["MainNarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _main_nar_main_nar_component__WEBPACK_IMPORTED_MODULE_7__["MainNarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/body/body.component.ts":
  /*!****************************************!*\
    !*** ./src/app/body/body.component.ts ***!
    \****************************************/

  /*! exports provided: BodyComponent */

  /***/
  function srcAppBodyBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
      return BodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BodyComponent =
    /*#__PURE__*/
    function () {
      function BodyComponent() {
        _classCallCheck(this, BodyComponent);
      }

      _createClass(BodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BodyComponent;
    }();

    BodyComponent.ɵfac = function BodyComponent_Factory(t) {
      return new (t || BodyComponent)();
    };

    BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BodyComponent,
      selectors: [["app-body"]],
      decls: 47,
      vars: 0,
      consts: [["id", "phone"], ["id", "wrapper"], ["id", "about_"], ["id", "about"], ["id", "aboutt"], ["id", "projects_"], ["id", "projects"], ["id", "drupalwrap"], ["id", "inlay", "src", "assets/images/iphoneinlaym.png"], ["id", "player"], ["width", "225", "height", "400", "controls", "", "muted", ""], ["src", "assets/images/IMG_3975.MP4", "type", "video/mp4"], ["id", "angwrap"], ["id", "iphone"], ["id", "iphone", "src", "assets/images/examiphone.png"], ["id", "ipad"], ["id", "ipad", "src", "assets/images/ipadfinalm.png"], ["id", "contact_"], ["id", "contact"], ["id", "area"], ["href", "https://www.linkedin.com/in/Selina-Winter", "target", "_blank", 1, "git"], ["id", "li", "type", "button", 1, "btn", "btn-li", "waves-effect", "waves-light"], [1, "fab", "fa-linkedin-in", "left"], ["href", "https://github.com/wint25", "target", "_blank", 1, "git"], ["id", "githublink"]],
      template: function BodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, I am Selina Winter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I am an aspiring Software/Web Developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Drupal Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Note: Form elements, form function, and API submission only, CSS/theming not included.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "video", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "source", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Responsive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Feel free to contact me through Linkedin or GitHub.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".btn[_ngcontent-%COMP%]{\r\n    background-color: #0092e4;\r\n    border-radius: 50%;\r\n    font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\r\n  }\r\n  .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n   outline: 0;\r\n   box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);\r\n   border-radius: 50%;\r\n   font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\r\n  }\r\n  .btn[_ngcontent-%COMP%]:hover {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  border-radius: 50%;\r\n  }\r\n  button[_ngcontent-%COMP%]:not(:disabled), [type=\"button\"][_ngcontent-%COMP%]:not(:disabled), [type=\"reset\"][_ngcontent-%COMP%]:not(:disabled), [type=\"submit\"][_ngcontent-%COMP%]:not(:disabled) {\r\n  cursor: pointer;\r\n  }\r\n  button[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  }\r\n  .btn-li[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #0082ca !important;\r\n  font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n  margin: .375rem;\r\n  color: inherit;\r\n  \r\n  word-wrap: break-word;\r\n  white-space: normal;\r\n  cursor: pointer;\r\n  border: 0;\r\n  border-radius: 50%;\r\n  padding: .84rem .84rem; \r\n  font-size: .81rem;\r\n  font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\r\n      font-weight: 300;\r\n      width: 64px;\r\n      height: 64px;\r\n      padding: 0;\r\n      margin: 10px;\r\n      overflow: hidden;\r\n      vertical-align: middle;\r\n      position: relative;\r\n      z-index: 1;\r\n      font-size: 1rem;\r\n      line-height: 1.5;\r\n      text-decoration: none;\r\n  }\r\n  .waves-effect[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 1.5;\r\n  font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  }\r\n  #area[_ngcontent-%COMP%]{\r\n    width:10%;\r\n    display: grid;\r\n    grid-template-columns: 50%, 50%;\r\n    grid-template-areas:  \"li gh\";\r\n    margin-left: 44%;\r\n    margin-bottom: 20%;\r\n}\r\n  #li[_ngcontent-%COMP%]{\r\n  grid-area: li; \r\n}\r\n  #githublink[_ngcontent-%COMP%]{\r\n    grid-area: gh;\r\n   \r\n   width:64px; \r\n   height:64px; \r\n   background-image:url('/assets/images/GitHub-Mark-64px.png');\r\n   \r\n   padding:0;\r\n   margin-top: 6px;\r\n  \r\n  }\r\n  #githublink[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);\r\n  border-radius: 50%;\r\n\r\n}\r\n  #contact[_ngcontent-%COMP%], #projects[_ngcontent-%COMP%]{\r\n \r\n\r\n  text-align: center;\r\n}\r\n  #about[_ngcontent-%COMP%]{\r\n  margin-top: 20%;\r\n  text-align: center;\r\n  margin-bottom: 30%;\r\n  \r\n}\r\n  #wrapper[_ngcontent-%COMP%]{\r\n  display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-areas:  \"about1\"\r\n                          \"about2\"\r\n                          \"project1\"\r\n                          \"project2\"\r\n                          \"contact1\"\r\n                          \"contact2\";\r\n}\r\n  #about_[_ngcontent-%COMP%]{\r\n  grid-area: about1; \r\n}\r\n  #about[_ngcontent-%COMP%]{\r\n  grid-area: about2; \r\n}\r\n  #projects_[_ngcontent-%COMP%]{\r\n  grid-area: project1; \r\n}\r\n  #projects[_ngcontent-%COMP%]{\r\n  grid-area: project2; \r\n}\r\n  #contact_[_ngcontent-%COMP%]{\r\n  grid-area: contact1; \r\n}\r\n  #contact[_ngcontent-%COMP%]{\r\n  grid-area: contact2; \r\n}\r\n  #contact_[_ngcontent-%COMP%], #projects_[_ngcontent-%COMP%]{\r\n  margin-top: 30%;\r\n}\r\n  #projects[_ngcontent-%COMP%]{\r\n  margin-top: 20%;\r\n}\r\n  @media only screen and (min-width: 769px) and (max-width:1024px){\r\n  #area[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    margin-left: 40%;\r\n    margin-bottom: 15%;\r\n  }\r\n}\r\n  @media only screen and (max-width: 400px) {\r\n  #area[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n    margin-left: 30%;\r\n    margin-bottom: 10%;\r\n  }\r\n}\r\n  @media only screen and (max-width: 768px) and (min-width: 401px){\r\n  #area[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n  \r\n    margin-bottom: 10%;\r\n  }\r\n}\r\n  @media only screen and (min-width: 768px) and (max-width:1024px){\r\n  #contact_[_ngcontent-%COMP%], #projects_[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n  }\r\n  #projects[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n  }\r\n  #contact_[_ngcontent-%COMP%], #projects_[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n  }\r\n  #area[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n    \r\n    margin-bottom: 10%;\r\n  }\r\n  #about[_ngcontent-%COMP%]{\r\n    margin-bottom: 20%;\r\n  }\r\n}\r\n  #phone[_ngcontent-%COMP%]{\r\n  background-image:url('/assets/images/mainw.jpeg');\r\n  height: 192px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n}\r\n  #drupalwrap[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 100%;\r\n  grid-template-areas:  \"inlay\"\r\n                        \"player\";\r\n}\r\n  #inlay[_ngcontent-%COMP%]{\r\n  grid-area: inlay; \r\n  margin-left: 30%;\r\n  margin-bottom: 20%;\r\n}\r\n  #player[_ngcontent-%COMP%]{\r\n  grid-area: player; \r\n}\r\n  #angwrap[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 100%;\r\n  grid-template-areas:  \"iphone\"\r\n                        \"ipad\";\r\n}\r\n  #iphone[_ngcontent-%COMP%]{\r\n  grid-area: iphone;\r\n  height:317px;\r\n}\r\n  #ipad[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  grid-area: ipad;\r\n\r\n}\r\n  @media only screen and (min-width: 768px){\r\n  \r\n  #phone[_ngcontent-%COMP%]{\r\n    background-image:url('/assets/images/main.jpeg');\r\n    height: 608px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n  }\r\n  #projects_[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n  }\r\n  #contact_[_ngcontent-%COMP%]{\r\n    margin-top: 30%;\r\n  }\r\n  #projects[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n  }\r\n  #drupalwrap[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 60% 40%;\r\n    grid-template-areas:  \"inlay player\";\r\n  }\r\n  #inlay[_ngcontent-%COMP%]{\r\n    grid-area: inlay; \r\n    margin-left: 30%;\r\n    margin-right: 0;\r\n    margin-bottom: 20%;\r\n  }\r\n  #player[_ngcontent-%COMP%]{\r\n    grid-area: player; \r\n    margin-right: 60%;\r\n    margin-left: 0;\r\n  }\r\n}\r\n  @media only screen and (min-width: 1024px){\r\n  #drupalwrap[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 60% 40%;\r\n    grid-template-areas:  \"inlay player\";\r\n  }\r\n  #inlay[_ngcontent-%COMP%]{\r\n    grid-area: inlay; \r\n    margin-left: 45%;\r\n    margin-right: 0;\r\n    margin-bottom: 20%;\r\n  }\r\n  #player[_ngcontent-%COMP%]{\r\n    grid-area: player; \r\n    margin-right: 60%;\r\n    margin-left: 0;\r\n  }\r\n  #projects_[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVEQUF1RDtFQUN6RDtFQUNBO0dBQ0MsVUFBVTtHQUVWLHdFQUF3RTtHQUN4RSxrQkFBa0I7R0FDbEIsdURBQXVEO0VBQ3hEO0VBQ0E7RUFDQSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQjtFQUNBO0VBQ0EsZUFBZTtFQUNmO0VBQ0E7RUFDQSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQjtFQUNBO0VBQ0EsV0FBVztFQUNYLG9DQUFvQztFQUNwQyx1REFBdUQ7RUFDdkQ7RUFDQTtFQUNBLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUUsWUFBWTtFQUNwQyxpQkFBaUI7RUFDakIsdURBQXVEO01BQ25ELGdCQUFnQjtNQUNoQixXQUFXLENBQUMsS0FBSztNQUNqQixZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixxQkFBcUI7RUFDekI7RUFDQTtFQUNBLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QztFQUNBO0VBQ0EscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWDtFQUNBO0lBQ0UsU0FBUztJQUNULGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUNFO0lBQ0UsYUFBYTtHQUNkLG9CQUFvQjtHQUNwQixVQUFVLEVBQUUsc0JBQXNCO0dBQ2xDLFdBQVcsRUFBRSx1QkFBdUI7R0FDcEMsMkRBQTJEO0dBQzNELGdEQUFnRDtHQUNoRCxTQUFTO0dBQ1QsZUFBZTs7RUFFaEI7RUFDQTtJQUNFLHdFQUF3RTtFQUMxRSxrQkFBa0I7O0FBRXBCO0VBQ0E7Q0FDQyxzQkFBc0I7O0VBRXJCLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7O0FBRXBCO0VBRUE7RUFDRSxhQUFhO0lBQ1gsMkJBQTJCO0lBQzNCOzs7OztvQ0FLZ0M7QUFDcEM7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0VBQ0E7RUFDRSxtQkFBbUI7QUFDckI7RUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtFQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0VBQ0E7RUFDRSxtQkFBbUI7QUFDckI7RUFDQTtFQUNFLGVBQWU7QUFDakI7RUFDQTtFQUNFLGVBQWU7QUFDakI7RUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRjtFQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNGO0VBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakIscUJBQXFCO0lBQ25CLGtCQUFrQjtFQUNwQjtBQUNGO0VBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTs7SUFFZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0VBRUE7RUFDRSxpREFBaUQ7RUFDakQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCO0VBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCO2dDQUM4QjtBQUNoQztFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQjs4QkFDNEI7QUFDOUI7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7RUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlOztBQUVqQjtFQUNBO0VBQ0UsU0FBUztFQUNUO0lBQ0UsZ0RBQWdEO0lBQ2hELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7RUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MmU0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnNcIiwgXCJBcmlhbFwiLFwiUm9ib3RvXCIsc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmUge1xyXG4gICBvdXRsaW5lOiAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsMCwwLDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zXCIsIFwiQXJpYWxcIixcIlJvYm90b1wiLHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIGJ1dHRvbjpub3QoOmRpc2FibGVkKSwgW3R5cGU9XCJidXR0b25cIl06bm90KDpkaXNhYmxlZCksIFt0eXBlPVwicmVzZXRcIl06bm90KDpkaXNhYmxlZCksIFt0eXBlPVwic3VibWl0XCJdOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGJ1dHRvbiwgaHRtbCBbdHlwZT1cImJ1dHRvblwiXSwgW3R5cGU9XCJyZXNldFwiXSwgW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgLmJ0bi1saSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODJjYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zXCIsIFwiQXJpYWxcIixcIlJvYm90b1wiLHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gIG1hcmdpbjogLjM3NXJlbTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICAvKnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ki9cclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAuODRyZW0gLjg0cmVtOyAvKiAyLjE0cmVtOyovXHJcbiAgZm9udC1zaXplOiAuODFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnNcIiwgXCJBcmlhbFwiLFwiUm9ib3RvXCIsc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgd2lkdGg6IDY0cHg7Lyo0NyovXHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAud2F2ZXMtZWZmZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zXCIsIFwiQXJpYWxcIixcIlJvYm90b1wiLHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNhcmVhe1xyXG4gICAgd2lkdGg6MTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlLCA1MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJsaSBnaFwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG4jbGl7XHJcbiAgZ3JpZC1hcmVhOiBsaTsgXHJcbn1cclxuICAjZ2l0aHVibGlua3tcclxuICAgIGdyaWQtYXJlYTogZ2g7XHJcbiAgIC8qIEdpdEh1Yi1NYXJrLTY0cHgqL1xyXG4gICB3aWR0aDo2NHB4OyAvKndpZHRoIG9mIHlvdXIgaW1hZ2UqL1xyXG4gICBoZWlnaHQ6NjRweDsgLypoZWlnaHQgb2YgeW91ciBpbWFnZSovXHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltYWdlcy9HaXRIdWItTWFyay02NHB4LnBuZycpO1xyXG4gICAvKm1hcmdpbi1sZWZ0OiAxMDBweDsgLyogSWYgeW91IHdhbnQgbm8gbWFyZ2luICovXHJcbiAgIHBhZGRpbmc6MDtcclxuICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIFxyXG4gIH1cclxuICAjZ2l0aHVibGluazpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsMCwwLDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcbiNjb250YWN0LCAjcHJvamVjdHN7XHJcbiAvKiBtYXJnaW4tdG9wOiAzMDBweDsqL1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2Fib3V0e1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG4gIFxyXG59XHJcblxyXG4jd3JhcHBlcntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogIFwiYWJvdXQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFib3V0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9qZWN0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9qZWN0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWN0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWN0MlwiO1xyXG59XHJcbiNhYm91dF97XHJcbiAgZ3JpZC1hcmVhOiBhYm91dDE7IFxyXG59XHJcbiNhYm91dHtcclxuICBncmlkLWFyZWE6IGFib3V0MjsgXHJcbn1cclxuI3Byb2plY3RzX3tcclxuICBncmlkLWFyZWE6IHByb2plY3QxOyBcclxufVxyXG4jcHJvamVjdHN7XHJcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0MjsgXHJcbn1cclxuI2NvbnRhY3Rfe1xyXG4gIGdyaWQtYXJlYTogY29udGFjdDE7IFxyXG59XHJcbiNjb250YWN0e1xyXG4gIGdyaWQtYXJlYTogY29udGFjdDI7IFxyXG59XHJcbiNjb250YWN0XywgI3Byb2plY3RzX3tcclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuI3Byb2plY3Rze1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICNhcmVhe1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgI2FyZWF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNDAxcHgpe1xyXG4gICNhcmVhe1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8qbWFyZ2luLXJpZ2h0OiAxMCU7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICAjY29udGFjdF8sICNwcm9qZWN0c197XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG4gICNwcm9qZWN0c3tcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gICNjb250YWN0XywgI3Byb2plY3RzX3tcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICB9XHJcbiAgI2FyZWF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB9XHJcbiAgI2Fib3V0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuI3Bob25le1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltYWdlcy9tYWludy5qcGVnJyk7XHJcbiAgaGVpZ2h0OiAxOTJweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxufVxyXG4jZHJ1cGFsd3JhcHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJpbmxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGxheWVyXCI7XHJcbn1cclxuI2lubGF5e1xyXG4gIGdyaWQtYXJlYTogaW5sYXk7IFxyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59XHJcbiNwbGF5ZXJ7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXI7IFxyXG59XHJcbiNhbmd3cmFwe1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcImlwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXBhZFwiO1xyXG59XHJcbiNpcGhvbmV7XHJcbiAgZ3JpZC1hcmVhOiBpcGhvbmU7XHJcbiAgaGVpZ2h0OjMxN3B4O1xyXG59XHJcbiNpcGFke1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGdyaWQtYXJlYTogaXBhZDtcclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLyoxMjA1cHgqL1xyXG4gICNwaG9uZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltYWdlcy9tYWluLmpwZWcnKTtcclxuICAgIGhlaWdodDogNjA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgfVxyXG4gICNwcm9qZWN0c197XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgfVxyXG4gICNjb250YWN0X3tcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICB9XHJcbiAgI3Byb2plY3Rze1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuICAjZHJ1cGFsd3JhcHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJpbmxheSBwbGF5ZXJcIjtcclxuICB9XHJcbiAgI2lubGF5e1xyXG4gICAgZ3JpZC1hcmVhOiBpbmxheTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gIH1cclxuICAjcGxheWVye1xyXG4gICAgZ3JpZC1hcmVhOiBwbGF5ZXI7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICNkcnVwYWx3cmFwe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcImlubGF5IHBsYXllclwiO1xyXG4gIH1cclxuICAjaW5sYXl7XHJcbiAgICBncmlkLWFyZWE6IGlubGF5OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgfVxyXG4gICNwbGF5ZXJ7XHJcbiAgICBncmlkLWFyZWE6IHBsYXllcjsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAjcHJvamVjdHNfe1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-body',
          templateUrl: './body.component.html',
          styleUrls: ['./body.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 6,
      vars: 0,
      consts: [["id", "foot", 1, "footer-primary"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA9 2020 McMaster University Library, Selina Winter, Stock Photos from Pexels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#foot[_ngcontent-%COMP%]{\r\n  \r\n    color: #ffffff;\r\n    text-align: center;\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0lBQzdCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290e1xyXG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDUxOyovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-nar/main-nar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/main-nar/main-nar.component.ts ***!
    \************************************************/

  /*! exports provided: MainNarComponent */

  /***/
  function srcAppMainNarMainNarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNarComponent", function () {
      return MainNarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../body/body.component */
    "./src/app/body/body.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MainNarComponent_button_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNarComponent_button_19_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        hidden: a0
      };
    };

    var MainNarComponent = function MainNarComponent(breakpointObserver) {
      _classCallCheck(this, MainNarComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    };

    MainNarComponent.ɵfac = function MainNarComponent_Factory(t) {
      return new (t || MainNarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    MainNarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainNarComponent,
      selectors: [["app-main-nar"]],
      decls: 31,
      vars: 17,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", "fullscreen", "", "mode", "over", "hasBackdrop", "true", 1, "sidenav", 3, "ngClass", "mode", "opened"], ["drawer", "", "container", ""], ["mat-list-item", "", "href", "#about_"], ["mat-list-item", "", "href", "#projects_"], ["mat-list-item", "", "href", "#contact_"], ["color", "accent"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "space"], ["href", "#about_", 1, "bar"], ["href", "#projects_", 1, "bar"], ["href", "#contact_", 1, "bar"], ["id", "body"], ["id", "footer", "color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
      template: function MainNarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-sidenav-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-toolbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainNarComponent_button_19_Template, 3, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-body", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.isHandset$)))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, ctx.isHandset$) === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, ctx.isHandset$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  \n \n}\n#body[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]{\n  height: 500px;\n}\n@media(max-width: 599px) {\n  #container[_ngcontent-%COMP%] {\n    top: 5px !important;\n  }\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  \n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.hidden[_ngcontent-%COMP%]{\n  display: none;\n}\n.space[_ngcontent-%COMP%]{\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n.bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n  text-decoration: none;\n}\n.bar[_ngcontent-%COMP%]:hover{\n  color: #212529;\n}\n.btn[_ngcontent-%COMP%]{\n  background-color: #0092e4;\n  border-radius: 50%;\n  font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\n}\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\n outline: 0;\n box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);\n border-radius: 50%;\n font-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\n}\n.btn[_ngcontent-%COMP%]:hover {\ncolor: #212529;\ntext-decoration: none;\nborder-radius: 50%;\n}\nbutton[_ngcontent-%COMP%]:not(:disabled), [type=\"button\"][_ngcontent-%COMP%]:not(:disabled), [type=\"reset\"][_ngcontent-%COMP%]:not(:disabled), [type=\"submit\"][_ngcontent-%COMP%]:not(:disabled) {\ncursor: pointer;\n}\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n}\n.btn-li[_ngcontent-%COMP%] {\ncolor: #fff;\nbackground-color: #0082ca !important;\nfont-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\n}\n.btn[_ngcontent-%COMP%] {\nmargin: .375rem;\ncolor: inherit;\n\nword-wrap: break-word;\nwhite-space: normal;\ncursor: pointer;\nborder: 0;\nborder-radius: 50%;\npadding: .84rem .84rem; \nfont-size: .81rem;\nfont-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\n    font-weight: 300;\n    width: 47px;\n    height: 47px;\n    padding: 0;\n    margin: 10px;\n    overflow: hidden;\n    vertical-align: middle;\n    position: relative;\n    z-index: 1;\n    font-size: 1rem;\n    line-height: 1.5;\n    text-decoration: none;\n}\n.waves-effect[_ngcontent-%COMP%] {\nposition: relative;\noverflow: hidden;\n-webkit-user-select: none;\n   -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n-webkit-tap-highlight-color: transparent;\n}\n.btn[_ngcontent-%COMP%] {\ndisplay: inline-block;\nfont-weight: 400;\ntext-align: center;\nvertical-align: middle;\nline-height: 1.5;\nfont-family: \"Source Sans\", \"Arial\",\"Roboto\",sans-serif;\nfont-weight: bold;\n}\n@media only screen and (max-width: 678px) {\n  .bar[_ngcontent-%COMP%]{\ndisplay: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXIvbWFpbi1uYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakIsd0JBQXdCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVEQUF1RDtBQUN6RDtBQUNBO0NBQ0MsVUFBVTtDQUVWLHdFQUF3RTtDQUN4RSxrQkFBa0I7Q0FDbEIsdURBQXVEO0FBQ3hEO0FBQ0E7QUFDQSxjQUFjO0FBQ2QscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYLG9DQUFvQztBQUNwQyx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2QsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsc0JBQXNCLEVBQUUsWUFBWTtBQUNwQyxpQkFBaUI7QUFDakIsdURBQXVEO0lBQ25ELGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHlCQUFpQjtHQUFqQixzQkFBaUI7SUFBakIscUJBQWlCO1FBQWpCLGlCQUFpQjtBQUNqQix3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEIsdURBQXVEO0FBQ3ZELGlCQUFpQjtBQUNqQjtBQUVBO0VBQ0U7QUFDRixhQUFhO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmFyL21haW4tbmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qaGVpZ2h0OiAxMDAlOyovXG4gLyogdG9wOiA1cHggIWltcG9ydGFudDsqL1xufVxuI2JvZHksICNmb290ZXJ7XG4gIGhlaWdodDogNTAwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOiA1OTlweCkge1xuICAjY29udGFpbmVyIHtcbiAgICB0b3A6IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuLmhpZGRlbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zcGFjZXtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iYXI6aG92ZXJ7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTJlNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2Fuc1wiLCBcIkFyaWFsXCIsXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xufVxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmUge1xuIG91dGxpbmU6IDA7XG4gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLDAsMCwwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG4gYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuIGJvcmRlci1yYWRpdXM6IDUwJTtcbiBmb250LWZhbWlseTogXCJTb3VyY2UgU2Fuc1wiLCBcIkFyaWFsXCIsXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xufVxuLmJ0bjpob3ZlciB7XG5jb2xvcjogIzIxMjUyOTtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmJ1dHRvbjpub3QoOmRpc2FibGVkKSwgW3R5cGU9XCJidXR0b25cIl06bm90KDpkaXNhYmxlZCksIFt0eXBlPVwicmVzZXRcIl06bm90KDpkaXNhYmxlZCksIFt0eXBlPVwic3VibWl0XCJdOm5vdCg6ZGlzYWJsZWQpIHtcbmN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiwgaHRtbCBbdHlwZT1cImJ1dHRvblwiXSwgW3R5cGU9XCJyZXNldFwiXSwgW3R5cGU9XCJzdWJtaXRcIl0ge1xuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLW1vei1hcHBlYXJhbmNlOiBub25lO1xuYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5idG4tbGkge1xuY29sb3I6ICNmZmY7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MmNhICFpbXBvcnRhbnQ7XG5mb250LWZhbWlseTogXCJTb3VyY2UgU2Fuc1wiLCBcIkFyaWFsXCIsXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xufVxuLmJ0biB7XG5tYXJnaW46IC4zNzVyZW07XG5jb2xvcjogaW5oZXJpdDtcbi8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xud29yZC13cmFwOiBicmVhay13b3JkO1xud2hpdGUtc3BhY2U6IG5vcm1hbDtcbmN1cnNvcjogcG9pbnRlcjtcbmJvcmRlcjogMDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbnBhZGRpbmc6IC44NHJlbSAuODRyZW07IC8qIDIuMTRyZW07Ki9cbmZvbnQtc2l6ZTogLjgxcmVtO1xuZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnNcIiwgXCJBcmlhbFwiLFwiUm9ib3RvXCIsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHdpZHRoOiA0N3B4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5vdmVyZmxvdzogaGlkZGVuO1xudXNlci1zZWxlY3Q6IG5vbmU7XG4td2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0biB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5mb250LXdlaWdodDogNDAwO1xudGV4dC1hbGlnbjogY2VudGVyO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmxpbmUtaGVpZ2h0OiAxLjU7XG5mb250LWZhbWlseTogXCJTb3VyY2UgU2Fuc1wiLCBcIkFyaWFsXCIsXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc4cHgpIHtcbiAgLmJhcntcbmRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-nar',
          templateUrl: './main-nar.component.html',
          styleUrls: ['./main-nar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angularprojects\website\my-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map