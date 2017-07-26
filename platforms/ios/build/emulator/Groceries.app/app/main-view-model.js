"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("ui/frame");
var tnsOAuthModule = require("nativescript-oauth");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.onTapAdmin = function () {
        tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            console.log('token: ' + token);
            frameModule.topmost().navigate("list");
        })
            .catch(function (er) {
            //do something with the error 
        });
    };
    HelloWorldModel.prototype.onTapUser = function () {
        tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            console.log('token: ' + token);
            //frameModule.topmost().navigate("list");
        })
            .catch(function (er) {
            //do something with the error 
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLHNDQUF3QztBQUN4QyxtREFBcUQ7QUFDckQ7SUFBcUMsbUNBQVU7SUFFM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFTSxvQ0FBVSxHQUFqQjtRQUNJLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTthQUNoQyxJQUFJLENBQUMsVUFBQyxLQUFhO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNWLDhCQUE4QjtRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxtQ0FBUyxHQUFoQjtRQUNJLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTthQUNoQyxJQUFJLENBQUMsVUFBQyxLQUFhO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9CLHlDQUF5QztRQUN6QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1YsOEJBQThCO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFxQyx1QkFBVSxHQTJCOUM7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCc7XG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXBBZG1pbigpIHtcbiAgICAgICAgdG5zT0F1dGhNb2R1bGUuZW5zdXJlVmFsaWRUb2tlbigpXG4gICAgICAgIC50aGVuKCh0b2tlbjogc3RyaW5nKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICcgKyB0b2tlbik7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShcImxpc3RcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXIpPT57XG4gICAgICAgIC8vZG8gc29tZXRoaW5nIHdpdGggdGhlIGVycm9yIFxuICAgICAgICB9KTsgICAgXG4gICAgfVxuICAgIHB1YmxpYyBvblRhcFVzZXIoKSB7XG4gICAgICAgIHRuc09BdXRoTW9kdWxlLmVuc3VyZVZhbGlkVG9rZW4oKVxuICAgICAgICAudGhlbigodG9rZW46IHN0cmluZyk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAnICsgdG9rZW4pO1xuICAgICAgICAvL2ZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShcImxpc3RcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXIpPT57XG4gICAgICAgIC8vZG8gc29tZXRoaW5nIHdpdGggdGhlIGVycm9yIFxuICAgICAgICB9KTsgICAgXG4gICAgfVxuXG59Il19