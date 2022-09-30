enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    user = receivedNumber
    CheckWin()
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
    CheckWin()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
function CheckWin () {
    if (user == 1 && number == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (user == 3 && number == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (user == 2 && number == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (user == 1 && number == 2) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (user == 3 && number == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (user == 3 && number == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        game.addScore(1)
    }
    if (user == 3 && number == 2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
    if (user == 2 && number == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
    if (user == 1 && number == 3) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    }
    if (user == 0) {
        basic.showIcon(IconNames.Silly)
    } else if (number == 0) {
        basic.showIcon(IconNames.Silly)
    }
}
let user = 0
let number = 0
number = 0
user = 0
radio.setGroup(1)
