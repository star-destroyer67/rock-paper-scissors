enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && number == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (receivedNumber == 3 && number == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (receivedNumber == 2 && number == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (receivedNumber == 1 && number == 2) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (receivedNumber == 3 && number == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (receivedNumber == 3 && number == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (receivedNumber == 3 && number == 2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
    if (receivedNumber == 2 && number == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
    if (receivedNumber == 1 && number == 3) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    if (number == 4) {
        number += -3
    }
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (number == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let number = 0
number = 0
radio.setGroup(1)
