import {Observable} from 'data/observable';
import * as frameModule from "ui/frame";
import { Accuracy } from "ui/enums";
import * as geolocation from "nativescript-geolocation";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    public potholeAdd() {
        enableLocationRequest();
    var location = geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, updateDistance: 0.1, maximumAge: 500000, timeout: 20000 }).
        then(function (loc) {
            if (loc) {
                console.log(loc.longitude);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });
}
}