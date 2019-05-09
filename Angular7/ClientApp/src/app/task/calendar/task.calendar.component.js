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
        this.events = [
            {
                "title": "All Day Event",
                "start": "2019-05-01"
            },
            {
                "title": "Long Event",
                "start": "2019-04-07",
                "end": "2019-05-10"
            },
            {
                "title": "Repeating Event",
                "start": "2019-04-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2019-05-16T16:00:00",
                "end": "2019-05-16T20:00:00"
            },
            {
                "title": "Conference",
                "start": "2019-05-11",
                "end": "2019-05-13"
            }
        ];
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
        alert('Clicked on: ' + info.event.title);
    };
    TaskCalendarComponent.prototype.DateClick = function (info) {
        var dateClick = new Date(moment(info.dateStr).format('L'));
        this.formData = { taskName: '', dueDate: dateClick, status: null, priority: null };
        this.showDialog = true;
    };
    TaskCalendarComponent.prototype.onSubmit = function ($event) {
        var taskName = $event.taskName;
        var dueDate = moment($event.dueDate).format('YYYY-MM-DD');
        this.events = this.events.concat([{
                "title": taskName,
                "start": dueDate
            }]);
        this.showDialog = false;
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