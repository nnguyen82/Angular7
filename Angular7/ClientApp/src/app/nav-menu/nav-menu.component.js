"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.menuItems = [
            { label: 'Dashboard', icon: 'pi pi-chart-bar', routerLink: ['/'] },
            { label: 'Work order', icon: 'pi pi-folder', routerLink: ['/workorder'] },
            { label: 'Task', icon: 'pi pi-folder', routerLink: ['/task'] },
            { label: 'Vendor', icon: 'pi pi-user', routerLink: ['/vendor'] },
            { label: 'CRM', icon: 'pi pi-user', routerLink: ['/crm'] },
            { label: 'Accountant', icon: 'pi pi-briefcase', routerLink: ['/accountant'] }
        ];
    }
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map