"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrmComponent = /** @class */ (function () {
    function CrmComponent() {
    }
    CrmComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Crm', icon: 'fas fa-briefcase' }
        ];
    };
    CrmComponent = __decorate([
        core_1.Component({
            selector: 'app-crm',
            templateUrl: './crm.component.html',
        })
    ], CrmComponent);
    return CrmComponent;
}());
exports.CrmComponent = CrmComponent;
//# sourceMappingURL=crm.component.js.map