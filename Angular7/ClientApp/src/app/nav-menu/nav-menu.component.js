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
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var handleSelected = function (event) {
            var allMenus = jQuery(event.originalEvent.target).closest('ul');
            var allLinks = allMenus.find('.menu-selected');
            allLinks.removeClass("menu-selected");
            var selected = jQuery(event.originalEvent.target).closest('a');
            selected.addClass('menu-selected');
        };
        this.menuItems = [
            { label: 'Dashboard', icon: 'fas fa-chart-line', routerLink: ['/'], command: function (event) { return handleSelected(event); } },
            { label: 'Work order', icon: 'fas fa-briefcase', routerLink: ['/workorder'], command: function (event) { return handleSelected(event); } },
            { label: 'Task', icon: 'fas fa-tasks', routerLink: ['/task'], command: function (event) { return handleSelected(event); } },
            { label: 'Vendor', icon: 'fas fa-user', routerLink: ['/vendor'], command: function (event) { return handleSelected(event); } },
            { label: 'CRM', icon: 'fas fa-users', routerLink: ['/crm'], command: function (event) { return handleSelected(event); } },
            { label: 'Accountant', icon: 'fas fa-file-invoice-dollar', routerLink: ['/accountant'], command: function (event) { return handleSelected(event); } }
        ];
    };
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