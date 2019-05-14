import Analytics from './Pantallas/Modernizacion/InformaticaAnalytics';
import Unificados from './Pantallas/Modernizacion/TramitesUnificadosNoProg';
import EducacionCapacitacion from './Pantallas/Modernizacion/EducacionCapacitacion';
import Talleres from './Pantallas/Modernizacion/Talleres';
import NetMuni from './Pantallas/Modernizacion/NetMuni';
var router2 = [
    {
        componente: Analytics, 
        path: '/Analytics',
        titulo: 'Analytics',
        pksubeje:1
    },
    {
        componente: Unificados, 
        path: '/Unificados',
        titulo: 'Tramites Unificados',
        pksubeje:3
    },
    {
        componente: EducacionCapacitacion, 
        path: '/EducacionCapacitacion',
        titulo: 'Educacion y Capacitacion',
        pksubeje:4
    },
    {
        componente: Talleres, 
        path: '/Talleres',
        titulo: 'Talleres y Actividades Municipales',
        pksubeje:6
    }     
    ,
    {
        componente: NetMuni, 
        path: '/NetMuni',
        titulo: 'NetMuni',
        pksubeje:12
    } 
];

export default router2;