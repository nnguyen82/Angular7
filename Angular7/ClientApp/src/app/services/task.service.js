"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signalR = require("@aspnet/signalr");
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        var _this = this;
        this.http = http;
        this.Url = 'api/Task/';
        this.startConnection = function () {
            _this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl("/taskHub")
                .build();
            _this.hubConnection
                .start()
                .then(function () {
                console.log('Connection started');
            })
                .catch(function (err) { return console.log('Error while starting connection: ' + err); });
        };
        this.onReceiveMessage = function () {
            _this.hubConnection.on('ReceiveTask', function (data) {
                _this.data = data;
            });
        };
        this.startConnection();
        this.onReceiveMessage();
    }
    TaskService.prototype.Save = function (vm) {
        return this.http.post(this.Url, vm, { responseType: 'text' });
    };
    TaskService.prototype.SendMessage = function (message) {
        this.hubConnection.send("SendNewMessage", message)
            .then(function () { return console.log('Message send: ' + message); });
    };
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map