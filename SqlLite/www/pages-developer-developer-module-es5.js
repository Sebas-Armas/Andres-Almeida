(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-developer-developer-module"], {
    /***/
    "1R+p":
    /*!***************************************************!*\
      !*** ./src/app/pages/developer/developer.page.ts ***!
      \***************************************************/

    /*! exports provided: DeveloperPage */

    /***/
    function RP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeveloperPage", function () {
        return DeveloperPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_developer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./developer.page.html */
      "WnQZ");
      /* harmony import */


      var _developer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./developer.page.scss */
      "En4o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/database.service */
      "ZJFI");

      var DeveloperPage = /*#__PURE__*/function () {
        function DeveloperPage(route, db, router, toast) {
          _classCallCheck(this, DeveloperPage);

          this.route = route;
          this.db = db;
          this.router = router;
          this.toast = toast;
          this.developer = null;
        }

        _createClass(DeveloperPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function (params) {
              var devId = params.get('id');

              _this.db.getDeveloper(devId).then(function (data) {
                _this.developer = data;
              });
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this2 = this;

            this.db.deleteDeveloper(this.developer.id).then(function () {
              _this2.router.navigateByUrl('/');
            });
          }
        }, {
          key: "updateDeveloper",
          value: function updateDeveloper() {
            var _this3 = this;

            this.db.updateDeveloper(this.developer).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.toast.create({
                          message: 'Developer updated',
                          duration: 3000
                        });

                      case 2:
                        toast = _context.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return DeveloperPage;
      }();

      DeveloperPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      DeveloperPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-developer',
        template: _raw_loader_developer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_developer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeveloperPage);
      /***/
    },

    /***/
    "En4o":
    /*!*****************************************************!*\
      !*** ./src/app/pages/developer/developer.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function En4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZlbG9wZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "WnQZ":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developer/developer.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function WnQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"developers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Marca</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"delete()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <div *ngIf=\"developer\">\n    <ion-item>\n      <ion-label position=\"stacked\">Ingrese la Marca</ion-label>\n      <ion-input [(ngModel)]=\"developer.name\" placeholder=\"Developer Name\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"block\" (click)=\"updateDeveloper()\">Update Developer Info</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "dPE5":
    /*!*************************************************************!*\
      !*** ./src/app/pages/developer/developer-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DeveloperPageRoutingModule */

    /***/
    function dPE5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeveloperPageRoutingModule", function () {
        return DeveloperPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _developer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./developer.page */
      "1R+p");

      var routes = [{
        path: '',
        component: _developer_page__WEBPACK_IMPORTED_MODULE_3__["DeveloperPage"]
      }];

      var DeveloperPageRoutingModule = function DeveloperPageRoutingModule() {
        _classCallCheck(this, DeveloperPageRoutingModule);
      };

      DeveloperPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeveloperPageRoutingModule);
      /***/
    },

    /***/
    "mJAW":
    /*!*****************************************************!*\
      !*** ./src/app/pages/developer/developer.module.ts ***!
      \*****************************************************/

    /*! exports provided: DeveloperPageModule */

    /***/
    function mJAW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeveloperPageModule", function () {
        return DeveloperPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _developer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./developer-routing.module */
      "dPE5");
      /* harmony import */


      var _developer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./developer.page */
      "1R+p");

      var DeveloperPageModule = function DeveloperPageModule() {
        _classCallCheck(this, DeveloperPageModule);
      };

      DeveloperPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _developer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeveloperPageRoutingModule"]],
        declarations: [_developer_page__WEBPACK_IMPORTED_MODULE_6__["DeveloperPage"]]
      })], DeveloperPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-developer-developer-module-es5.js.map