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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newcustomer.page */ "./src/app/newcustomer/newcustomer.page.ts");







const routes = [
    {
        path: '',
        component: _newcustomer_page__WEBPACK_IMPORTED_MODULE_6__["NewcustomerPage"]
    }
];
let NewcustomerPageModule = class NewcustomerPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let NewcustomerPage = class NewcustomerPage {
    constructor(data, loading, alertController) {
        this.data = data;
        this.loading = loading;
        this.alertController = alertController;
        this.showError = false;
    }
    ngOnInit() {
        this.data.selectedStore.subscribe(st => {
            this.store = st;
        });
    }
    addCustomer() {
        if (!this.username) {
            return;
        }
        this.presentLoading("جاري الحفظ").then(() => {
            this.data.newCustomer(this.username, this.store.StoreID).subscribe(s => {
                if (s) {
                    this.presentAlert();
                }
                else {
                    this.showError = true;
                }
            });
            this.loading.dismiss();
        });
    }
    presentLoading(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: msg
            });
            yield loading.present();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "<b>تم الحفظ</b> <ion-icon name=md-done-all></ion-icon>",
                buttons: ["موافق"]
            });
            yield alert.present();
        });
    }
};
NewcustomerPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=newcustomer-newcustomer-module-es2015.js.map