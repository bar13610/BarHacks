import socket
sock=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
try:
    connect = sock.connect(("000.000.000.000",4444)) #Insert IP and port
    sock.close()
except ConnectionRefusedError:
    print('Seems like the host is down ')
