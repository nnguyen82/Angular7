"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WorkOrderComponent = /** @class */ (function () {
    function WorkOrderComponent() {
        this.PageNames = PageNames;
    }
    WorkOrderComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Work order', icon: 'fas fa-briefcase' }
        ];
        this.pageIndex = this.PageNames.CreateJob;
        this.pages = [
            { label: "Create Job" },
            { label: "Job assignments" },
            { label: "Invoicing" },
            { label: "Complete" }
        ];
    };
    WorkOrderComponent = __decorate([
        core_1.Component({
            templateUrl: './workorder.component.html',
            styleUrls: ['./workorder.component.css']
        })
    ], WorkOrderComponent);
    return WorkOrderComponent;
}());
exports.WorkOrderComponent = WorkOrderComponent;
var PageNames;
(function (PageNames) {
    PageNames[PageNames["CreateJob"] = 0] = "CreateJob";
    PageNames[PageNames["JobAssignments"] = 1] = "JobAssignments";
    PageNames[PageNames["Invoicing"] = 2] = "Invoicing";
    PageNames[PageNames["Complete"] = 3] = "Complete";
})(PageNames = exports.PageNames || (exports.PageNames = {}));
//# sourceMappingURL=workorder.component.js.map