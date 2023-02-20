input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    basic.showString("" + (Moisture))
})
let Graph_Moisture = 0
let Moisture = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    `)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    if (Moisture > 600) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        Graph_Moisture = Math.map(Moisture, 750, 150, 0, 10)
        led.plotBarGraph(
        Graph_Moisture,
        25
        )
        basic.pause(40000)
    }
})
basic.forever(function () {
    music.playMelody("E - - - - - - - ", 325)
})
