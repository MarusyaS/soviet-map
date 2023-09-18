import L from 'leaflet';

    var constructivismIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xmlSpace="preserve">
        <circle style="fill:#00AB6F;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "constructivism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var postconstructivismIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#006F48;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "postconstructivism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var postconstructivismorientIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#35D59D;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "postconstructivismorient",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var neoclassicIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#FF5300;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "neoclassic",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var modernismIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#8742D6;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "modernism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var functionalismIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#9C6AD6;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "functionalism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var eclecticIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#FF7E40;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "eclectic",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var constructneoclassIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <defs>
        <linearGradient id="hal-grad">
        <stop offset="50%" stop-color="#00AB6F"/>
        <stop offset="50%" stop-color="#FF5300"/>
        </linearGradient>
        </defs>
        <circle style="fill:url(#hal-grad);stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "constructivism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});

    var postconstructneoclassIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <defs>
        <linearGradient id="half-grad">
        
        <stop offset="50%" stop-color="rgb(0, 111, 72)"/>
        <stop offset="50%" stop-color="rgb(255, 83, 0)"/>
        </linearGradient>
        </defs>
        <circle style="fill:url(#half-grad);stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "constructivism",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});



    var unknownIcon =  L.divIcon({ 
        html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 100 100" xml:space="preserve">
        <circle style="fill:#b8adad;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
        </svg>` , 
    className: "unknown",
    iconSize: [20, 20],
    iconAnchor: [10, 0]});



    export {constructivismIcon, postconstructivismIcon, postconstructivismorientIcon,  neoclassicIcon, modernismIcon, functionalismIcon, eclecticIcon, constructneoclassIcon, postconstructneoclassIcon, unknownIcon};

