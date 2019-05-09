"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var TaskModalComponent = /** @class */ (function () {
    function TaskModalComponent() {
        this._showDialog = false;
        this.showDialogChange = new core_1.EventEmitter();
        this.data = null;
        this.SubmitClick = new core_1.EventEmitter();
        this.newTaskForm = new forms_1.FormGroup({
            taskName: new forms_1.FormControl(''),
            status: new forms_1.FormControl(null),
            priority: new forms_1.FormControl(null),
            dueDate: new forms_1.FormControl(null)
        });
        this.statuses = [
            { label: 'Select Status', value: null },
            { label: 'Open', value: 'Open' },
            { label: 'Assign', value: 'Assign' },
            { label: 'In-progress', value: 'In-progress' },
            { label: 'Completed', value: 'Completed' },
            { label: 'Closed', value: 'Closed' }
        ];
        this.priorities = [
            { label: 'Select Priority', value: null },
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' }
        ];
    }
    Object.defineProperty(TaskModalComponent.prototype, "showDialog", {
        get: function () {
            return this._showDialog;
        },
        set: function (value) {
            this._showDialog = value;
            if (value) {
                this.BindData(this.data);
            }
        },
        enumerable: true,
        configurable: true
    });
    TaskModalComponent.prototype.ngOnInit = function () {
    };
    TaskModalComponent.prototype.BindData = function (data) {
        if (data !== null) {
            this.newTaskForm.get('taskName').setValue(data.taskName);
            this.newTaskForm.get('status').setValue(data.status);
            this.newTaskForm.get('priority').setValue(data.priority);
            this.newTaskForm.get('dueDate').setValue(data.dueDate);
        }
    };
    TaskModalComponent.prototype.Close = function () {
        this.showDialog = false;
        this.showDialogChange.emit(this.showDialog);
        this.data = null;
        this.newTaskForm.get('taskName').setValue('');
        this.newTaskForm.get('status').setValue(null);
        this.newTaskForm.get('priority').setValue(null);
        this.newTaskForm.get('dueDate').setValue(null);
    };
    TaskModalComponent.prototype.onClose = function () {
        this.Close();
    };
    TaskModalComponent.prototype.onSubmit = function () {
        var taskName = this.newTaskForm.value.taskName;
        var dueDate = moment(this.newTaskForm.value.dueDate).format('L');
        var status = this.newTaskForm.value.status;
        var priority = this.newTaskForm.value.priority;
        this.data = { taskName: taskName, dueDate: dueDate, status: status, priority: priority };
        this.SubmitClick.emit(this.data);
        this.Close();
    };
    __decorate([
        core_1.Output()
    ], TaskModalComponent.prototype, "showDialogChange", void 0);
    __decorate([
        core_1.Input()
    ], TaskModalComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output()
    ], TaskModalComponent.prototype, "SubmitClick", void 0);
    __decorate([
        core_1.Input()
    ], TaskModalComponent.prototype, "showDialog", null);
    TaskModalComponent = __decorate([
        core_1.Component({
            selector: 'app-taskModal',
            templateUrl: './task.modal.component.html'
        })
    ], TaskModalComponent);
    return TaskModalComponent;
}());
exports.TaskModalComponent = TaskModalComponent;
//# sourceMappingURL=task.modal.component.js.map