"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var PositionMenuComponent = /** @class */ (function () {
    function PositionMenuComponent(route, router, _positionService) {
        this.route = route;
        this.router = router;
        this._positionService = _positionService;
        this.positionMenuItems = [];
    }
    PositionMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positions$ = this.route.paramMap.pipe(operators_1.switchMap(function (params) {
            _this.selectedId = +params.get('id');
            return _this._positionService.getPositions();
        }));
        this.positions$.subscribe(function (ret) {
            var _loop_1 = function (i) {
                var vm = { label: ret[i].name, icon: 'fas fa-user', command: function (event) { return _this.navigate(ret[i].id); } };
                _this.positionMenuItems.push(vm);
            };
            for (var i = 0; i < ret.length; i++) {
                _loop_1(i);
            }
        });
    };
    PositionMenuComponent.prototype.navigate = function (id) {
        this.router.navigate(['/position/positionform', id]);
    };
    PositionMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-positionMenu',
            templateUrl: './position.menu.component.html',
        })
    ], PositionMenuComponent);
    return PositionMenuComponent;
}());
exports.PositionMenuComponent = PositionMenuComponent;
//# sourceMappingURL=position.menu.component.js.map