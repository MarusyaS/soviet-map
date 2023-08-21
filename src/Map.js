import { MapContainer, TileLayer, MapControl, Marker, Popup } from 'react-leaflet';
import {render} from 'react-dom';
import Container from '@mui/material/Container';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import API_BASE_URL from './config';
import './Map.css';
import {Icon}  from "leaflet";
import { orange, cyan } from '@mui/material/colors';
import React, {
  useEffect,
  useState
} from "react";
import items from './soviet_arch.json';
import { Link } from "react-router-dom";
// import LegendControl from "./Legend";
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import { Typography,Box, Paper, Grid, TableBody, TableRow, TableCell, TableContainer, Table } from '@mui/material';

import MarkerClusterGroup from 'react-leaflet-cluster';

const position = [54.104403, 51.175140];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var markerShapes = [ { shape: '<circle cx="10" cy="10" r="5" />', color : '#fc9272' ,
 letter: '<text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">П</text>', 
 text: 'Поминальный комплекс' },
        { shape: '<circle cx="10" cy="10" r="5" />', color : '#fc9272' , 
        letter : '<text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">Н</text>',
        text: 'Наскальные надписи' }];



var customIcon =  L.divIcon({ html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 100 100" xml:space="preserve">
<circle style="fill:#ef6c00;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
</svg>` , 
className: "funerary",
iconSize: [20, 20],
iconAnchor: [10, 0]});





export function NewMap() {


    const markers = items.map(                        
            item => (
                
                <Marker
                    //   key = {item.ID}
                    position={[item.LAT, item.LON] }
                    icon = {customIcon}
                    >
                <Popup>
                <b> {item.Author} </b> <br /> {item.Year} <br /> {item.Type} <br/> {item.style} <br/> {item.Description}
        
                </Popup>
                </Marker>
      ));


    return (
      
      <><Grid container spacing={2} justifyContent="space-evenly" alignItems="stretch" sx={{ paddingTop: '40px' }}>
            <Grid item xs={8}>
                <Box>
                    <Paper elevation={3}>

                        <MapContainer center={position} zoom={3.2} scrollWheelZoom={true} attributionControl={false}>
                            {/* // attributionControl={false} > */}
                            <TileLayer
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community' />
                                <MarkerClusterGroup
        chunkedLoading
      >
         {markers}
      </MarkerClusterGroup>
                               
                    
                    </MapContainer>
                </Paper> </Box>


        </Grid><Grid item xs={3}>
                <Box>
                    <Paper elevation={3}>

                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={3} sx={{ fontSize: 23 }}>
                                            <Typography sx={{ fontWeight: 'bold' }}> Условные обозначения </Typography>
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CircleIcon sx={{ color: orange[800] }} />
                                        </TableCell>
                                        <TableCell> <Typography> Поминальный комплекс </Typography>  </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CircleIcon sx={{ color: cyan[900] }} />
                                        </TableCell>
                                        <TableCell> <Typography> Наскальные надписи </Typography>  </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Grid>
            

      </Grid>

      </>    
     )

}
// }
;

