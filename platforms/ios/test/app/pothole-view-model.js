"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var enums_1 = require("ui/enums");
var geolocation = require("nativescript-geolocation");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.potholeAdd = function () {
        nativescript_geolocation_1.enableLocationRequest();
        var location = geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, updateDistance: 0.1, maximumAge: 500000, timeout: 20000 }).
            then(function (loc) {
            if (loc) {
                console.log(loc.longitude);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG90aG9sZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG90aG9sZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDLGtDQUFvQztBQUNwQyxzREFBd0Q7QUFDeEQscUVBQXFJO0FBQ3JJO0lBQXFDLG1DQUFVO0lBRTNDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRU0sb0NBQVUsR0FBakI7UUFDSSxnREFBcUIsRUFBRSxDQUFDO1FBQzVCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3RJLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFxQyx1QkFBVSxHQWlCOUM7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3Rob2xlQWRkKCkge1xuICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICB2YXIgbG9jYXRpb24gPSBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHVwZGF0ZURpc3RhbmNlOiAwLjEsIG1heGltdW1BZ2U6IDUwMDAwMCwgdGltZW91dDogMjAwMDAgfSkuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24gKGxvYykge1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvYy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cbn0iXX0=