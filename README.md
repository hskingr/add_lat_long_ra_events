# Add Lat Long to RA Events

This is a service that discovers new venues in a MongoDB and parses the address to add the latitude and longitude to the venue document.

This is dependent on the main web scraping application here: [RA Music Events Grabber](https://github.com/hskingr/music_events_grabber)

### To Run

```
docker compose build
docker compose up
```

### Environmnet Variables

Mapbox API key needed for geocoding address

`MAPBOX_API_KEY`
