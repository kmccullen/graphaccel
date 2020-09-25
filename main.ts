bluetooth.startUartService()
basic.forever(function () {
    serial.writeValue("a.x", input.acceleration(Dimension.X))
    serial.writeValue("a.y", input.acceleration(Dimension.Y))
    serial.writeValue("a.z", input.acceleration(Dimension.Z))
})
