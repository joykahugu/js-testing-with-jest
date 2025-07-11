 const fetchDataWithCallback = require ("./callbacks");

 test ("calls the callback with expected data after a delay", (done) => {
    function callback(data) {
        expect(data).toBe("Hello Jest");
        done();
    }
    fetchDataWithCallback(callback);
 }
 
)
