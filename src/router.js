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
        titulo: 'Home',
        pkeje:0
    },{
        componente: DesarrolloSocial, 
        path: '/DesarrolloSocial',
        titulo: 'Desarrollo Social',
        pkeje:2
    },{
        componente: OrdenamientoUrbano, 
        path: '/OrdenamientoUrbano',
        titulo: 'Ordenamiento Urbano',
        pkeje:5
    },{
        componente: Modernizacion, 
        path: '/Modernizacion',
        titulo: 'Modernización',
        pkeje:1
    },{
        componente: Salud, 
        path: '/Salud',
        titulo: 'Salud',
        pkeje:8
    },{
        componente: Economia, 
        path: '/Economia',
        titulo: 'Economia',
        pkeje:3
    },{
        componente: Seguridad, 
        path: '/Seguridad',
        titulo: 'Seguridad',
        pkeje:7
    },{
        componente: Personal, 
        path: '/Personal',
        titulo: 'Personal',
        pkeje:4
    },{
        componente: Turismo, 
        path: '/Turismo',
        titulo: 'Turismo',
        pkeje:6  
    }
];

export default router;