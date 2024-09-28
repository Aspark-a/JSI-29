me = Tello()
me.connect()
me.takeoff() #takeoff
me.land() #land
Me.move_forward()
Me.rotate_counter_clockwise(45)
#lenh bay len/ha xuong
me.move_up(x)
me.move_down(x)
#x la so do don vi(cm)
#from djitellopy imptort Tello(import thu vien)
#me.up()
#me.move_forward()
#me.rotate_counter_clockwise(45)
sleep(s) #lenh cho
# don vi s duoc tinh bang giay(seconds)
me.mover_left(x) # bay sang trai
me.mover_right(x) # bay sang phai
me.move_up(x) # bay toi
me.move_back(x) # bay lui

