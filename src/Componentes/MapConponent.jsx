import React from 'react'
// import { MapContainer, TileLayer, useMap ,Marker,Popup ,Map } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'

function MapConponent() {
  return (
     <div className=" flex ">
        <div>
        <button className=" text-center px-8 py-1 rounded-full bg-slate-100 border cursor-pointer font-medium">
              POPULAR
            </button>
            <button className=" text-center px-8 py-1 rounded-full bg-slate-100 border cursor-pointer font-medium">
              INVESTMENT HOTSPOTS
            </button>
            <button className=" text-center px-8 py-1 rounded-full bg-slate-100 border cursor-pointer font-medium">
              AFFORDABLE
            </button>
            <button className=" text-center px-8 py-1 rounded-full bg-slate-100 border cursor-pointer font-medium">
              GREAT LIFESTYLE{" "}
            </button>
        </div>
           <div> <MapContainer 
              center={[25.482952, 78.552246]}
              zoom={13}
              scrollWheelZoom={false}
            > 
               <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              /> 
             
             </MapContainer > 
            
           </div> 
    </div>
    
  )
}


function MyComponent() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    return null
  }
  
  function MyMapComponent() {
    return (
      <MapContainer center={[50.5, 30.5]} zoom={13}>
        <MyComponent />
      </MapContainer>
    )
  }

export default {MapConponent,MyMapComponent} 