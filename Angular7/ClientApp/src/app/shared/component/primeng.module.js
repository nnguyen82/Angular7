"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var chart_1 = require("primeng/chart");
var table_1 = require("primeng/table");
var PrimeNgModule = /** @class */ (function () {
    function PrimeNgModule() {
    }
    PrimeNgModule = __decorate([
        core_1.NgModule({
            imports: [
                primeng_1.ButtonModule,
                primeng_1.GrowlModule,
                primeng_1.InputTextModule,
                primeng_1.DropdownModule,
                primeng_1.CalendarModule,
                primeng_1.PanelModule,
                primeng_1.SidebarModule,
                chart_1.ChartModule,
                primeng_1.MenuModule,
                table_1.TableModule,
                primeng_1.TabMenuModule,
                primeng_1.CardModule,
                primeng_1.DialogModule
            ],
            exports: [
                primeng_1.ButtonModule,
                primeng_1.GrowlModule,
                primeng_1.InputTextModule,
                primeng_1.DropdownModule,
                primeng_1.CalendarModule,
                primeng_1.PanelModule,
                primeng_1.SidebarModule,
                chart_1.ChartModule,
                primeng_1.MenuModule,
                table_1.TableModule,
                primeng_1.TabMenuModule,
                primeng_1.CardModule,
                primeng_1.DialogModule
            ]
        })
    ], PrimeNgModule);
    return PrimeNgModule;
}());
exports.PrimeNgModule = PrimeNgModule;
//# sourceMappingURL=primeng.module.js.map