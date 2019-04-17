import Circulito from './Circulito/Circulito';
import DesarrolloSocial from './Pantallas/DesarrolloSocial/DesarrolloSocial';
import Economia from './Pantallas/Economia/Economia';
import Modernizacion from './Pantallas/Modernizacion/Modernizacion';
import OrdenamientoUrbano from './Pantallas/OrdenamientoUrbano/OrdenamientoUrbano';
import Personal from './Pantallas/Personal/Personal';
import Salud from './Pantallas/Salud/Salud';
import Seguridad from './Pantallas/Seguridad/Seguridad';
import Turismo from './Pantallas/Turismo/Turismo';
var router = [
    {
        componente: Circulito, 
        exact: true, 
        path: '/',
        titulo: 'Home'
    },{
        componente: DesarrolloSocial, 
        path: '/DesarrolloSocial',
        titulo: 'Desarrollo Social'
    },{
        componente: OrdenamientoUrbano, 
        path: '/OrdenamientoUrbano',
        titulo: 'Ordenamiento Urbano'
    },{
        componente: Modernizacion, 
        path: '/Modernizacion',
        titulo: 'Modernización'
    },{
        componente: Salud, 
        path: '/Salud',
        titulo: 'Salud'
    },{
        componente: Economia, 
        path: '/Economia',
        titulo: 'Economia'
    },{
        componente: Seguridad, 
        path: '/Seguridad',
        titulo: 'Seguridad'
    },{
        componente: Personal, 
        path: '/Personal',
        titulo: 'Personal'
    },{
        componente: Turismo, 
        path: '/Turismo',
        titulo: 'Turismo'
    }
];

export default router;