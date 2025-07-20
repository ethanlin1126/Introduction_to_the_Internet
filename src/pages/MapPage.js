import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapPage = () => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
  const [markerPosition, setMarkerPosition] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const handleAddressChange = (event) => setAddress(event.target.value);

  const handleSearchLocation = () => {
    if (!address) {
      alert("Please enter a valid address");
      return;
    }

    if (!window.google || !window.google.maps) {
      alert("Google Maps API is not fully loaded yet");
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        const newLocation = { lat: lat(), lng: lng() };
        setLocation(newLocation);
        setMarkerPosition(newLocation);
      } else {
        alert(`Address not found or invalid. Reason: ${status}`);
      }
    });
  };

  return (
    <div>
      <h1>Map Search</h1>
      <div>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter address"
        />
        <button onClick={handleSearchLocation}>Search Location</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <LoadScript googleMapsApiKey="google map api">
          <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapPage;
