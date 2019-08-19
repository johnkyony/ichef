(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipes-list-recipes-list-module"],{

/***/ "./src/app/pages/recipes-list/recipes-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recipes-list/recipes-list.module.ts ***!
  \***********************************************************/
/*! exports provided: RecipesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListPageModule", function() { return RecipesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-list.page */ "./src/app/pages/recipes-list/recipes-list.page.ts");







var routes = [
    {
        path: '',
        component: _recipes_list_page__WEBPACK_IMPORTED_MODULE_6__["RecipesListPage"]
    }
];
var RecipesListPageModule = /** @class */ (function () {
    function RecipesListPageModule() {
    }
    RecipesListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_list_page__WEBPACK_IMPORTED_MODULE_6__["RecipesListPage"]]
        })
    ], RecipesListPageModule);
    return RecipesListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recipes-list/recipes-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/recipes-list/recipes-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>recipesList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/recipes-list/recipes-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/recipes-list/recipes-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZXMtbGlzdC9yZWNpcGVzLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/recipes-list/recipes-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recipes-list/recipes-list.page.ts ***!
  \*********************************************************/
/*! exports provided: RecipesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListPage", function() { return RecipesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var RecipesListPage = /** @class */ (function () {
    function RecipesListPage(firestore) {
        this.firestore = firestore;
    }
    RecipesListPage.prototype.ngOnInit = function () {
        this.onReadRecipes().subscribe(function (data) {
            data.map(function (res) {
                console.log(res.payload.doc.data()['content']);
            });
        });
    };
    RecipesListPage.prototype.onReadRecipes = function () {
        return this.firestore.collection('recipes').snapshotChanges();
    };
    RecipesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes-list',
            template: __webpack_require__(/*! ./recipes-list.page.html */ "./src/app/pages/recipes-list/recipes-list.page.html"),
            styles: [__webpack_require__(/*! ./recipes-list.page.scss */ "./src/app/pages/recipes-list/recipes-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], RecipesListPage);
    return RecipesListPage;
}());

//Read base64 string
/*
images:any[] = [];
  constructor(private firestore: AngularFirestore) { }
  
  ngOnInit() {

    this.onReadRecipes().subscribe(data => {
      data.map(res => {
        this.images.push(res.payload.doc.data()['recipeImage']);
        //console.log(res.payload.doc.data()['content']);
      });
    });

  }

  onReadRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

*/


/***/ })

}]);
//# sourceMappingURL=pages-recipes-list-recipes-list-module.js.map