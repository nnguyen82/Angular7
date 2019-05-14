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
var DashBoardService = /** @class */ (function () {
    function DashBoardService(http) {
        var _this = this;
        this.http = http;
        this.Url = 'api/dashboard/';
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("/taskHub")
            .build();
        this.startConnection = function () {
            _this.hubConnection
                .start()
                .then(function () {
                console.log('Connection started');
                _this.onReceiveMessage();
                _this.SendMessage('Message sent from dashboard service!');
            })
                .catch(function (err) { return console.log('Error while starting connection: ' + err); });
        };
        this.onReceiveMessage = function () {
            _this.hubConnection.on('ReceiveMessage', function (message) {
                console.log('Message received:' + message);
            });
        };
        this.startConnection();
    }
    DashBoardService.prototype.GetDashBoard = function () {
        return this.http.get(this.Url + 'GetDashBoard');
    };
    DashBoardService.prototype.SendMessage = function (message) {
        this.hubConnection.send("SendNewMessage", message)
            .then(function () { return console.log('Message send: ' + message); })
            .catch(function () { return console.log('Send message fail!'); });
    };
    DashBoardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DashBoardService);
    return DashBoardService;
}());
exports.DashBoardService = DashBoardService;
//# sourceMappingURL=dashboard.service.js.map