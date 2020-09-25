bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteValue("x", input.acceleration(Dimension.X))
})
