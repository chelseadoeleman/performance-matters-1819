const geoCoder = new MapboxGeocoder({ 
    accessToken: 'pk.eyJ1IjoibWVsa2JvZXIiLCJhIjoiY2pydDZnemZrMGk2NTQ0bnB5N2FzYnY4ZSJ9.6Rz3rv9QYard69Bd1_onig'
})

mapboxgl.accessToken = 'pk.eyJ1IjoibWVsa2JvZXIiLCJhIjoiY2pydDZnemZrMGk2NTQ0bnB5N2FzYnY4ZSJ9.6Rz3rv9QYard69Bd1_onig'

new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 1,
    center: [4.895168, 52.370216]
})