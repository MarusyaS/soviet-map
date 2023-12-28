import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import API_BASE_URL from './config';
import './Map.css';
import React, {useState} from "react";
import items from './soviet_arch_new.json';
import {constructivismIcon, postconstructivismIcon, postconstructivismorientIcon,  neoclassicIcon, modernismIcon, functionalismIcon, eclecticIcon, constructneoclassIcon, postconstructneoclassIcon, unknownIcon} from './Markers';
import {
    Typography,
    Box,
    Paper,
    Grid,
    TextField,
} from '@mui/material';
// import customIcon from './Markers.js';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Legend from './legend';
import { red } from '@mui/material/colors';


const position = [54.104403, 51.175140];
const inputColor = red[800];

// var ImgSrc = 'https://pastvu.com/_p/d/h/u/a/huannyd9o8722acob6.jpg';



export function NewMap() {
    const [searchInput, setSearchInput] = useState("");
    const [searchParam] = useState(["Year"]);

    function search(items) {
        return items.filter((item) => {
            if ((item[searchParam] !== undefined) & (item[searchParam] !== null)){
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(searchInput.toLowerCase()) > -1
                    );
                });
            }
            else {
                return null;
            }
        });
    }



    return (

      <><Grid container spacing={2} rowSpacing={1} justifyContent="space-evenly" alignItems="stretch" sx={{ paddingTop: '10px' }}>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom> Карта советской архитектуры </Typography>
            </Grid>     
        
            <Grid item xs={8}>
                <Box>
                <Paper elevation={3}>
                        <MapContainer center={position} zoom={3.2} minZoom={2} scrollWheelZoom={true} attributionControl={false}>
                            {/* // attributionControl={false} > */}
                            <TileLayer

                                url= 'https://api.mapbox.com/styles/v1/meanwhale/clldlecqo00zo01qs05ow18qo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVhbndoYWxlIiwiYSI6ImNsbG02ZHowcDFscXozcGxpeHM0ZjU2ZGEifQ.IC4kCmaz2jShMYFEcp34Uw'
                                attribution = 'Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                                />

                                 <MarkerClusterGroup
                                    chunkedLoading
                                > 
                                 {search(items).map((item) => (
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
                                        {(item.Image !== undefined) & (item.Image !== null) ? 
                                       
                                     <img src={item.Image} style={{width: '200px',  display: 'block', margin: '0 auto' }} alt="Illustration"/>
                                     : null}
                                     {/* {(item.Author !== undefined) & (item.Author !== null) & (item.Author !== '?') ? 
                                       
                                       <b>Автор:</b> {item.Author} 
                                       : null} */}
                                       <b>Автор: </b> {item.Author}  <br /> <b> Год: </b>{item.Year} <br /> <b>Тип памятника: </b> {item.Type} <br/> <b>Стиль: </b> {item.style} <br/> <br/> {item.Description} <br/> <b>Адрес: </b> {item.Adress} 
                     
                                     </Popup>
                                     </Marker>))}
                                    
                                </MarkerClusterGroup>
        

                    </MapContainer>
                    
                </Paper> </Box>
            </Grid>
            <Grid item xs={3} >
            <Box>  
            <TextField 
            // color= {inputColor}
            margin="normal"
            fullWidth                         
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            label="Поиск по дате"
            sx={{
                borderColor: {
                  color: "red",
                //   background: "green"
                }
              }}
            // multiline
            />
            </Box>  
    
        
            <Box>
                    <Paper elevation={3}>

                        <Legend/>
                    </Paper>
                </Box>

            </Grid>

      </Grid>

      </>    
     )

}
;

