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
var task_calendar_component_1 = require("./calendar/task.calendar.component");
var task_component_1 = require("./task.component");
var taskRoutes = [
    {
        path: 'task',
        children: [
            { path: '', component: task_component_1.TaskComponent },
            { path: 'calendar', component: task_calendar_component_1.TaskCalendarComponent }
        ]
    }
];
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        core_1.NgModule({
            declarations: [
                task_component_1.TaskComponent,
                task_calendar_component_1.TaskCalendarComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(taskRoutes)
            ],
            exports: []
        })
    ], TaskModule);
    return TaskModule;
}());
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map