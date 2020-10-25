import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const Maps = () => {
	const position = {
		lat: 10.505041,
		lng: -66.897504,
	};

	return (
		<Map center={position} zoom={13}>
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={position}
				icon={icon({
					iconUrl: "/img/marker-icon.png",
					shadowUrl: "/img/marker-shadow.png",
				})}>
				<Popup>Aqui estamos.</Popup>
			</Marker>
		</Map>
	);
};

export default Maps;
