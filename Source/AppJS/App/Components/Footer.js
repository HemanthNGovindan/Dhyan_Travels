"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var FooterComponent = (function () {
    function FooterComponent(route) {
        this.route = route;
    }
    FooterComponent.prototype.AppNavigation = function (linkObject) {
        console.log(linkObject);
        this.route.navigate(linkObject);
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-content',
            template: "<footer>\n\t\t<div class=\"footer-content\">\n\t\t<div>Copyright \u00A9 2017 Dhyan Travels   |   </div>\n\t\t<div>\n            <a (click)=\"AppNavigation('/Home')\">Enquiry</a>\n            <a (click)=\"AppNavigation('/Cabs')\">Cabs</a>\n            <a (click)=\"AppNavigation('/AboutUs')\">About</a>\n            <a (click)=\"AppNavigation('/ContactUs')\" >Contact</a>\n\t\t</div>\n         </div>\n    </footer>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=Footer.js.map