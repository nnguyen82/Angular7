"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PositionFormComponent = /** @class */ (function () {
    function PositionFormComponent(route, router, _positionService) {
        this.route = route;
        this.router = router;
        this._positionService = _positionService;
    }
    PositionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.formId = data.position[0].id;
            _this.formName = data.position[0].name;
        });
    };
    PositionFormComponent = __decorate([
        core_1.Component({
            templateUrl: './position-form.component.html',
        })
    ], PositionFormComponent);
    return PositionFormComponent;
}());
exports.PositionFormComponent = PositionFormComponent;
//# sourceMappingURL=position-form.component.js.map