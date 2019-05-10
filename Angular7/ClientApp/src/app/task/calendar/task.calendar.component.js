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
var TaskCalendarComponent = /** @class */ (function () {
    function TaskCalendarComponent() {
        this.showDialog = false;
        this.formData = null;
    }
    TaskCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Task Calendar', icon: 'fas fa-calendar' }
        ];
        this.data = [
            {
                id: 1,
                title: "All Day Event",
                status: 'Open',
                priority: 'High',
                start: "2019-05-01"
            },
            {
                id: 2,
                title: "Long Event",
                start: "2019-05-07",
                status: 'Open',
                priority: 'High'
            },
            {
                id: 3,
                title: "Repeating Event",
                status: 'Open',
                priority: 'High',
                start: "2019-05-09T16:00:00"
            },
            {
                id: 4,
                title: "Repeating Event",
                status: 'Open',
                priority: 'High',
                start: "2019-05-16T16:00:00"
            },
            {
                id: 5,
                title: "Conference",
                status: 'Open',
                priority: 'High',
                start: "2019-05-11"
            }
        ];
        this.events = this.data;
        this.options = {
            height: 800,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            eventClick: function (e) {
                _this.EventClick(e);
            },
            dateClick: function (e) {
                _this.DateClick(e);
            }
        };
    };
    TaskCalendarComponent.prototype.EventClick = function (info) {
        var query = this.Search(info.event.id);
        this.formData = { taskName: query.title, dueDate: new Date(moment(query.start).format('L')), status: query.status, priority: query.priority };
        this.showDialog = true;
    };
    TaskCalendarComponent.prototype.DateClick = function (info) {
        var dateClick = new Date(moment(info.dateStr).format('L'));
        this.formData = { taskName: '', dueDate: dateClick, status: null, priority: null };
        this.showDialog = true;
    };
    TaskCalendarComponent.prototype.onSubmit = function ($event) {
        var id = this.events.length + 1;
        var taskName = $event.taskName;
        var dueDate = moment($event.dueDate).format('YYYY-MM-DD');
        this.events = this.events.concat([{
                id: id,
                title: taskName,
                status: $event.status,
                priority: $event.priority,
                start: dueDate
            }]);
        this.data.push({
            id: id,
            title: taskName,
            status: $event.status,
            priority: $event.priority,
            start: dueDate
        });
        this.showDialog = false;
    };
    TaskCalendarComponent.prototype.Search = function (id) {
        return this.data.find(function (x) { return x.id == id; });
    };
    TaskCalendarComponent = __decorate([
        core_1.Component({
            templateUrl: './task.calendar.component.html',
        })
    ], TaskCalendarComponent);
    return TaskCalendarComponent;
}());
exports.TaskCalendarComponent = TaskCalendarComponent;
//# sourceMappingURL=task.calendar.component.js.map