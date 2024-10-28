let dau = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber > dau) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < dau) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    dau = randint(1, 6)
    basic.showNumber(dau)
    radio.sendNumber(dau)
})
