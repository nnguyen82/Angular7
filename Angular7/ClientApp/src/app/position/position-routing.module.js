"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var position_form_component_1 = require("../position/position-form.component");
var position_component_1 = require("./position.component");
var position_form_resolver_service_1 = require("./position-form.resolver.service");
var adminRoutes = [
    {
        path: 'position',
        component: position_component_1.PositionComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'positionform/:id',
                        component: position_form_component_1.PositionFormComponent,
                        resolve: {
                            position: position_form_resolver_service_1.PositionFormResolverService
                        }
                    }
                ]
            }
        ]
    }
];
var PositionRoutingModule = /** @class */ (function () {
    function PositionRoutingModule() {
    }
    PositionRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(adminRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PositionRoutingModule);
    return PositionRoutingModule;
}());
exports.PositionRoutingModule = PositionRoutingModule;
//# sourceMappingURL=position-routing.module.js.map