webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/apiservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIServiceService = (function () {
    function APIServiceService(http) {
        this.http = http;
    }
    APIServiceService.prototype.getRepos = function (title, page, sort) {
        if (page === void 0) { page = 1; }
        if (sort === void 0) { sort = ""; }
        return this.http.get("https://api.github.com/search/repositories?per_page=9&q=" + title + "&page=" + page + "&sort=" + sort);
        // (+) before `id` turns the string into a number
        //.then(heroes => heroes.find(hero => hero.id === +id));
    };
    APIServiceService.prototype.getUserRepos = function (username) {
        return this.http.get("https://api.github.com/users/" + username + "/repos");
    };
    APIServiceService.prototype.getUserInfo = function (username) {
        console.log(username);
        return this.http.get("https://api.github.com/search/users?q=" + username);
    };
    return APIServiceService;
}());
APIServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], APIServiceService);

var _a;
//# sourceMappingURL=apiservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span><a style=\"text-decoration: none; color: white;\" routerLink=\"/\"> {{ title }}</a></span>\n</md-toolbar>\n<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"flex-container\">\n  <div id=\"content\" class=\"content-flex\">\n    <router-outlet></router-outlet>\n  </div>\n  <div id=\"side-nav\" class=\"side-nav-flex\">\n    <md-nav-list>\n\n      <a md-list-item routerLink=\"/repo/{{ tech }}\" *ngFor=\"let tech of technologies\" class=\"side-nav-item\">\n        <i mdListIcon class=\"{{ techIcons[tech] }}\"></i> &nbsp;\n        {{ tech }}</a>\n    </md-nav-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "TechScan";
        this.technologies = ["Javascript", "Java", "Python", "PHP", "Ruby", "C", "C++", "Go", "C#", "HTML"];
        this.techIcons = {
            "Javascript": "devicon-javascript-plain colored",
            "Java": "devicon-java-plain-wordmark colored",
            "Python": "devicon-python-plain-wordmark colored",
            "PHP": "devicon-php-plain colored",
            "Ruby": "devicon-ruby-plain-wordmark colored",
            "C": "devicon-c-plain colored",
            "C++": "devicon-cplusplus-plain colored",
            "Go": "devicon-go-plain colored",
            "C#": "devicon-csharp-plain colored",
            "HTML": "devicon-html5-plain-wordmark colored"
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__repo_listing_repo_listing_component__ = __webpack_require__("../../../../../src/app/repo-listing/repo-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_repo_listing_user_repo_listing_component__ = __webpack_require__("../../../../../src/app/user-repo-listing/user-repo-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'repo/:title', component: __WEBPACK_IMPORTED_MODULE_7__repo_listing_repo_listing_component__["a" /* RepoListingComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_10__user_repo_listing_user_repo_listing_component__["a" /* UserRepoListingComponent */] },
    {
        path: 'heroes',
        component: __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__repo_listing_repo_listing_component__["a" /* RepoListingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_repo_listing_user_repo_listing_component__["a" /* UserRepoListingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdPaginatorModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSelectModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__apiservice_service__["a" /* APIServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-nav-list>\n  <a md-list-item routerLink=\"/repo/{{ tech }}\" *ngFor=\"let tech of technologies\"\n     class=\"grid-list-item\">\n    <!--<md-icon mdListIcon>label</md-icon>-->\n    <i mdListAvatar  style=\"font-size: 50px\" class=\"{{ techIcons[tech] }}\"></i>\n    <h3 mdLine> {{ tech }}</h3>\n  </a>\n</md-nav-list>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.techIcons = {
            "Javascript": "devicon-javascript-plain colored",
            "Java": "devicon-java-plain-wordmark colored",
            "Python": "devicon-python-plain-wordmark colored",
            "PHP": "devicon-php-plain colored",
            "Ruby": "devicon-ruby-plain-wordmark colored",
            "C": "devicon-c-plain colored",
            "C++": "devicon-cplusplus-plain colored",
            "Go": "devicon-go-plain colored",
            "C#": "devicon-csharp-plain colored",
            "HTML": "devicon-html5-plain-wordmark colored"
        };
        this.title = 'app';
        this.technologies = ["Javascript", "Java", "Python", "PHP", "Ruby", "C", "C++", "Go", "C#", "HTML"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.github.com/search/repositories?q=javascript').subscribe(function (data) {
            // data is now an instance of type ItemsResponse, so you can do this:
            _this.results = data;
            console.log(data['total_count']);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/repo-listing/repo-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/repo-listing/repo-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 25px; background: white;\">\n  <h1 style=\"border-bottom: 1px solid #aaa\">{{ title }}</h1>\n  <div *ngIf=\"!isLoading\">\n    <h2 style=\"margin-top: 20px;color: #333; margin-bottom: 1px; display: inline-block;\"> {{ repositories['total_count']\n      }}\n      repository results.</h2>\n    <md-select placeholder=\"Sort Repos\" [(ngModel)]=\"sortSelect\" style=\"display: inline-block; float: right;\"\n               (change)=\"selectSort($event)\">\n      <md-option value=\"\">Best Match</md-option>\n      <md-option value=\"stars\">Most Stars</md-option>\n      <md-option value=\"forks\">Most Forks</md-option>\n      <md-option value=\"updated\">Recently Updated</md-option>\n    </md-select>\n  </div>\n</div>\n\n\n<md-nav-list *ngIf=\"!isLoading\">\n  <md-list-item *ngFor=\"let repo of repositories['items']\"\n                style=\"height:100%;\" class=\"grid-list-item\"\n                routerLink=\"/user/{{ repo['owner']['login'] }}\">\n\n    <p mdLine><b>{{ repo['full_name'] }}</b></p>\n\n    <p mdLine style=\"text-align:right;\">\n      <md-icon *ngIf=\"repo['language']!=null\" style=\"font-size: inherit;\">&#xE061;</md-icon>\n      <span> {{ repo['language'] }}</span>\n      <md-icon style=\"font-size: inherit;\">star</md-icon>\n      <span *ngIf=\"repo['stargazers_count']/1000 <= 1\">{{ repo['stargazers_count'] }}</span>\n      <span *ngIf=\"repo['stargazers_count']/1000 > 1\">{{ repo['stargazers_count']/1000 }}k</span>\n      <md-icon style=\"font-size: inherit;\">&#xE417;</md-icon>\n      <span *ngIf=\"repo['watchers_count']/1000 <= 1\">{{ repo['watchers_count'] }}</span>\n      <span *ngIf=\"repo['watchers_count']/1000 > 1\">{{ repo['watchers_count']/1000 }}k</span>\n    </p>\n    <p mdLine class=\"grid-list-item-p\"> {{ repo['description'] | slice:0:40 }} </p>\n    <p mdLine class=\"grid-list-item-p\"><b>Last Updated at:</b> {{ repo['pushed_at'] | date:'medium' }}</p>\n  </md-list-item>\n</md-nav-list>\n<md-spinner style=\"width: 85%; margin: 100px 0px; padding: 20px\" *ngIf=\"isLoading\"></md-spinner>\n\n\n<!--<md-paginator class=\"pagination\" *ngIf=\"repositories['total_count']!=undefined && !isLoading\"-->\n<!--[length]=\"repositories['total_count']\"-->\n<!--[pageSize]=\"9\" (page)=\"changePage($event);\">-->\n<md-paginator class=\"pagination\" *ngIf=\"repositories['total_count']!=undefined\"\n              [length]=\"repositories['total_count']\"\n              [pageSize]=\"9\" (page)=\"changePage(pageEvent= $event);\">\n</md-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/repo-listing/repo-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepoListingComponent = (function () {
    function RepoListingComponent(route, service) {
        this.route = route;
        this.service = service;
        this.repositories = '';
        this.isLoading = true;
        this.sortSelect = "";
        this.curPage = 1;
    }
    RepoListingComponent.prototype.selectSort = function (event) {
        this.sortSelect = event.value;
        this.isLoading = true;
        this.updateRepoList();
    };
    RepoListingComponent.prototype.changePage = function (event) {
        this.isLoading = true;
        this.curPage = +event.pageIndex + 1;
        this.updateRepoList();
    };
    RepoListingComponent.prototype.updateRepoList = function () {
        var _this = this;
        this.service.getRepos(this.title, this.curPage, this.sortSelect).subscribe(function (data) {
            _this.isLoading = false;
            _this.repositories = data;
        });
    };
    RepoListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isLoading = true;
            _this.title = params['title'];
            _this.service.getRepos(_this.title, _this.curPage, _this.sortSelect).subscribe(function (data) {
                _this.isLoading = false;
                data['items'] = data['items'].splice(0, 9);
                _this.repositories = data;
            });
        });
    };
    return RepoListingComponent;
}());
RepoListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-repo-listing',
        template: __webpack_require__("../../../../../src/app/repo-listing/repo-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/repo-listing/repo-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apiservice_service__["a" /* APIServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apiservice_service__["a" /* APIServiceService */]) === "function" && _b || Object])
], RepoListingComponent);

var _a, _b;
//# sourceMappingURL=repo-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-repo-listing/user-repo-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-repo-listing/user-repo-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"!isLoading\">\n  <md-card-header>\n    <div md-card-avatar style=\"width: 100px;height: 100px;\">\n      <img src=\"{{ user_info['items']['avatar_url'] }}\" alt=\"{{ user_info['items']['login'] }}\"\n           style=\"border-radius:10px; width: 100px; margin-right: 10px;\"/>\n    </div>\n    <md-card-title><h1>{{ user_info['items']['login'] }}</h1></md-card-title>\n    <md-card-subtitle>{{ user_info['items']['type'] }}</md-card-subtitle>\n  </md-card-header>\n  <!--<img md-card-image src=\"{{ user_info['items']['avatar_url'] }}\" alt=\"{{ user_info['items']['login'] }}\" style=\"width: 100px;\"/>-->\n</md-card>\n\n<h3 class=\"repo-header\" *ngIf=\"!isLoading\">Repositories <span> {{ user_repos.length }} </span></h3>\n<md-nav-list *ngIf=\"!isLoading\" style=\"\">\n  <div class=\"user-repo-grid-container\">\n    <md-list-item *ngFor=\"let repo of user_repos\" class=\"user-repo-grid-item\">\n      <h2 mdLine style=\"display: block\">{{ repo['full_name'] }}</h2>\n      <p mdLine style=\"text-align:right; margin: 5px; line-height: 2em; min-height: 20px;\">\n        <md-icon *ngIf=\"repo['language']!=null\" style=\"font-size: inherit;\">&#xE061;</md-icon>\n        <span> {{ repo['language'] }}</span>\n        <md-icon style=\"font-size: inherit;\">star</md-icon>\n        <span *ngIf=\"repo['stargazers_count']/1000 <= 1\">{{ repo['stargazers_count'] }}</span>\n        <span *ngIf=\"repo['stargazers_count']/1000 > 1\">{{ repo['stargazers_count']/1000 }}k</span>\n        <md-icon style=\"font-size: inherit;\">&#xE417;</md-icon>\n        <span *ngIf=\"repo['watchers_count']/1000 <= 1\">{{ repo['watchers_count'] }}</span>\n        <span *ngIf=\"repo['watchers_count']/1000 > 1\">{{ repo['watchers_count']/1000 }}k</span>\n      </p>\n\n      <p mdLine class=\"grid-list-item-p\"> {{ repo['description'] | slice:0:40 }} </p>\n      <p mdLine class=\"grid-list-item-p\"><b>Last Updated at:</b> {{ repo['pushed_at'] | date:'medium' }}</p>\n\n    </md-list-item>\n  </div>\n</md-nav-list>\n\n<md-spinner style=\"width: 85%; margin: 100px 0px; padding: 20px\" *ngIf=\"isLoading\"></md-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/user-repo-listing/user-repo-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepoListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRepoListingComponent = (function () {
    function UserRepoListingComponent(route, service) {
        this.route = route;
        this.service = service;
        this.user_info = '';
        this.user_repos = '';
        this.isLoading = true;
        // console.log("UserListing");
    }
    UserRepoListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.username = params['username'];
            _this.service.getUserInfo(_this.username).subscribe(function (data) {
                // console.debug(data);
                _this.isLoading = false;
                data['items'] = data['items'][0]; //.splice(0, 1);
                _this.user_info = data;
            });
            _this.service.getUserRepos(_this.username).subscribe(function (data) {
                // console.debug(data);
                //data['items'] = data['items'];//.splice(0, 1);
                _this.user_repos = data;
            });
        });
    };
    return UserRepoListingComponent;
}());
UserRepoListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-repo-listing',
        template: __webpack_require__("../../../../../src/app/user-repo-listing/user-repo-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-repo-listing/user-repo-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apiservice_service__["a" /* APIServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apiservice_service__["a" /* APIServiceService */]) === "function" && _b || Object])
], UserRepoListingComponent);

var _a, _b;
//# sourceMappingURL=user-repo-listing.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map