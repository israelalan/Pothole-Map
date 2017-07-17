import {Observable} from 'data/observable';
import * as frameModule from "ui/frame";
import * as tnsOAuthModule from 'nativescript-oauth';
export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    public onTapAdmin() {
        tnsOAuthModule.ensureValidToken()
        .then((token: string)=>{
        console.log('token: ' + token);
        frameModule.topmost().navigate("list");
        })
        .catch((er)=>{
        //do something with the error 
        });    
    }
    public onTapUser() {
        tnsOAuthModule.ensureValidToken()
        .then((token: string)=>{
        console.log('token: ' + token);
        //frameModule.topmost().navigate("list");
        })
        .catch((er)=>{
        //do something with the error 
        });    
    }

}