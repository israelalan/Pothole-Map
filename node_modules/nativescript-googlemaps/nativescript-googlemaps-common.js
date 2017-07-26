"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var TnsGoogleMapsBase = (function (_super) {
    __extends(TnsGoogleMapsBase, _super);
    function TnsGoogleMapsBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TnsGoogleMapsBase.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        set: function (value) {
            this.nativeView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TnsGoogleMapsBase.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        set: function (value) {
            this.nativeView = value;
        },
        enumerable: true,
        configurable: true
    });
    TnsGoogleMapsBase.prototype.addMarker = function (marker) {
    };
    TnsGoogleMapsBase.prototype.clearMap = function () {
    };
    return TnsGoogleMapsBase;
}(view_1.View));
TnsGoogleMapsBase.mapLoadedEvent = "mapLoaded";
exports.TnsGoogleMapsBase = TnsGoogleMapsBase;
exports.markerProperty = new view_1.Property({ name: "marker" });
exports.markerProperty.register(TnsGoogleMapsBase);
