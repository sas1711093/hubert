music.setVolume(500)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(988, music.beat(BeatFraction.Breve))
})
