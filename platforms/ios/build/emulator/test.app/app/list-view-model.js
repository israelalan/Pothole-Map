"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("ui/frame");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.onTapPothole = function () {
        frameModule.topmost().navigate("pothole");
    };
    HelloWorldModel.prototype.onTapSpeedBreaker = function () {
        frameModule.topmost().navigate("list");
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLHNDQUF3QztBQUN4QztJQUFxQyxtQ0FBVTtJQUUzQztlQUNJLGlCQUFPO0lBRVgsQ0FBQztJQUNNLHNDQUFZLEdBQW5CO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ00sMkNBQWlCLEdBQXhCO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBcUMsdUJBQVUsR0FhOUM7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICB9XG4gICAgcHVibGljIG9uVGFwUG90aG9sZSgpIHsgICBcbiAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKFwicG90aG9sZVwiKTsgICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9uVGFwU3BlZWRCcmVha2VyKCkge1xuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoXCJsaXN0XCIpO1xuICAgIH1cblxufSJdfQ==