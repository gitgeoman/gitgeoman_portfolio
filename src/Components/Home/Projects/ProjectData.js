import world from './img/pexels-pixabay-41949.jpg'
import hillshade from './img/hillshade.jpg'
import gazoport from './img/gazoport.png'
import aws_gis_infra from './img/aws_infra_concept.jpg'
import terrain_passability from './img/terrain_passability2.jpg'
import segmentation_img from './img/solaris_ai_segmentation.png'
import weather_img from './img/weather.png'
import geo_infrastructure from './img/geo_infrastructure.png'
import ahp_covid_img from './img/ahp_covid.png'
import navigation_img from './img/navigation_img.png'

export const ProjectList = [
    {stack: ["reactjs"], key: 1, name: "Covid 19 Tracker", description: "", link: "", img: world},
    {
        stack: ["reactjs"],
        key: "2",
        name: "GIS Infra with AWS",
        description: "",
        link: "", img: aws_gis_infra,
    },
    {
        stack: ["Python", "FastAI", "geopandas", "Solaris", 'Docker'],
        key: 3,
        name: "CNN Image Segmentation",
        description: "The example of u-net building segmentation for aerial images",
        link: "",
        img: segmentation_img
    },
    {
        stack: ["reactjs", "Python", 'Celery', 'Docker'],
        key: 4,
        name: "Soil moisture forecasting",
        description: "",
        link: "",
        img: weather_img
    },
    {
        stack: ["reactjs"],
        key: 5,
        name: "GIS infrastructure with Django app",
        description: "",
        link: "",
        img: geo_infrastructure
    },
    {
        stack: ["reactjs"],
        key: 6,
        name: "Military Terrain Passability",
        description: "",
        link: "", img: terrain_passability,
    },
    {
        stack: ["Python",'ReactJS','Postgis','Django','Docker', 'Openlayers'],
        key: 7,
        name: "Cross Country movement for forestry",
        description: "",
        link: "", img: navigation_img,
    },
    {
        stack: ["reactjs"],
        key: 8,
        name: "IED Simulator",
        description: "Simulator of vulnerability risk of critical infrastruction elements for explosive chargeSimulator that models the vulnerability risk of critical infrastructure elements for explosive charge",
        link: "", img: gazoport,
    },
    {
        stack: ["Python", 'Pandas', 'Geopandas'],
        key: 9,
        name: "Geodata analysis",
        description: "",
        link: "https://doi.org/10.3390/app12084090", img: ahp_covid_img,
    },
    {
        stack: ["Python", "GDAL", "Pandas", "Shapely"],
        key: 10,
        name: "Hillshader",
        description: "",
        link: "", img: hillshade,
    },
    // {
    //     stack: ["reactjs"],
    //     key: 11,
    //     name: "Slack Clone",
    //     description: "",
    //     link: "", img: "",
    // },
    // {
    //     stack: ["reactjs"],
    //     key: 12,
    //     name: "Spotify Clone",
    //     description: "",
    //     link: "", img: "",
    // },
    // {
    //     stack: ["reactjs"],
    //     key: 12,
    //     name: "Tic Toc Clone",
    //     description: "",
    //     link: "", img: "",
    // },
];
