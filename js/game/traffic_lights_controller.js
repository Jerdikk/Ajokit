(function() {
    TRAFFICSIM_APP.game = TRAFFICSIM_APP.game || {};

    var logger = TRAFFICSIM_APP.utils.logger;
    var Vector3 = TRAFFICSIM_APP.utils.Vector3;

    TRAFFICSIM_APP.game.RouteDirection = {
        "TOP": 0,
        "RIGHT": 1,
        "BOTTOM": 2,
        "LEFT": 3
    };

    TRAFFICSIM_APP.game.TrafficLightsController = function (road) {
        this._road = road;
        this._trafficLights = [];

        this._initializeTrafficLights();
    };

    TRAFFICSIM_APP.game.TrafficLightsController.prototype._initializeTrafficLights = function () {
        this._trafficLights.push(new TRAFFICSIM_APP.game.TrafficLight(this, null, TRAFFICSIM_APP.game.RouteDirection.TOP, new Vector3(0, 0, 0)));
        this._trafficLights.push(new TRAFFICSIM_APP.game.TrafficLight(this, this._trafficLights[0], TRAFFICSIM_APP.game.RouteDirection.RIGHT, new Vector3(0, 0, 0)));
        this._trafficLights.push(new TRAFFICSIM_APP.game.TrafficLight(this, this._trafficLights[1], TRAFFICSIM_APP.game.RouteDirection.BOTTOM, new Vector3(0, 0, 0)));
        this._trafficLights.push(new TRAFFICSIM_APP.game.TrafficLight(this, this._trafficLights[2], TRAFFICSIM_APP.game.RouteDirection.LEFT, new Vector3(0, 0, 0)));
        this._trafficLights[0].setNextTrafficLight(this._trafficLights[3]);
        this._trafficLights[0].setActive(true);
    };

    TRAFFICSIM_APP.game.TrafficLightsController.prototype.update = function (deltaTime) {
        this._trafficLights.forEach(function(trafficLight) {
            trafficLight.update();
        });
    };

    TRAFFICSIM_APP.game.TrafficLightsController.prototype.getRoad = function() {
        return this._road;
    }
})();
