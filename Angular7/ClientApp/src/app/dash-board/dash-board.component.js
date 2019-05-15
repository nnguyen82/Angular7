"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.statistics = null;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Dashboard', icon: 'fas fa-chart-line' }
        ];
        this.dashboardService.GetDashBoard().subscribe(function (res) {
            _this.pie1 = res.Pie1;
            _this.pie2 = res.Pie2;
            _this.bar1 = res.Bar1;
        }, function (err) { console.log("Get dashboard error: " + err.message); });
        this.dashboardService.GetRandomStatistics().subscribe(function (res) {
            console.log("Statistic service start!");
        });
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-board',
            templateUrl: './dash-board.component.html'
        })
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dash-board.component.js.map