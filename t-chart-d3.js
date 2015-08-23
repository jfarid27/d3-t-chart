(function() {

    var tChart = function(d3, _) {
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

        /* Transform method library for easier data manipulation
         */
        self.transform = {};

        /* Returns new array with data sorted by property using given measure function
         * @param {CompareFunction} comparator. used in sorting (see javascript sort docs)
         * @param {[Object]} data. Array to sort
         * @param {String} by. property of objects to sort by
         */
        self.transform.sort = function(comparator, data, by) {
            return data.sort(function(a, b){
                return comparator(a[by], b[by]);
            });
        }

        /* Normalization Library
         */
         self.transform.normalize = {}

        /* Returns new array with data property normalized using max
         * @param {[Object]} data. Array of objects to normalize
         * @param {String} by. property of objects to normalize
         */
        self.transform.normalize.byMax = function(data, by) {
            var max = data.map(function(element){
                    return element[by]
                }).reduce(function(greatest, next) {
                    return (next > greatest) ? next : greatest
                }, Number.NEGATIVE_INFINITY);

            return data.map(function(element) {
                var newProperty = {};
                newProperty[by] = element[by] / max;
                var newElement =  _.extend({}, element, newProperty);
                return newElement;
            })
        }

        /* Returns new array with data property normalized using integral
        * @param {[Object]} data. Array of objects to normalize
        * @param {String} by. property of objects to normalize
        */
        self.transform.normalize.byIntegral = function(data, by) {
            var sum = data.map(function(element){
                    return element[by]
                }).reduce(function(agg, next) {
                    return next + agg
                }, 0);

            return data.map(function(element) {
                var newProperty = {};
                newProperty[by] = element[by] / sum;
                var newElement =  _.extend({}, element, newProperty);
                return newElement;
            })
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
