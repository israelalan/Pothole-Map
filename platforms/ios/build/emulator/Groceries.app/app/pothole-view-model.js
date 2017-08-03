"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("ui/enums");

var fetchModule = require("fetch");

var geolocation = require("nativescript-geolocation");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var HelloWorldModel = (function () {
    function HelloWorldModel() {
    }
    HelloWorldModel.prototype.potholeAdd = function () {
        nativescript_geolocation_1.enableLocationRequest();
        var location = geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, updateDistance: 0.1, maximumAge: 500000, timeout: 20000 }).
            then(function (loc) {
            if (loc) {
                console.log("Success ", loc.latitude);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });
        fetchModule.fetch("http://localhost:5000/coordinates", {
        method: "POST",
        body: JSON.stringify({"longitude":12})
    })
    .then(function(response) {
        alert({title: "POST Response", message: JSON.stringify(response)});
    }, function(error) {
        console.log(JSON.stringify(error));
    })
    };
    return HelloWorldModel;
}());
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG90aG9sZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG90aG9sZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0NBQW9DO0FBQ3BDLHNEQUF3RDtBQUN4RCxxRUFBcUk7QUFDckk7SUFBQTtJQWNBLENBQUM7SUFaVSxvQ0FBVSxHQUFqQjtRQUNJLGdEQUFxQixFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDMUksSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCAge1xuXG4gICAgcHVibGljIHBvdGhvbGVBZGQoKSB7XG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHVwZGF0ZURpc3RhbmNlOiAwLjEsIG1heGltdW1BZ2U6IDUwMDAwMCwgdGltZW91dDogMjAwMDAgfSkuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24gKGxvYykge1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyBcIixsb2MubGF0aXR1ZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cblxufSJdfQ==