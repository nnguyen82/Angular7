"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PositionFormResolverService = /** @class */ (function () {
    function PositionFormResolverService(_positionService, router) {
        this._positionService = _positionService;
        this.router = router;
    }
    PositionFormResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this._positionService.getPosition(id).pipe(operators_1.take(1), operators_1.mergeMap(function (pos) {
            if (pos) {
                return rxjs_1.of(pos);
            }
            else { // id not found
                _this.router.navigate(['/position']);
                return rxjs_1.EMPTY;
            }
        }));
    };
    PositionFormResolverService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], PositionFormResolverService);
    return PositionFormResolverService;
}());
exports.PositionFormResolverService = PositionFormResolverService;
//# sourceMappingURL=position-form.resolver.service.js.map