describe("t-chart-d3", function() {

    var TChart, tChart, d3, mockData;
    beforeEach(function() {
        TChart = require("./../t-chart-d3");
        d3 = require("./../node_modules/d3/d3");
        tChart = TChart(d3);
        mockData = [{'a': 20}, {'a': 10}, {'a': 5}, {'a': 17}, {'a': 9}, {'a': 4}];
    });

    describe("data transform functions", function() {
        describe("sort function", function() {
            describe("when given a metric", function() {
                describe("when given data and a property to sort by", function() {
                    it("should call javascript sort and return results");
                });
            });
        });
        describe("normalize function", function() {
            describe("when set to normalize by max", function() {
                describe("when given data and a property to transform", function() {
                    it("should normalize data vs max")
                })
            })
            describe("when set to normalize by integral", function() {
                describe("when given data and a property to transform", function() {
                    it("should normalize data vs sum of data")
                })
            })
        })
    });
});
