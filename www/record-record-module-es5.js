(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-record-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/record/record.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/record/record.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      سجل جديد\r\n    </ion-title>\r\n    <ion-toolbar>\r\n      <ion-searchbar animated [(ngModel)]=\"searchTerm\" (ionChange)=\"getFilterd()\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-card *ngIf=\"searchEnabled\">\r\n          <ion-card-content *ngFor=\"let item of filteredRecords\">\r\n            <ion-item (click)=\"selectCustomer(item.UserID, item.Name)\">\r\n              <ion-label>{{ item.Name }}</ion-label>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"showInput\">\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>{{ selectedUser.Name }}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content justify-content-center class=\"ion-text-center\">\r\n            {{sum}}\r\n            <table class=\"ion-text-center\">\r\n              <tr>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(1)\">1</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(2)\">2</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(3)\">3</ion-button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(4)\">4</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(5)\">5</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(6)\">6</ion-button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(7)\">7</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(8)\">8</ion-button>\r\n                </td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(9)\">9</ion-button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td></td>\r\n                <td>\r\n                  <ion-button color=\"light\" (click)=\"addValue(0)\">0</ion-button>\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"3\">\r\n                  <ion-button class='paybtn' color=\"danger\" (click)=\"addValue(10)\">حذف</ion-button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"3\">\r\n                  <ion-button class='paybtn' (click)=\"addToAccount()\">اضافة</ion-button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/record/record.module.ts":
/*!*****************************************!*\
  !*** ./src/app/record/record.module.ts ***!
  \*****************************************/
/*! exports provided: RecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageModule", function() { return RecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record.page */ "./src/app/record/record.page.ts");







var routes = [
    {
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_6__["RecordPage"]
    }
];
var RecordPageModule = /** @class */ (function () {
    function RecordPageModule() {
    }
    RecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_record_page__WEBPACK_IMPORTED_MODULE_6__["RecordPage"]]
        })
    ], RecordPageModule);
    return RecordPageModule;
}());



/***/ }),

/***/ "./src/app/record/record.page.scss":
/*!*****************************************!*\
  !*** ./src/app/record/record.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-title {\n  text-align: center;\n}\n\ntable {\n  width: 100%;\n  direction: ltr;\n}\n\nion-card-content {\n  font-size: 40px;\n}\n\n.paybtn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JkL0U6XFxzdXBlcm1hcmtldFxcc3VwZXJtYXJrZXQyXFxTdXBlck1hcmtldC9zcmNcXGFwcFxccmVjb3JkXFxyZWNvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNvcmQvcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5wYXlidG4ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4iLCJpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5wYXlidG4ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/record/record.page.ts":
/*!***************************************!*\
  !*** ./src/app/record/record.page.ts ***!
  \***************************************/
/*! exports provided: RecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPage", function() { return RecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RecordPage = /** @class */ (function () {
    function RecordPage(data, loading, alertController) {
        this.data = data;
        this.loading = loading;
        this.alertController = alertController;
        this.searchEnabled = true;
        this.showInput = false;
        this.sum = '';
        this.selectedUser = {
            _id: '',
            Name: ''
        };
    }
    RecordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data.selectedStore.subscribe(function (s) {
            _this.store = s;
        });
        this.presentLoading('يتم التحميل...').then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    RecordPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: '<b>تم الحفظ</b> <ion-icon name=md-done-all></ion-icon>',
                            buttons: ['موافق']
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
    RecordPage.prototype.getRecord = function () {
        var _this = this;
        return new Promise(function (resolve, rej) {
            return _this.data.getRecords(_this.store.StoreID).subscribe(function (res) {
                _this.records = res;
                _this.filteredRecords = res;
                resolve();
            });
        });
    };
    RecordPage.prototype.getFilterd = function () {
        var _this = this;
        console.log('search val ', this.searchTerm);
        console.log('records ', this.records);
        this.searchEnabled = true;
        this.filteredRecords = this.records.filter(function (s) {
            console.log(s);
            return s.Name.includes(_this.searchTerm);
        });
    };
    RecordPage.prototype.selectCustomer = function (id, name) {
        this.selectedUser.Name = name;
        this.selectedUser._id = id;
        this.showInput = true;
        this.searchEnabled = false;
    };
    RecordPage.prototype.addValue = function (val) {
        val === 10 ? (this.sum = '') : (this.sum += val);
    };
    RecordPage.prototype.addToAccount = function () {
        var _this = this;
        if (!this.sum) {
            return;
        }
        this.presentLoading('يتم الحفظ').then(function () {
            _this.data.addTransaction(_this.selectedUser._id, _this.sum).subscribe(function (s) {
                console.log('finished trans', s);
                _this.loading.dismiss();
                if (s) {
                    _this.presentAlert();
                }
            });
        });
    };
    RecordPage.prototype.presentLoading = function (msg) {
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
    RecordPage.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record',
            template: __webpack_require__(/*! raw-loader!./record.page.html */ "./node_modules/raw-loader/index.js!./src/app/record/record.page.html"),
            styles: [__webpack_require__(/*! ./record.page.scss */ "./src/app/record/record.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RecordPage);
    return RecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=record-record-module-es5.js.map