import "./bundle-config";
import * as app from 'application';
import * as tnsOAuthModule from 'nativescript-oauth';

var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: '163413974202695',
    clientSecret: '217b5ff9b8b2573e7f65715b99d11181',
    scope: ['email'] //whatever other scopes you need 
};
 
tnsOAuthModule.initFacebook(facebookInitOptions);
app.start({ moduleName: 'main-page' });
