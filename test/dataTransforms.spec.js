describe("t-chart-d3", function() {

    var TChart, tChart, d3, mockData;
    beforeEach(function() {
        TChart = require("./../t-chart-d3");
        d3 = require("./../node_modules/d3/d3");
        underscore = require("./../node_modules/underscore/underscore");
        tChart = TChart(d3, underscore);
        mockData = [{'a': 20}, {'a': 10}, {'a': 5}, {'a': 17}, {'a': 9}, {'a': 4}];

    });

    describe("data transform functions", function() {
        describe("sort function", function() {
            describe("when given a measure", function() {
                var measure;
                beforeEach(function() {
                    measure = function(a, b) {
                        return (a > b) ? 1 : -1;
                    }
                })
                describe("when given data and a property to sort by", function() {
                    var results, by;
                    beforeEach(function() {
                        by = "a"
                        result = tChart.transform.sort(measure, mockData, by)
                    })
                    it("should sort descending from left and return results", function() {
                        var isSorted = false;
                        isSorted = mockData.reduce(function(agg, next){
                            if ((agg.status === false) || (agg.prev > next.a)) {
                                return false;
                            }
                            return {
                                prev: next.a,
                                status: true
                            }
                        }, {
                            status: true,
                            prev: Number.NEGATIVE_INFINITY
                        })
                        expect(isSorted).toBeTruthy();
                    });
                });
            });
        });
        describe("normalize function", function() {
            describe("when set to normalize by max", function() {
                describe("when given data and a property to transform", function() {
                    var prop, expected, result;
                    beforeEach(function() {
                        prop = "a";
                        expected = [1, .5, .25, 17/20, 9/20, 4/20];
                        result = tChart.transform.normalize.byMax(mockData, prop);
                    })
                    it("should normalize data vs max", function() {
                        var vals = result.map(function(val, i){
                            return val.a === expected[i]
                        })
                        var allNormalized = vals.reduce(function(agg, next){
                            return agg && next
                        }, true);

                        expect(allNormalized).toBeTruthy();
                    })
                })
            })
            describe("when set to normalize by integral", function() {
                describe("when given data and a property to transform", function() {
                    var prop, expected, result;
                    beforeEach(function() {
                        prop = "a";
                        expected = [20/65, 10/65, 5/65, 17/65, 9/65, 4/65];
                        result = tChart.transform.normalize.byIntegral(mockData, prop);
                    })
                    it("should normalize data vs sum of data", function() {
                        var vals = result.map(function(val, i){
                            return val.a === expected[i]
                        })
                        var allNormalized = vals.reduce(function(agg, next){
                            return agg && next
                        }, true);

                        expect(allNormalized).toBeTruthy();
                    })
                })
            })
        })
    });
});
