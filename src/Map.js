import {
    MapContainer,
    TileLayer,
    MapControl,
    Marker,
    Popup,
    useMap
} from 'react-leaflet';
import {
    render
} from 'react-dom';
import Container from '@mui/material/Container';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import API_BASE_URL from './config';
import './Map.css';
import {
    Icon
} from "leaflet";

import React, {
    useEffect,
    useState
} from "react";
import items from './soviet_arch.json';
import {
    Link
} from "react-router-dom";
// import LegendControl from "./Legend";
import {constructivismIcon, postconstructivismIcon, postconstructivismorientIcon,  neoclassicIcon, modernismIcon, functionalismIcon, eclecticIcon, constructneoclassIcon, postconstructneoclassIcon, unknownIcon} from './Markers';
import {
    Typography,
    Box,
    Paper,
    Grid,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Table
} from '@mui/material';
// import customIcon from './Markers.js';
import MarkerClusterGroup from 'react-leaflet-cluster';

const position = [54.104403, 51.175140];


var ImgSrc = 'https://pastvu.com/_p/d/h/u/a/huannyd9o8722acob6.jpg';

  

export function NewMap() {

    const markers = items.map(                        
            item => (

                <Marker
                    //   key = {item.ID}
                    position={[item.LAT, item.LON] }
                    icon = {item.style === 'конструктивизм' ? constructivismIcon : 
                    item.style === 'постконструктивизм'? postconstructivismIcon :
                    item.style === 'постконструктивизм (восточный стиль)' ? postconstructivismorientIcon :
                    item.style === 'советский неоклассицизм' ? neoclassicIcon :
                    item.style === 'советский модернизм' ? modernismIcon :
                    item.style === 'функционализм' ? functionalismIcon : 
                    item.style === 'эклектика' ? eclecticIcon :
                    item.style === 'конструктивизм, советский неоклассицизм' ? constructneoclassIcon :
                    item.style === 'постконструктивизм, советский неоклассицизм' ? postconstructneoclassIcon :
                    unknownIcon 
                }
                    >
                <Popup>
                <img src={ImgSrc} style={{width: '200px',  display: 'block', margin: '0 auto' }} alt="Illustartion"/> 
                
                 <br /> <b>Автор: </b> {item.Author}<br /> <b>Год: </b>{item.Year} <br /> <b>Тип памятника: </b> {item.Type} <br/> <b>Стиль: </b> {item.style} <br/> <br/> {item.Description}

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

                                url= 'https://api.mapbox.com/styles/v1/meanwhale/clldlecqo00zo01qs05ow18qo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVhbndoYWxlIiwiYSI6ImNsbG02ZHowcDFscXozcGxpeHM0ZjU2ZGEifQ.IC4kCmaz2jShMYFEcp34Uw'
                                attribution = 'Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                                // accessToken= '>
                                // maxZoom: 22
                                />

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
                                    {/* <TableRow> <TableCell>{constructivismIcon, postconstructivismIcon, postconstructivismorientIcon,  neoclassicIcon, modernismIcon, functionalismIcon, eclecticIcon, constructneoclassIcon, postconstructneoclassIcon, unknownIcon}  */}
                                    {/* </TableCell></TableRow>  */}
                                    {/* <TableRow>
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
                                    </TableRow> */}

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
;

