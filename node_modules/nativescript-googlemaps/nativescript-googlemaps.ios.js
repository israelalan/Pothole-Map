"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_googlemaps_common_1 = require("./nativescript-googlemaps-common");
exports.markerProperty = nativescript_googlemaps_common_1.markerProperty;
var TnsGoogleMaps = (function (_super) {
    __extends(TnsGoogleMaps, _super);
    function TnsGoogleMaps() {
        var _this = _super.call(this) || this;
        _this.ios = GMSMapView.mapWithFrameCamera(CGRectZero, null);
        _this.ios.myLocationEnabled = true;
        var settings = _this.ios.settings;
        settings.myLocationButton = true;
        settings.compassButton = true;
        return _this;
    }
    TnsGoogleMaps.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.notify({ eventName: TnsGoogleMaps.mapLoadedEvent, object: this, map: this.ios });
    };
    TnsGoogleMaps.prototype.addMarker = function (marker) {
        if (marker && this.ios) {
            var newMarker = new GMSMarker();
            newMarker.position = CLLocationCoordinate2DMake(marker.latitude, marker.longitude);
            var cameraUpdate = GMSCameraUpdate.setTargetZoom(newMarker.position, this.ios.maxZoom);
            newMarker.map = this.ios;
            this.ios.animateWithCameraUpdate(cameraUpdate);
        }
    };
    TnsGoogleMaps.prototype.clearMap = function () {
        if (this.ios) {
            this.ios.clear();
        }
    };
    TnsGoogleMaps.prototype[nativescript_googlemaps_common_1.markerProperty.getDefault] = function () {
        return undefined;
    };
    TnsGoogleMaps.prototype[nativescript_googlemaps_common_1.markerProperty.setNative] = function (value) {
        if (value) {
            this.addMarker(value);
        }
        else {
            this.clearMap();
        }
    };
    return TnsGoogleMaps;
}(nativescript_googlemaps_common_1.TnsGoogleMapsBase));
exports.TnsGoogleMaps = TnsGoogleMaps;
