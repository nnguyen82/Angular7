"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var primeng_module_1 = require("./primeng.module");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms"); //When import and export ReactiveFormsModule, you must also do the same for FormsModule. Else error.
var statistic_component_1 = require("./statistic/statistic.component");
var task_modal_component_1 = require("./modals/task.modal.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                statistic_component_1.StatisticComponent,
                task_modal_component_1.TaskModalComponent
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                primeng_module_1.PrimeNgModule
            ],
            exports: [
                statistic_component_1.StatisticComponent,
                task_modal_component_1.TaskModalComponent,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                primeng_module_1.PrimeNgModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map