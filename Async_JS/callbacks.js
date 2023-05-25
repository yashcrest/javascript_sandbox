fetch('https://api.weatherapi.com/v1/current.json?q=kathmandu&lang=eu&key=34d6d8dc8a584ef6b4d92016232105')
.then(response => response.json())
.then(data => document.body.innerHTML = JSON.stringify(data));

