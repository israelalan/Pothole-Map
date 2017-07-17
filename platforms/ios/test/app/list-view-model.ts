import {Observable} from 'data/observable';
import * as frameModule from "ui/frame";
export class HelloWorldModel extends Observable {

    constructor() {
        super();

    }
    public onTapPothole() {   
        frameModule.topmost().navigate("pothole");         
    }
    public onTapSpeedBreaker() {
        frameModule.topmost().navigate("list");
    }

}