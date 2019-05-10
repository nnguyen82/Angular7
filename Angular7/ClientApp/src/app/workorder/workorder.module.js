"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/component/shared.module");
var workorder_component_1 = require("./workorder.component");
var createjob_component_1 = require("./steps/createjob.component");
var taskRoutes = [
    { path: 'workorder', component: workorder_component_1.WorkOrderComponent }
];
var WorkOrderModule = /** @class */ (function () {
    function WorkOrderModule() {
    }
    WorkOrderModule = __decorate([
        core_1.NgModule({
            declarations: [
                workorder_component_1.WorkOrderComponent,
                createjob_component_1.CreateJobComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(taskRoutes)
            ]
        })
    ], WorkOrderModule);
    return WorkOrderModule;
}());
exports.WorkOrderModule = WorkOrderModule;
//# sourceMappingURL=workorder.module.js.map