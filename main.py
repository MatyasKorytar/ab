RunComp.set_light_level()
radio.set_group(24)
cas = control.millis()
def on_received_number():
        cas
radio.on_received_number(on_received_number)

def on_light_drop():
        cas
        cas = cas / 1000
        basic.show_number(cas)
RunComp.on_light_drop(on_light_drop)

