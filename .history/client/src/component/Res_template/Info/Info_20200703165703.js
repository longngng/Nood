import React, {useState,useEffect} from "react";
import axios from 'axios';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import Pin from './Marker';
import "@reach/combobox/styles.css";
//import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  display: "flex",
  height: "40vh",
  width: "100%",
};
const options = {
  //styles: mapStyles,
  disableDefaultUI: true,
  mapTypeControl: true,
  streetViewControl: true,
  styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  zoomControl: true,
};
const center = {
  lat: 1.299247,
  lng: 103.771597,
};
export default function Info() {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyCFKQpWOnIOgYhSzpfe0Aei7Uw0D8frTKo",
      libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    
    const onMapClick = React.useCallback((e) => {
      setMarkers((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        },
      ]);
    }, []);
  
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
      mapRef.current = map;
    }, []);
  
    const panTo = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(15);
    }, []);
    const [posts,setPosts] = useState([]);
    useEffect( () => {
      axios.get('http://localhost:5000/canteens')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    } 
    )
    renderMarkers(map, maps) {
      let marker = new maps.Marker({
        position: {lat: "1.299247", lng: "103.771597"},
        title: 'Hello World!'
      });
    }
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
  
    return (
      <div>
        <h1>
          Bears{" "}
          <span role="img" aria-label="tent">
            ⛺️
          </span>
        </h1>
  
        {/* <Locate panTo={panTo} /> */}
        <Search panTo={panTo} />
  
        <GoogleMap 
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={17}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
          {/* <Pin
            lat={1.299271}
            lng={103.771597}
            name="Arise and Shine"
            color="red"
          /> */}
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url: `/bear.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
  
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  <span role="img" aria-label="bear">
                    🐻
                  </span>{" "}
                  Alert
                </h2>
                <p>Spotted {formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
        <div> {
          posts.map ((element) => {
            if (element.name === "Arise and Shine") {
              return (
              <p>{element.desc}</p>
              )
            }
          })
          }
        </div>
        <div> {
          posts.map ((element) => {
            if (element.name === "Arise and Shine") {
              return (
                <p>The current rating for this restaurant is {element.rating === 0 ? element.rating : Math.round((element.rating/element.rating_num) * 100) / 100}
                </p>
              )
            }
          })
          }
        </div>
      </div>
    );
  }
  
  function Locate({ panTo }) {
    return (
      <button
        className="locate"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        {/* <img src="/compass.svg" alt="compass" /> */}
      </button>
    );
  }
  
  function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 1.299247, lng: () => 103.771597},
        radius: 100 * 1000,
      },
    });
  
    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
  
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
      } catch (error) {
        console.log("😱 Error: ", error);
      }
    };
  
    return (
      <div className="search">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your location"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }