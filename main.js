(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmain{\r\n  overflow-x: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWFpbntcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n<nav id=\"NavigationBar2\"class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container fluid\">\n      <!-- <div class=\"navbar-header\">\n        <a  href=\"#\" class=\"navbar-brand\">Standard Public High School</a>\n      </div> -->\n      <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-main\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\">Home</a></li>\n            <li><a routerLink=\"/Staff\">Staff</a></li>\n            <li><a routerLink=\"/Rules\">Rules</a></li>\n            <li><a routerLink=\"/ContactUs\">Contact Us</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><button class=\"btn btn-warning navbar-btn\" type=\"submit\">Apply</button></li>\n            </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StdPublicSchool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-carousel/image-carousel.component */ "./src/app/image-carousel/image-carousel.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_4__["ImageCarouselComponent"] },
    { path: 'Staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffComponent"] },
    { path: 'Rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_7__["RulesComponent"] },
    { path: 'ContactUs', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_4__["ImageCarouselComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_7__["RulesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact us Page</h1>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n\tbackground-color:#23415c;\r\n\tpadding: 0.5% 0;\r\n\tfont-size: 1.2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRlZmF1bHQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzIzNDE1YztcclxuXHRwYWRkaW5nOiAwLjUlIDA7XHJcblx0Zm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container fluid\">\n      <!-- <div class=\"navbar-header\">\n        <a  href=\"#\" class=\"navbar-brand\">Standard Public High School</a>\n      </div> -->\n      <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-main\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li a href=\"#\">Gallery</li>\n            <li><button class=\"btn btn-warning navbar-btn\" type=\"submit\">Apply</button></li>\n          </ul>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ImageCarousel {\r\n  margin-top: 4%;\r\n}\r\n\r\n.Second_Container {\r\n  margin-top: 30px;\r\n}\r\n\r\n.Second_Container_Text {\r\n  padding-bottom: 35px;\r\n}\r\n\r\n.Second_Image {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.School_Image {\r\n  width: 450px;\r\n  height: 400px;\r\n  }\r\n\r\n.Second_Container\r\n{\r\n  margin-top: 30px;\r\n}\r\n\r\n.Paragraph_Text {\r\n  font-family: 'Frank Ruhl Libre', serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.Third_Container {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.Third_Paragraph_Text {\r\n  font-family: 'Frank Ruhl Libre', serif;\r\n  font-size: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtY2Fyb3VzZWwvaW1hZ2UtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7R0FDYjs7QUFDSDs7RUFFRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLHVDQUF1QztFQUN2QyxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1jYXJvdXNlbC9pbWFnZS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0ltYWdlQ2Fyb3VzZWwge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG4uU2Vjb25kX0NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uU2Vjb25kX0NvbnRhaW5lcl9UZXh0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxufVxyXG4uU2Vjb25kX0ltYWdlIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uU2Nob29sX0ltYWdlIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbi5TZWNvbmRfQ29udGFpbmVyXHJcbntcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5QYXJhZ3JhcGhfVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFuayBSdWhsIExpYnJlJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uVGhpcmRfQ29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLlRoaXJkX1BhcmFncmFwaF9UZXh0IHtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rIFJ1aGwgTGlicmUnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--To make width full page-->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div id=\"ImageCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#ImageCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#ImageCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#ImageCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"item active\">\n            <img src=\"https://drive.google.com/uc?id=10maixws2r6XPxJhWevp0O1XVOLV6EBKg\" class=\"img-responsive\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://drive.google.com/uc?id=1abRmfdv7hmh7M2JuclurgOuD_Ej84nNJ\" class=\"img-responsive\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://drive.google.com/uc?id=1GSAIQBXp595nwP--OkBcsR-X83Fu1I-0\" class=\"img-responsive\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"Second_Container\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\" style=\"background-color:rgb(205, 231, 231)\">\n        <div class=\"Second_Container_Text\">\n          <h2>WELCOME TO STANDARD PUBLIC HIGH SCHOOL</h2>\n          <div class=\"Paragraph_Text\">\n            <p>\n              The New Burn Hall School at Srinagar was established in the face of formidable difficulties and challenges\n              after a spell of nine years following the tribal invasion in 1947.\n              This time, Fr. J. Boerkamp was given this task to resurrect the institution: a challenge, which he\n              accepted with remarkable courage and steadfast determination.\n              As the founding father and the first principal of the school, Fr. Boerkamp rendered yeomen service to the\n              cause of education in the valley.\n              It was at the request of Msgr. Shanks, that Fr. Boerkamp came to Srinagar from Abottabad in 1956.\n            </p>\n            <p>\n              Vel cu iisque intellegat argumentum. Sed expetenda efficiantur ei, ut eos choro decore constituto.\n              Eu sit definiebas posidonium, convenire consulatu ad pri, diam docendi necessitatibus eu nam.\n              Pericula similique adipiscing cu nec, vim et laudem causae meliore.\n              Nec no epicuri repudiare deseruisse.\n              Ei virtute perfecto quo, nostrud epicuri scripserit id mei, virtute scaevola pri ne.\n            </p>\n            <p>\n              Vel cu iisque intellegat argumentum. Sed expetenda efficiantur ei, ut eos choro decore constituto.\n              Eu sit definiebas posidonium, convenire consulatu ad pri, diam docendi necessitatibus eu nam.\n              Pericula similique adipiscing cu nec, vim et laudem causae meliore.\n              Nec no epicuri repudiare deseruisse.\n              Ei virtute perfecto quo, nostrud epicuri scripserit id mei, virtute scaevola pri ne.\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\" style=\"background-color: darkred;\">\n        <div class=\"Second_Image\">\n          <img src=\"https://i.imgur.com/9dxYiM2.jpg\" class=\"School_Image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"Third_Container\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h2>FACILITIES</h2>\n          <ul class=\"list-group\">\n              <li class=\"list-group-item\">SCHOOL CLINIC</li>\n              <li class=\"list-group-item\">TRANSPORT</li>\n              <li class=\"list-group-item\">CANTEEN</li>\n              <li class=\"list-group-item\">LIBRARY</li>\n              <li class=\"list-group-item\">LABORATORY</li>\n              <li class=\"list-group-item\">GYM</li>\n            </ul>\n      </div>\n      <div class=\"col-sm-8\">\n        <div class=\"Third_Container_Text\">\n        <h2 style=\"color: cadetblue\">Fr. Sebastian. N</h2>\n        <h4><em>Principal, Standard Public High School.</em></h4>\n        <div class=\"Third_Paragraph_Text\">\n        <p>\n            At the very outset let me express my sincere thanks to all of you for your obvious valuable assiduous cooperation and contribution to Burn Hall School,\n            throughout its existence.I specially acknowledge your extreme efforts to succour in maintaining its stupendous past and ameliorating future even in the midst of all turbulence of the past.\n            As I extend my good wishes to all of you I also pray and entreat to God Almighty for a better academic session 2015 and more.\n          </p>\n          <p>\n              At the very outset let me express my sincere thanks to all of you for your obvious valuable assiduous cooperation and contribution to Burn Hall School,\n              throughout its existence.I specially acknowledge your extreme efforts to succour in maintaining its stupendous past and ameliorating future even in the midst of all turbulence of the past.\n              As I extend my good wishes to all of you I also pray and entreat to God Almighty for a better academic session 2015 and more.\n            </p>\n          </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: ImageCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselComponent", function() { return ImageCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCarouselComponent = /** @class */ (function () {
    function ImageCarouselComponent() {
    }
    ImageCarouselComponent.prototype.ngOnInit = function () {
    };
    ImageCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-carousel',
            template: __webpack_require__(/*! ./image-carousel.component.html */ "./src/app/image-carousel/image-carousel.component.html"),
            styles: [__webpack_require__(/*! ./image-carousel.component.css */ "./src/app/image-carousel/image-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageCarouselComponent);
    return ImageCarouselComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVsZXMvcnVsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgcGFkZGluZzogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rules/rules.component.html":
/*!********************************************!*\
  !*** ./src/app/rules/rules.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Rules Page\n</h1>\n"

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgcGFkZGluZzogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Staff Page\n</h1>\n"

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffComponent = /** @class */ (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kunal\StdPublicSchool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map