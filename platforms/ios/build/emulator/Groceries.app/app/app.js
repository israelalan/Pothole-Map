"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var app = require("application");
var tnsOAuthModule = require("nativescript-oauth");
var facebookInitOptions = {
    clientId: '163413974202695',
    clientSecret: '217b5ff9b8b2573e7f65715b99d11181',
    scope: ['email'] //whatever other scopes you need 
};
tnsOAuthModule.initFacebook(facebookInitOptions);
app.start({ moduleName: 'main-page' });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQXlCO0FBQ3pCLGlDQUFtQztBQUNuQyxtREFBcUQ7QUFFckQsSUFBSSxtQkFBbUIsR0FBNkM7SUFDaEUsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixZQUFZLEVBQUUsa0NBQWtDO0lBQ2hELEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlDQUFpQztDQUNyRCxDQUFDO0FBRUYsY0FBYyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2pELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYnVuZGxlLWNvbmZpZ1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCc7XG5cbnZhciBmYWNlYm9va0luaXRPcHRpb25zIDogdG5zT0F1dGhNb2R1bGUuSVRuc09BdXRoT3B0aW9uc0ZhY2Vib29rID0ge1xuICAgIGNsaWVudElkOiAnMTYzNDEzOTc0MjAyNjk1JyxcbiAgICBjbGllbnRTZWNyZXQ6ICcyMTdiNWZmOWI4YjI1NzNlN2Y2NTcxNWI5OWQxMTE4MScsXG4gICAgc2NvcGU6IFsnZW1haWwnXSAvL3doYXRldmVyIG90aGVyIHNjb3BlcyB5b3UgbmVlZCBcbn07XG4gXG50bnNPQXV0aE1vZHVsZS5pbml0RmFjZWJvb2soZmFjZWJvb2tJbml0T3B0aW9ucyk7XG5hcHAuc3RhcnQoeyBtb2R1bGVOYW1lOiAnbWFpbi1wYWdlJyB9KTtcbiJdfQ==