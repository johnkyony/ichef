(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipes-details-recipes-details-module"],{

/***/ "./src/app/pages/recipes-details/recipes-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recipes-details/recipes-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecipesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesDetailsPageModule", function() { return RecipesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-details.page */ "./src/app/pages/recipes-details/recipes-details.page.ts");







var routes = [
    {
        path: '',
        component: _recipes_details_page__WEBPACK_IMPORTED_MODULE_6__["RecipesDetailsPage"]
    }
];
var RecipesDetailsPageModule = /** @class */ (function () {
    function RecipesDetailsPageModule() {
    }
    RecipesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_details_page__WEBPACK_IMPORTED_MODULE_6__["RecipesDetailsPage"]]
        })
    ], RecipesDetailsPageModule);
    return RecipesDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recipes-details/recipes-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recipes-details/recipes-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>recipesDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/recipes-details/recipes-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recipes-details/recipes-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZXMtZGV0YWlscy9yZWNpcGVzLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/recipes-details/recipes-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recipes-details/recipes-details.page.ts ***!
  \***************************************************************/
/*! exports provided: RecipesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesDetailsPage", function() { return RecipesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesDetailsPage = /** @class */ (function () {
    function RecipesDetailsPage() {
    }
    RecipesDetailsPage.prototype.ngOnInit = function () {
    };
    RecipesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes-details',
            template: __webpack_require__(/*! ./recipes-details.page.html */ "./src/app/pages/recipes-details/recipes-details.page.html"),
            styles: [__webpack_require__(/*! ./recipes-details.page.scss */ "./src/app/pages/recipes-details/recipes-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesDetailsPage);
    return RecipesDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recipes-details-recipes-details-module.js.map