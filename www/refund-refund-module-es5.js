(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refund-refund-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/refund/refund.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/refund/refund.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      تسديد\r\n    </ion-title>\r\n    <img src=\"../../assets/lg.png\" slot=\"end\" margin>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar dir=\"rtl\" animated [(ngModel)]=\"searchTerm\" (ionChange)=\"getFilterd()\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-grid fixed>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-card *ngIf=\"searchEnabled\">\r\n        <ion-card-content *ngFor=\"let item of filteredRecords\" dir=\"rtl\">\r\n          <ion-item (click)=\"selectCustomer(item.UserID, item.Name)\">\r\n            <ion-label>{{ item.Name }}</ion-label>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row dir=\"rtl\" *ngIf=\"showInput\">\r\n    <ion-col size=\"12\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>{{ selectedUser.Name }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-text-center\">\r\n          <ion-input type=\"text\" placeholder=\"0\" class=\"ion-text-center\" [(ngModel)]=\"amount\"></ion-input>\r\n          <ion-button (click)=\"refundCust()\">\r\n            موافق\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>"

/***/ }),

/***/ "./src/app/refund/refund.module.ts":
/*!*****************************************!*\
  !*** ./src/app/refund/refund.module.ts ***!
  \*****************************************/
/*! exports provided: RefundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundPageModule", function() { return RefundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refund.page */ "./src/app/refund/refund.page.ts");







var routes = [
    {
        path: '',
        component: _refund_page__WEBPACK_IMPORTED_MODULE_6__["RefundPage"]
    }
];
var RefundPageModule = /** @class */ (function () {
    function RefundPageModule() {
    }
    RefundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_refund_page__WEBPACK_IMPORTED_MODULE_6__["RefundPage"]]
        })
    ], RefundPageModule);
    return RefundPageModule;
}());



/***/ }),

/***/ "./src/app/refund/refund.page.scss":
/*!*****************************************!*\
  !*** ./src/app/refund/refund.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-title {\n  text-align: center;\n}\n\ntable {\n  width: 100%;\n  direction: ltr;\n}\n\nion-card-content {\n  font-size: 40px;\n}\n\n.paybtn {\n  width: 100%;\n}\n\nimg {\n  width: 10%;\n}\n\nion-card {\n  background-image: url('bg.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmdW5kL0U6XFxzdXBlcm1hcmtldFxcc3VwZXJtYXJrZXQyXFxTdXBlck1hcmtldC9zcmNcXGFwcFxccmVmdW5kXFxyZWZ1bmQucGFnZS5zY3NzIiwic3JjL2FwcC9yZWZ1bmQvcmVmdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtBQ0tKOztBREhBO0VBQ0ksK0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3JlZnVuZC9yZWZ1bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4ucGF5YnRuIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xyXG59IiwiaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucGF5YnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JnLnBuZ1wiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/refund/refund.page.ts":
/*!***************************************!*\
  !*** ./src/app/refund/refund.page.ts ***!
  \***************************************/
/*! exports provided: RefundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundPage", function() { return RefundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var RefundPage = /** @class */ (function () {
    function RefundPage(data, loading, alertController) {
        this.data = data;
        this.loading = loading;
        this.alertController = alertController;
        this.searchEnabled = true;
        this.showInput = false;
        this.selectedUser = {
            _id: "",
            Name: ""
        };
    }
    RefundPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data.selectedStore.subscribe(function (s) {
            _this.store = s;
        });
        this.presentLoading("يتم التحميل...").then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecord()];
                    case 1:
                        _a.sent();
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RefundPage.prototype.getFilterd = function () {
        var _this = this;
        console.log("search val ", this.searchTerm);
        console.log("records ", this.records);
        this.searchEnabled = true;
        this.filteredRecords = this.records.filter(function (s) {
            console.log(s);
            return s.Name.includes(_this.searchTerm);
        });
    };
    RefundPage.prototype.selectCustomer = function (id, name) {
        this.selectedUser.Name = name;
        this.selectedUser._id = id;
        this.showInput = true;
        this.searchEnabled = false;
    };
    RefundPage.prototype.getRecord = function () {
        var _this = this;
        return new Promise(function (resolve, rej) {
            return _this.data.getRecords(_this.store.StoreID).subscribe(function (res) {
                _this.records = res;
                _this.filteredRecords = res;
                resolve();
            });
        });
    };
    RefundPage.prototype.presentLoading = function (msg) {
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
    RefundPage.prototype.refundCust = function () {
        var _this = this;
        console.log(this.amount);
        if (this.amount === undefined) {
            return;
        }
        this.presentLoading("جاري الحفظ...").then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data
                            .refundCustomer(this.selectedUser._id, this.amount * -1)
                            .then(function (s) {
                            s.subscribe(function (res) {
                                console.log(res);
                                _this.loading.dismiss();
                                _this.amount = 0;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        //
    };
    RefundPage.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RefundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-refund",
            template: __webpack_require__(/*! raw-loader!./refund.page.html */ "./node_modules/raw-loader/index.js!./src/app/refund/refund.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./refund.page.scss */ "./src/app/refund/refund.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RefundPage);
    return RefundPage;
}());



/***/ })

}]);
//# sourceMappingURL=refund-refund-module-es5.js.map