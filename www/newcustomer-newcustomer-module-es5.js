(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcustomer-newcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newcustomer/newcustomer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newcustomer/newcustomer.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      زبون جديد\n    </ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">الاسم <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n\n      <ion-button block color=\"primary\" (click)=\"addCustomer()\">\n        + اضافة\n      </ion-button>\n\n    </ion-card-content>\n    <ion-note color=\"danger\" *ngIf=\"showError\">حصلت مشكلة في الاضافة</ion-note>\n  </ion-card>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/newcustomer/newcustomer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.module.ts ***!
  \***************************************************/
/*! exports provided: NewcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerPageModule", function() { return NewcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newcustomer.page */ "./src/app/newcustomer/newcustomer.page.ts");







var routes = [
    {
        path: '',
        component: _newcustomer_page__WEBPACK_IMPORTED_MODULE_6__["NewcustomerPage"]
    }
];
var NewcustomerPageModule = /** @class */ (function () {
    function NewcustomerPageModule() {
    }
    NewcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newcustomer_page__WEBPACK_IMPORTED_MODULE_6__["NewcustomerPage"]]
        })
    ], NewcustomerPageModule);
    return NewcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/newcustomer/newcustomer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Y3VzdG9tZXIvRTpcXHN1cGVybWFya2V0XFxzdXBlcm1hcmtldDJcXFN1cGVyTWFya2V0L3NyY1xcYXBwXFxuZXdjdXN0b21lclxcbmV3Y3VzdG9tZXIucGFnZS5zY3NzIiwic3JjL2FwcC9uZXdjdXN0b21lci9uZXdjdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uZXdjdXN0b21lci9uZXdjdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG59IiwiaW9uLWlucHV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newcustomer/newcustomer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.page.ts ***!
  \*************************************************/
/*! exports provided: NewcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerPage", function() { return NewcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var NewcustomerPage = /** @class */ (function () {
    function NewcustomerPage(data, loading, alertController) {
        this.data = data;
        this.loading = loading;
        this.alertController = alertController;
        this.showError = false;
    }
    NewcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data.selectedStore.subscribe(function (st) {
            _this.store = st;
        });
    };
    NewcustomerPage.prototype.addCustomer = function () {
        var _this = this;
        if (!this.username) {
            return;
        }
        this.presentLoading("جاري الحفظ").then(function () {
            _this.data.newCustomer(_this.username, _this.store.StoreID).subscribe(function (s) {
                if (s) {
                    _this.presentAlert();
                }
                else {
                    _this.showError = true;
                }
            });
            _this.loading.dismiss();
        });
    };
    NewcustomerPage.prototype.presentLoading = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: msg
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewcustomerPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "<b>تم الحفظ</b> <ion-icon name=md-done-all></ion-icon>",
                            buttons: ["موافق"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewcustomerPage.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    NewcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-newcustomer",
            template: __webpack_require__(/*! raw-loader!./newcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/newcustomer/newcustomer.page.html"),
            styles: [__webpack_require__(/*! ./newcustomer.page.scss */ "./src/app/newcustomer/newcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], NewcustomerPage);
    return NewcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=newcustomer-newcustomer-module-es5.js.map