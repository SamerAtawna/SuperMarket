(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      حسابات\r\n    </ion-title>\r\n    <ion-icon slot=\"end\" name=\"md-refresh\" (click)=\"getData()\"></ion-icon>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar animated [(ngModel)]=\"searchTerm\" (ionChange)=\"getFilterd()\"></ion-searchbar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-list *ngFor=\"let record of filteredRecords\">\r\n    <ion-item-sliding side=\"end\">\r\n      <ion-item (click)=\"presentModal(record.UserID, record.Name, record.Amount)\">\r\n        <ion-label>\r\n          <ion-label style=\"float:right\">{{record.Name}}</ion-label>\r\n          <p *ngIf=\"record.Amount !== null\" style=\"float:left\">{{record.Amount | sumit}}</p>\r\n          <p *ngIf=\"record.Amount === null\" style=\"float:left\">0</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\" style=\"direction:ltr\">\r\n        <ion-item-option color=\"primary\">\r\n          <ion-icon slot=\"end\" name=\"more\"></ion-icon>\r\n          استلام مبلغ\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n\r\n\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _sumit_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sumit.pipe */ "./src/app/sumit.pipe.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _sumit_pipe__WEBPACK_IMPORTED_MODULE_7__["SumitPipe"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-icon {\n  margin-left: 10px;\n  font-size: 30px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcc3VwZXJtYXJrZXRcXHN1cGVybWFya2V0MlxcU3VwZXJNYXJrZXQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../details-modal/details-modal.component */ "./src/app/details-modal/details-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





let HomePage = class HomePage {
    constructor(data, loading, modalController) {
        this.data = data;
        this.loading = loading;
        this.modalController = modalController;
        this.showInput = false;
        this.selectedUser = {
            Name: '',
            Id: 0,
            amount: ''
        };
    }
    getFilterd() {
        console.log('search val ', this.searchTerm);
        console.log('records ', this.records);
        this.filteredRecords = this.records.filter(s => {
            console.log(s);
            return s.Name.includes(this.searchTerm);
        });
    }
    getRecord() {
        return new Promise((resolve, rej) => {
            return this.data.getRecords(this.store.StoreID).subscribe(res => {
                console.log(res);
                this.filteredRecords = res;
                this.records = res;
                resolve();
            });
        });
    }
    getData() {
        this.presentLoading('...جاري التحميل')
            .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getRecord();
        }))
            .then(() => {
            this.loading.dismiss();
        });
    }
    ngOnInit() {
        this.data.selectedStore.subscribe(s => {
            console.log('store: ', s);
            this.store = s;
            this.getData();
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
    presentModal(id, name, amount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("amount is", amount);
            this.selectedUser.Id = id;
            this.selectedUser.Name = name;
            this.selectedUser.amount = amount;
            this.data.selectedCustObj.next(this.selectedUser);
            const modal = yield this.modalController.create({
                component: _details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsModalComponent"]
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], HomePage);



/***/ }),

/***/ "./src/app/sumit.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/sumit.pipe.ts ***!
  \*******************************/
/*! exports provided: SumitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumitPipe", function() { return SumitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SumitPipe = class SumitPipe {
    transform(value, ...args) {
        return `${value}₪`;
    }
};
SumitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sumit'
    })
], SumitPipe);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map