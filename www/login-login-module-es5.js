(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div>\n\n\n    <img src=\"../../assets/HsabatLogo.png\">\n  </div>\n  <div class=\"form\">\n\n    <form (ngSubmit)=\"loginAttempt()\">\n\n\n    <input type=\"text\" name=\"uname\" [(ngModel)]=\"uname\" placeholder=\"اسم المستخدم\" />\n    <input type=\"password\" name=\"pass\" [(ngModel)]=\"pass\" placeholder=\"كلمة المرور\" />\n    <button type=\"submit\">دخول</button>\n  </form>\n  </div>\n  <div>\n    <code>\n      v2.0\n    </code>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.login-page {\n  padding: 8% 0 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  direction: rtl;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #1e77b9;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover, .form button:active, .form button:focus {\n  background: #033257;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n}\nbody {\n  background: #76b852;\n  /* fallback for old browsers */\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  width: 200px;\n}\n.alertArabic {\n  direction: rtl;\n}\ncode {\n  color: silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXHN1cGVybWFya2V0XFxzdXBlcm1hcmtldDJcXFN1cGVyTWFya2V0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0RBQUE7QUFFUjtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDQ0Y7QURDQTtFQUNFLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7QURBQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDR0Y7QUREQTtFQUNFLG1CQUFBO0FDSUY7QURGQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLRjtBREhBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDTUY7QURKQTtFQUNFLGFBQUE7QUNPRjtBRExBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUY7QUROQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1NGO0FEUEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDVUY7QURSQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNXRjtBRFRBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNZRjtBRFZBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDYUY7QURYQTtFQUNFLGNBQUE7QUNjRjtBRFpBO0VBQ0UsbUJBQUE7RUFBcUIsOEJBQUE7RUFJckIscUZBQUE7RUFBQSxzREFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ2dCRjtBRGRBO0VBQ0UsWUFBQTtBQ2lCRjtBRGJBO0VBQ0UsY0FBQTtBQ2dCRjtBRGRBO0VBQ0UsYUFBQTtBQ2lCRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBwYWRkaW5nOiA4JSAwIDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDAgYXV0byAxMDBweDtcclxuICBwYWRkaW5nOiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuLmZvcm0gYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzFlNzdiOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMwMzMyNTc7XHJcbn1cclxuLmZvcm0gLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIGEge1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9ybSAucmVnaXN0ZXItZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIGgxIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcclxuICBjb2xvcjogI0VGM0IzQTtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjNzZiODUyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAgICAgIFxyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcblxyXG5cclxufVxyXG4uYWxlcnRBcmFiaWN7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuY29kZXtcclxuICBjb2xvcjpzaWx2ZXI7XHJcbn0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG4ubG9naW4tcGFnZSB7XG4gIHBhZGRpbmc6IDglIDAgMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICBwYWRkaW5nOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uZm9ybSBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogIzFlNzdiOTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybSBidXR0b246aG92ZXIsIC5mb3JtIGJ1dHRvbjphY3RpdmUsIC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMzMyNTc7XG59XG5cbi5mb3JtIC5tZXNzYWdlIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0gLm1lc3NhZ2UgYSB7XG4gIGNvbG9yOiAjNENBRjUwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiB7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjRUYzQjNBO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzc2Yjg1MjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NmI4NTIsICM4REMyNkYpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmFsZXJ0QXJhYmljIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmNvZGUge1xuICBjb2xvcjogc2lsdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(data, loading, alertController, router, menuCtrl, zone) {
        this.data = data;
        this.loading = loading;
        this.alertController = alertController;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.zone = zone;
    }
    LoginPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('password') && localStorage.getItem('username')) {
            this.pass = localStorage.getItem('password');
            this.uname = localStorage.getItem('username');
            this.loginAttempt();
            console.log('from localstorage');
        }
    };
    LoginPage.prototype.checkPassCode = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.data.checkLogin(_this.uname, _this.pass).subscribe(function (ps) {
                res(ps);
            });
        });
    };
    LoginPage.prototype.presentLoading = function (msg) {
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
    LoginPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: '<b>البيانات خاطئة</b> <ion-icon name=md-error></ion-icon>',
                            buttons: ['موافق'],
                            cssClass: 'alertArabic'
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
    LoginPage.prototype.loginAttempt = function () {
        var _this = this;
        if (!this.uname || !this.pass) {
            return;
        }
        this.presentLoading('يتم التحقق...')
            .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkPassCode().then(function (res) {
                            console.log('res => ', res);
                            if (Array.isArray(res)) {
                            }
                            if ((res.length === 0) || res === null) {
                                _this.presentAlert().then(function () {
                                    _this.loading.dismiss();
                                });
                            }
                            else {
                                _this.data.isAuthenticated = true;
                                localStorage.setItem('username', res[0].StoreName);
                                localStorage.setItem('password', res[0].Password);
                                _this.data.selectedStore.next(res[0]);
                                _this.router.navigateByUrl('home');
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .then(function () {
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map