RunComp.SetLightLevel()
radio.setGroup(24)
let cas = control.millis()
radio.onReceivedNumber(function on_received_number() {
    cas
})
RunComp.OnLightDrop(function on_light_drop() {
    let cas: number;
    cas
    cas = cas / 1000
    basic.showNumber(cas)
})
