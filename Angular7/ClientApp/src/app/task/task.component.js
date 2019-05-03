"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.showDialog = false;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Task', icon: 'fas fa-tasks' }
        ];
        this.data = [
            { id: '1', name: 'Task 1', owner: 'Nam Nguyen', status: 'Assigned', priority: 'High', duedate: '2/15/2019', assigneddate: '1/25/2019' },
            { id: '2', name: 'Task 2', owner: 'Oanh Nguyen', status: 'Open', priority: 'Low', duedate: '3/15/2019', assigneddate: '4/25/2019' }
        ];
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Task' },
            { field: 'owner', header: 'Owner' },
            { field: 'status', header: 'Status' },
            { field: 'priority', header: 'Priority' },
            { field: 'duedate', header: 'Due Date' },
            { field: 'assigneddate', header: 'Assigned Date' }
        ];
    };
    TaskComponent.prototype.DialogClick = function () {
        this.showDialog = true;
    };
    TaskComponent.prototype.CloseDialogClick = function () {
        this.showDialog = false;
    };
    TaskComponent = __decorate([
        core_1.Component({
            templateUrl: './task.component.html',
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map