fetch('http://127.0.0.1:5500/Users/viacheslavm/Desktop/VSCode/Study Space/index.html/STUDY SPACE/HmWORK 36/home-work-data.json')
.then(response => response.json())
.then(data => console.log(data));