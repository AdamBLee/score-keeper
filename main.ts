input.onPinPressed(TouchPin.P0, function () {
    score += 1
})
let score = 0
basic.forever(function () {
    if (score == 10) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        score = 0
    }
    basic.showNumber(score)
})
