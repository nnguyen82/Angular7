"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrmChildComponent = /** @class */ (function () {
    function CrmChildComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CrmChildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu = [
            { id: '1', name: 'Physical Therapy Assistant' },
            { id: '2', name: 'LPHA' },
            { id: '3', name: 'Care Coordinator' }
        ];
        this.id = this.route.snapshot.paramMap.get('id');
        this.menuName = this.menu.filter(function (x) { return x.id == _this.id; })[0].name;
    };
    CrmChildComponent = __decorate([
        core_1.Component({
            selector: 'app-crmchild',
            templateUrl: './crm.child.component.html',
        })
    ], CrmChildComponent);
    return CrmChildComponent;
}());
exports.CrmChildComponent = CrmChildComponent;
//# sourceMappingURL=crm.child.component.js.map