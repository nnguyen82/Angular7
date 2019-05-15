"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        this.showDialog = false;
        this.formData = null;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Task', icon: 'fas fa-tasks' }
        ];
        this.data = [
            { id: '1', name: 'Task 1', owner: 'Nam Nguyen', status: 'Assigned', priority: 'High', dueDate: moment(new Date('2/22/2019')).format('L'), assignedDate: moment(new Date('1/10/2019')).format('L') },
            { id: '2', name: 'Task 2', owner: 'Oanh Nguyen', status: 'Open', priority: 'Low', dueDate: moment(new Date('3/14/2019')).format('L'), assignedDate: moment(new Date('2/13/2019')).format('L') }
        ];
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Task' },
            { field: 'owner', header: 'Owner' },
            { field: 'status', header: 'Status' },
            { field: 'priority', header: 'Priority' },
            { field: 'dueDate', header: 'Due Date' },
            { field: 'assignedDate', header: 'Assigned Date' }
        ];
        this.waitingOnSubmit();
    };
    TaskComponent.prototype.onNewTask = function () {
        //this.formData = { taskName: 'Test', dueDate: new Date('2/22/2019'), status: 'Open', priority: 'Medium' };
        this.showDialog = true;
    };
    TaskComponent.prototype.onSubmit = function ($event) {
        var id = this.data.length + 1;
        var taskName = $event.taskName;
        var dueDate = moment(new Date($event.dueDate)).format('L');
        var status = $event.status;
        var priority = $event.priority;
        var vm = { id: id, name: taskName, owner: 'Nam Nguyen', status: status, priority: priority, dueDate: dueDate, assignedDate: moment(new Date).format('L') };
        //this.SetGrid(vm);
        this.showDialog = false;
        this.taskService.Save(vm).subscribe(function () {
        });
    };
    TaskComponent.prototype.waitingOnSubmit = function () {
        var _this = this;
        var intervalId = setInterval(function () {
            if (_this.taskService.data !== undefined) {
                var vm = _this.taskService.data;
                vm.dueDate = moment(vm.dueDate).format('L');
                vm.assignedDate = moment(vm.assignedDate).format('L');
                _this.SetGrid(vm);
                _this.taskService.data = undefined;
                //clearInterval(intervalId)
            }
        }, 1000);
    };
    TaskComponent.prototype.SetGrid = function (vm) {
        this.data.push(vm);
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