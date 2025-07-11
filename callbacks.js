function fetchDataWithCallback(callback) {
    setTimeout (() => {
      callback("Hello Jest")
    },1000)
}

module.exports = fetchDataWithCallback; 