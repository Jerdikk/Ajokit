// RoadRoute is a connection between RoadNode objects.

TRAFFICSIM_APP.game = TRAFFICSIM_APP.game || {};

TRAFFICSIM_APP.game.RoadRoute = function(worldController, startNode, endNode) {
    this._worldController = worldController;
    this.startNode = startNode;
    this.endNode = endNode;
    this._routeId = null;
    this._isFree = true;
};

TRAFFICSIM_APP.game.RoadRoute.prototype.isFree = function() {
    return this._isFree;
};

TRAFFICSIM_APP.game.RoadRoute.prototype.setFree = function(boolean) {
    this._isFree = boolean;
};

TRAFFICSIM_APP.game.RoadRoute.prototype.getRouteId = function() {
    return this._routeId;
};

TRAFFICSIM_APP.game.RoadRoute.prototype.setRouteId = function(routeId) {
    this._routeId = routeId;
};

TRAFFICSIM_APP.game.RoadRoute.prototype.getTargetNode = function() {
    return this.endNode;
};