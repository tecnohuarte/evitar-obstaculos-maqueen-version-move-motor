let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (distancia < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 128)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 128)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
