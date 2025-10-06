function initMap() {
    if (!document.getElementById('map')) return; 

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
        zoom: 12
    });

    // Feature 1: Multiple markers
    const locations = [
        { lat: 22.2795, lng: 114.1588, title: 'Victoria Peak', description: 'Stunning views of Hong Kong.' },
        { lat: 22.3230, lng: 114.1737, title: 'Kowloon Park', description: 'A peaceful urban park.' },
        { lat: 22.2950, lng: 114.1720, title: 'Tsim Sha Tsui', description: 'Vibrant shopping and dining area.' }
    ];

    // Feature 2: Info windows
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.title}</h3><p>${location.description}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    // Feature 3: Custom reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Map';
    resetButton.style.padding = '10px';
    resetButton.style.margin = '10px';
    resetButton.style.backgroundColor = '#cc6600';
    resetButton.style.color = '#fff';
    resetButton.style.border = 'none';
    resetButton.style.cursor = 'pointer';

    resetButton.addEventListener('click', () => {
        map.setCenter({ lat: 22.3193, lng: 114.1694 });
        map.setZoom(12);
    });

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(resetButton);
}

// Ensure initMap is globally accessible
window.initMap = initMap;