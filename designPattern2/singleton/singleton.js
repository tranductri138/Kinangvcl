const singleton1 = (
    function () {
        let instance

        function createInstance() {
            const obj = new Object('I am the instance')
            return obj
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance()
                }
                return instance
            }
        }
    }
)()

function run () {
    const i1 = singleton1.getInstance()
    const i2 = singleton1.getInstance()
    console.log(i1 === i2)
}

// run()

module.exports = singleton1