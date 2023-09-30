<script>
        const serverIp = '000.000.000.000'; // Replace with the actual IP address !
        const numRequests = 10000; // Number of packets sent

        for (let i = 0; i < numRequests; i++) {
            const pingImage = new Image();

            pingImage.onload = function() {
                // Do nothing on successful ping.
            };

            pingImage.onerror = function() {
                console.log('Server ping failed.');
            };

            pingImage.src = `http://${serverIp}/ping.png?t=${Date.now()}`;
        }
    </script>
