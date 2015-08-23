describe("t-chart-d3", function() {

    var TChart, tChart, d3;
    beforeEach(function() {
        TChart = require("./../t-chart-d3");
        d3 = require("./../node_modules/d3/d3");
        tChart = TChart(d3);
    });

    describe("settings functions", function() {
        describe("normalize getter/setter", function() {
            describe("when given a normalize setting", function() {
                var mockNormalize, result;
                beforeEach(function() {
                    mockNormalize = "foo";
                    var result = tChart.settings.normalize(mockNormalize);
                });

                it("should store the setting", function() {
                    expect(tChart.settings.normalize()).toBe("foo");
                });
            });
        });
        describe("getter/setter", function() {
            describe("when given a settings object", function() {
                var mockSettings, result;
                beforeEach(function() {
                    mockSettings = "foo";
                    var result = tChart.settings(mockSettings);
                });

                it("should store the setting", function() {
                    expect(tChart.settings()).toBe("foo");
                });
            });
        })
    });
});
