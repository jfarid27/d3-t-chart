(function() {

    var tChart = function(d3) {
        var self = this;

        var settings = {
            "normalize": false
        }

        var eventEmitter = d3.dispatch("draw", "redraw", "clear");

        var xScaleLeft, xScaleRight, yScaleLeft, yScaleRight;

        var leftBars, rightBars, horizontalAxis, verticalAxis;

        var leftBarLabels, rightBarLabels, horizontalLeftAxisLabels, horizontalRightAxisLabels;

        self = function(svgSelector) {

        }

        self.scaleData = function(data) {

        }

        /* Getter/setter for entire settings object
         * @param {SettingsObject} describes all settings
         */
        self.settings = function() {
            if (arguments.length > 0) {
                settings = arguments[0];
                return self;
            }
            return settings;
        };

        /* Getter/setter for normalize setting which will normalize all data along
         * their respective scales
         * @param {Boolean} represents wheter normalize is set or not
         */
        self.settings.normalize = function () {
            if (arguments.length > 0) {
                settings.normalize = arguments[0];
                return self;
            }
            return settings.normalize;
        };

        return self;
    }

    if (module) {
        module.exports = tChart;
    }

})()
