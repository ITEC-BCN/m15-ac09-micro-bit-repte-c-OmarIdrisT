dau = 0

def on_received_number(receivedNumber):
    if receivedNumber > dau:
        basic.show_icon(IconNames.SAD)
    elif receivedNumber < dau:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.ASLEEP)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global dau
    dau = randint(1, 6)
    basic.show_number(dau)
    radio.send_number(dau)
input.on_button_pressed(Button.A, on_button_pressed_a)
