"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrmMenuComponent = /** @class */ (function () {
    function CrmMenuComponent(router) {
        this.router = router;
    }
    CrmMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crmMenuItems = [
            { label: 'Physical Therapy Assistant', icon: 'fas fa-user', command: function (event) { return _this.navigate(1); } },
            { label: 'LPHA', icon: 'fas fa-user', command: function (event) { return _this.navigate(2); } },
            { label: 'Care Coordinator', icon: 'fas fa-user', command: function (event) { return _this.navigate(3); } }
        ];
    };
    CrmMenuComponent.prototype.navigate = function (id) {
        this.router.navigate(['/crm/crmchild', id]);
    };
    CrmMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-crmMenu',
            templateUrl: './crm.menu.component.html',
        })
    ], CrmMenuComponent);
    return CrmMenuComponent;
}());
exports.CrmMenuComponent = CrmMenuComponent;
//# sourceMappingURL=crm.menu.component.js.map