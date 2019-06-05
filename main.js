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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-story mat-elevation-z5\">\n    <mat-card-title>\n        <h2>whoami</h2>\n        <p><b>Muhammad Shehriyar Qureshi</b>, a <b>Self-Taught Software Developer</b>.</p>\n    </mat-card-title>\n</mat-card>\n\n<mat-card class=\"my-story mat-elevation-z5\">\n    <mat-card-title>\n        <h2>Skills</h2>\n    </mat-card-title>\n\n\n    <div class=\"skills-container\">\n        <mat-card class=\"skill-card mat-elevation-z5\">\n            <mat-card-title>\n                <h2>Front-End Skills</h2>\n            </mat-card-title>\n            <mat-card-content>\n                <ul>\n                    <li>\n                        <p>HTML</p>\n                    </li>\n                    <li>\n                        <p>CSS</p>\n                    </li>\n                    <li>\n                        <p>Angular</p>\n                    </li>\n                    <li>\n                        <p>pyGTK</p>\n                    </li>\n                </ul>\n            </mat-card-content>\n        </mat-card>\n        <mat-card class=\"skill-card mat-elevation-z5\">\n            <mat-card-title>\n                <h2>Back-End Skills</h2>\n            </mat-card-title>\n            <mat-card-content>\n                <ul>\n                    <li>\n                        <p>Java</p>\n                    </li>\n                    <li>\n                        <p>Spring Boot</p>\n                    </li>\n                    <li>\n                        <p>Spring Security</p>\n                    </li>\n                    <li>\n                        <p>JDBC</p>\n                    </li>\n                    <li>\n                        <p>Hibernate ORM</p>\n                    </li>\n                    <li>\n                        <p>Python</p>\n                    </li>\n                </ul>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"skill-card mat-elevation-z5\">\n            <mat-card-title>\n                <h2>Database Skills</h2>\n            </mat-card-title>\n            <mat-card-content>\n                <ul>\n                    <li>\n                        <p>PostgreSQL</p>\n                    </li>\n                    <li>\n                        <p>SQLite</p>\n                    </li>\n                    <li>\n                        <p>PostGIS</p>\n                    </li>\n                    <li>\n                        <p>pgAdmin</p>\n                    </li>\n                </ul>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"skill-card mat-elevation-z5\">\n            <mat-card-title>\n                <h2>Other Skills</h2>\n            </mat-card-title>\n            <mat-card-content>\n                <ul>\n                    <li>\n                        <p>RESTful Web Services</p>\n                    </li>\n                    <li>\n                        <p>Geographic Information System</p>\n                    </li>\n                    <li>\n                        <p>Linux</p>\n                    </li>\n                    <li>\n                        <p>Bash Scripting</p>\n                    </li>\n                    <li>\n                        <p>Version Control (Git/GitHub/Bitbucket)</p>\n                    </li>\n                    <li>\n                        <p>Apache Tomcat</p>\n                    </li>\n                    <li>\n                        <p>JSON</p>\n                    </li>\n                    <li>\n                        <p>XML</p>\n                    </li>\n                    <li>\n                        <p>Regular Expressions</p>\n                    </li>\n                    <li>\n                        <p>Vim</p>\n                    </li>\n                </ul>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</mat-card>\n<mat-card class=\"my-work-experience mat-elevation-z5\">\n    <mat-card-title>\n        <h2>Work Experience</h2>\n    </mat-card-title>\n\n    <div class=\"experience-container\">\n        <mat-card class=\"experience-card mat-elevation-z5\">\n            <mat-card-title>\n                <h3>TPL Maps Pvt Ltd</h3>\n                <p>Software Engineer</p>\n            </mat-card-title>\n            <mat-card-subtitle>\n                <p>April 2019 - Present</p>\n            </mat-card-subtitle>\n            <mat-card-content>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"experience-card mat-elevation-z5\">\n                <mat-card-title>\n                    <h3>Ufone</h3>\n                    <p>Software Developer Intern</p>\n                </mat-card-title>\n                <mat-card-subtitle>\n                    <p>December 2018 - February 2019</p>\n                </mat-card-subtitle>\n                <mat-card-content>\n                </mat-card-content>\n            </mat-card>\n    </div>\n</mat-card>\n\n<mat-card class=\"home-setup-card mat-elevation-z5\">\n    <mat-card-title>\n        <h2>Personal Machine Setup</h2>\n    </mat-card-title>\n    <mat-card-subtitle>\n        <p>In case you were wondering</p>\n    </mat-card-subtitle>\n    <mat-card-content>\n        <!-- hack for now, should use flex? -->\n        <p><b>Operating System:</b> \"btw I use Arch Linux\"</p>\n        <p><b>Text Editor/IDE I love:</b> Neovim for everything other than Java (Netbeans) and Angular (VSCode)</p>\n        <p><b>Desktop Environment:</b> Gnome 3</p>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introduction-card {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n\n.my-story {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n\n.my-work-experience {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%;\n  margin-bottom: 3%; }\n\n.home-setup-card {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%;\n  margin-bottom: 3%; }\n\n.skills-container {\n  display: flex;\n  justify-content: center; }\n\n@media screen and (max-width: 800px) {\n    .skills-container {\n      flex-direction: column; } }\n\n.skill-card {\n  margin: 0.5em;\n  width: 80%;\n  margin-left: 0.5em;\n  margin-right: 0.5em; }\n\n@media screen and (max-width: 800px) {\n    .skill-card {\n      margin-left: auto;\n      margin-right: auto; } }\n\n.experience-container {\n  display: flex;\n  justify-content: center; }\n\n@media screen and (max-width: 600px) {\n    .experience-container {\n      flex-direction: column; } }\n\n.experience-card {\n  margin: 0.5em;\n  width: 80%;\n  margin-left: 0.5em;\n  margin-right: 0.5em; }\n\n@media screen and (max-width: 600px) {\n    .experience-card {\n      margin-left: auto;\n      margin-right: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZXJyeS9Xb3JrL0dpdGh1Yi9wb3J0Zm9saW8vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFDdkI7SUFIRjtNQUlJLHNCQUFzQixFQUFBLEVBRXpCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBQ25CO0lBTEY7TUFNSSxpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUEsRUFFckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBQ3ZCO0lBSEY7TUFJSSxzQkFBc0IsRUFBQSxFQUV6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUNuQjtJQUxGO01BTUksaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBLEVBRXJCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9kdWN0aW9uLWNhcmQge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5teS1zdG9yeSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLm15LXdvcmstZXhwZXJpZW5jZSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5ob21lLXNldHVwLWNhcmQge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnNraWxsLWNhcmQge1xuICBtYXJnaW46IDAuNWVtO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi5leHBlcmllbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmV4cGVyaWVuY2UtY2FyZCB7XG4gIG1hcmdpbjogMC41ZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZXJyeS9Xb3JrL0dpdGh1Yi9wb3J0Zm9saW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogIzM2OTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Portfolio Website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<mat-card class=\"contact-card mat-elevation-z5\">\n  <div class=\"contact-image\">\n    <img src=\"assets/images/profile_picture.jpg\" class=\"contact-image\" alt=\"Profile Picture\">\n  </div>\n  <mat-card-title>\n    <h2>Muhammad Shehriyar Qureshi</h2>\n  </mat-card-title>\n  <mat-card-subtitle>\n    <h3>Software Engineer @ <a href=\"https://tplmaps.com\">TPL Maps</a></h3>\n    <a href=\"https://github.com/ShehriyarQureshi\" class=\"fa fa-github\"></a>\n    <a href=\"https://medium.com/@Shehriyar.Qureshi\" class=\"fa fa-medium\"></a>\n    <a href=\"https://www.linkedin.com/in/sshehriyar/\" class=\"fa fa-linkedin\"></a>\n    <a href=\"mailto:SShehriyar266@gmail.com\" class=\"fa fa-envelope\"></a>\n  </mat-card-subtitle>\n</mat-card>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-card {\n  max-width: 50%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n  @media screen and (max-width: 1050px) {\n    .contact-card {\n      max-width: 100%; } }\n  .contact-image {\n  height: 200px;\n  padding-bottom: 10px;\n  border-radius: 50%; }\n  .info {\n  clear: both; }\n  .fa {\n  padding: 20px;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  color: ivory; }\n  .fa-instagram {\n  background-color: darkblue; }\n  .fa-twitter {\n  background: #55ACEE; }\n  .fa-linkedin {\n  background-color: #0077b5; }\n  .fa-github {\n  background-color: black; }\n  .fa-envelope {\n  background-color: #ff0095; }\n  .fa-medium {\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZXJyeS9Xb3JrL0dpdGh1Yi9wb3J0Zm9saW8vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBSWQsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQVBkO0lBRko7TUFHTSxlQUFlLEVBQUEsRUFPbEI7RUFFSDtFQUNJLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtFQUdkO0VBQ0UsMEJBQTBCLEVBQUE7RUFJNUI7RUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLHlCQUFrQyxFQUFBO0VBR3BDO0VBQ0UsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSx5QkFBa0MsRUFBQTtFQUdwQztFQUNFLHVCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDEwNTBweCl7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIG1hcmdpbjogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cbiAgXG4uY29udGFjdC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuLmluZm8ge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uZmEge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogaXZvcnk7XG59XG5cbi5mYS1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcblxufVxuXG4uZmEtdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG59XG5cbi5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTksIDE4MSk7XG59XG5cbi5mYS1naXRodWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZhLWVudmVsb3BlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTQ5KTtcbn1cblxuLmZhLW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG59XG5cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"greeting-card mat-elevation-z5\">\n    <mat-card-title>\n        <h1>السَّلَامُ عَلَيْكُمْ</h1>\n    </mat-card-title>\n</mat-card>\n\n<mat-card class=\"simple-card mat-elevation-z5\">\n    <mat-card-title>\n        <h2>whoami</h2>\n        <p><b>Muhammad Shehriyar Qureshi</b>, a <b>Self-Taught Software Developer</b></p>\n    </mat-card-title>\n</mat-card>\n\n<mat-card class=\"project mat-elevation-z5\">\n    <mat-card-title>\n        <h2>Projects</h2>\n    </mat-card-title>\n\n    <div class=\"projects-container\">\n\n        <mat-card class=\"project-card mat-elevation-z5\" (click)=\"goToLink('tuition-manager')\">\n            <mat-card-title>\n                <h3>Tuition Manager</h3>\n            </mat-card-title>\n            <mat-card-subtitle>\n                <h3>Open Source</h3>\n            </mat-card-subtitle>\n            <img mat-card-image src=\"assets/images/tuition-manager.png\" alt=\"Tuition Manager Image\">\n            <mat-card-content>\n                <p>This was my first ever <b>big?</b> programming project.\n                    I started learning to code in Python and I developed this project\n                    to get an understanding of programming basics and how I/O and stuff\n                    works.</p>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"project-card mat-elevation-z5\" (click)=\"goToLink('employee-manager')\">\n            <mat-card-title>\n                <h3>employeeManager</h3>\n            </mat-card-title>\n            <mat-card-subtitle>\n                <h3>PTCL</h3>\n            </mat-card-subtitle>\n            <img mat-card-image src=\"assets/images/employeeManager.png\" alt=\"employeeManager Image\">\n            <mat-card-content>\n                <p>This was my first demo project to learn Java. It's really really\n                    bad but I still have it up for memories.</p>\n            </mat-card-content>\n        </mat-card>\n\n\n        <mat-card class=\"project-card mat-elevation-z5\" (click)=\"goToLink('mobile-connect-profile')\">\n            <mat-card-title>\n                <h3>Mobile Connect Profile</h3>\n            </mat-card-title>\n            <mat-card-subtitle>\n                <h3>Ufone</h3>\n            </mat-card-subtitle>\n            <mat-card-content>\n                <p>Base Implementation of GSMA Mobile Connect Profile I designed &\n                    developed to be integrated into Ufone's Middleware.</p>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"project-card mat-elevation-z5\" (click)=\"goToLink('historia')\">\n            <mat-card-title>\n                <h3>historia</h3>\n            </mat-card-title>\n            <mat-card-subtitle>\n                <h3>Open Source</h3>\n            </mat-card-subtitle>\n            <mat-card-content>\n                <p>A Python module which implements temporal tables using python's\n                    built-in sqlite3 module.</p>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".greeting-card {\n  max-width: 50%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n\n.simple-card {\n  max-width: 50%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n\n@media screen and (max-width: 800px) {\n    .simple-card {\n      max-width: 90%; } }\n\n.welcome {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%; }\n\n.project {\n  max-width: 90%;\n  margin: 4px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%;\n  margin-bottom: 3%; }\n\n.projects-container {\n  display: flex;\n  justify-content: center; }\n\n@media screen and (max-width: 1050px) {\n    .projects-container {\n      flex-direction: column; } }\n\n.project-card {\n  margin: 0.5em;\n  width: 80%;\n  margin-left: 0.5em;\n  margin-right: 0.5em; }\n\n@media screen and (max-width: 1050px) {\n    .project-card {\n      margin-left: auto;\n      margin-right: auto; } }\n\n.project-card:hover {\n    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZXJyeS9Xb3JrL0dpdGh1Yi9wb3J0Zm9saW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFDZDtJQVBGO01BUUksY0FBYyxFQUFBLEVBRWpCOztBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUN2QjtJQUhGO01BSUksc0JBQXNCLEVBQUEsRUFFekI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFDbkI7SUFMRjtNQU1JLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQSxFQUtyQjs7QUFaRDtJQVVJLGlEQUE4QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWV0aW5nLWNhcmQge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5zaW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxufVxuXG4ud2VsY29tZSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLnByb2plY3Qge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIG1hcmdpbjogMC41ZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IC0xcHggMTBweCAyOXB4IDBweCByZ2JhKDAsMCwwLDAuOCk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToLink = function (param) {
        console.log(param);
        if (param == "tuition-manager") {
            window.open("https://www.github.com/ShehriyarQureshi/tuition-manager");
        }
        else if (param == "employee-manager") {
            window.open("https://www.github.com/ShehriyarQureshi/employeemanager");
        }
        else if (param == "mobile-connect-profile") {
            window.open("https://link.medium.com/fQWJhKOsgX");
        }
        else if (param == "historia") {
            window.open("https://www.github.com/ShehriyarQureshi/historia");
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #7700FF; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #8E2BFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZXJyeS9Xb3JrL0dpdGh1Yi9wb3J0Zm9saW8vc3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7RUFEdkI7SUFJUSxpQkFBaUIsRUFBQTtFQUp6QjtJQVFRLG1CQUFtQixFQUFBO0VBUjNCO01BV1kscUJBQXFCO01BQ3JCLFNBQVM7TUFDVCxVQUFVLEVBQUE7RUFidEI7UUFnQmdCLFdBQVcsRUFBQTtFQWhCM0I7VUFtQm9CLGNBQWM7VUFDZCx5QkFBeUI7VUFDekIsZUFBZSxFQUFBO0VBckJuQztZQXdCd0IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhFMkJGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'My Portfolio';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
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

module.exports = __webpack_require__(/*! /home/sherry/Work/Github/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map