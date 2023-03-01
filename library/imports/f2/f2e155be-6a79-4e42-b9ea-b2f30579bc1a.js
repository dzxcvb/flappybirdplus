"use strict";
cc._RF.push(module, 'f2e15W+anlOQrnqsvMFebwa', 'maincontrol');
// scripts/maincontrol.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var playercontrol_1 = require("./playercontrol");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainControl = /** @class */ (function (_super) {
    __extends(MainControl, _super);
    function MainControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bird = null;
        _this.scorelabel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MainControl.prototype.start = function () {
        var _this = this;
        window['global'] = {
            score: 0
        };
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (!window['global'].isDead) {
                _this.bird.fly();
            }
        });
        this.schedule(function () {
            window['global'].score += 1;
            _this.scorelabel.getComponent(cc.Label).string = window['global'].score.toString();
        }, 1);
    };
    __decorate([
        property(playercontrol_1.default)
    ], MainControl.prototype, "bird", void 0);
    __decorate([
        property(cc.Label)
    ], MainControl.prototype, "scorelabel", void 0);
    MainControl = __decorate([
        ccclass
    ], MainControl);
    return MainControl;
}(cc.Component));
exports.default = MainControl;

cc._RF.pop();