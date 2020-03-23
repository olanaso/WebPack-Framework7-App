/*Login*/
import $ from 'jquery'
import LoginPage from './pages/Login/Login.f7.html';
import Config from './pages/Login/Config.f7.html';
/*Clientes*/
import Clientes from './pages/Clientes/Clientes.f7.html';
import ClientesFinalizado from './pages/Clientes/ClientesFinalizado.f7.html';
import ConfirmarLlegada from './pages/ConfirmarLlegada/ConfirmarLegada.f7.html';
import MenuCliente from './pages/Clientes/left-menu.f7.html';
/*Menu de entrega*/
import MenuEntregas from './pages/MenuEntregas/MenuEntregas.f7.html';
/*Completado*/
import EntregaCompleta from './pages/MenuEntregas/completa/EntregaCompleta.f7.html';
import ValidacionConformidad from './pages/MenuEntregas/completa/ValidacionConformidad.f7.html';
/*Parcial*/
import EntregaParcial from './pages/MenuEntregas/parcial/EntregaParcial.f7.html';
import MotivoRechazoFacturas from './pages/MenuEntregas/parcial/MotivoRechazoFacturas.f7.html';
import ValidacionConformidaParcial from './pages/MenuEntregas/parcial/ValidacionConformidadParcial.f7.html';
import AlertaCoformidadIncidenteParcial from './pages/MenuEntregas/parcial/ValidarConformidadParcial.f7.html';
/*Cerrado*/
import Cerrado from './pages/MenuEntregas/cerrado/Cerrado.f7.html';
/*Rechazado*/
import Rechazado from './pages/MenuEntregas/rechazado/Rechazado.f7.html';
/*Incidente*/
import Incidente from './pages/MenuEntregas/Incidente.f7.html';
/*Cliente*/
/*Finalizar Ruta*/
import FinalizarRuta from './pages/finalizar_ruta/FinalizarRuta.f7.html';
import AlertaCoformidadIncidente from './pages/MenuEntregas/completa/ValidarConformidad.f7.html';

/*Configuracion*/

//import Configuracion from './pages/Configuracion/Configuracion.f7.html';

import HomePage from './pages/home.f7.html';
import AboutPage from './pages/about.f7.html';
import FormPage from './pages/form.f7.html';
import DynamicRoutePage from './pages/dynamic-route.f7.html';
import NotFoundPage from './pages/not-found.f7.html';
import PanelLeftPage from './pages/panel-left.f7.html';
import PanelRightPage from './pages/panel-right.f7.html';


export default [
  /**/
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/configuracion/',
    component: Config,
  }
  ,
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/s',
    component: HomePage,
  },

  {
    path: '/clientes/',
    component: Clientes,
  },
  {
    path: '/clientes-finalizado/',
    component: ClientesFinalizado,
  },
  {
    path: '/menucliente/',
    component: MenuCliente,
  },
  {
    path: '/confirmar-llegada/',
    component: ConfirmarLlegada,
  },

  {
    path: '/menu-entrega/',
    component: MenuEntregas,
  },
  {
    path: '/completado/',
    component: EntregaCompleta,
  },
  {
    path: '/validar-conformidad/',
    component: ValidacionConformidad,
    on: {
      pageBeforeIn: function (event, page) {
        console.log(this)
        console.log(event)
        console.log(page)
      },
      pageAfterIn: function (event, page) {
        // do something after page gets into the view
      },
      pageInit: function (event, page) {

        var encuenta_entrega_completa = {"tiempo":"null","producto":"null","documento":"null"};
        localStorage.setItem('encuesta_entrega_completa', '{"tiempo":"null","producto":"null","documento":"null"}')
        // console.log(globalparameter)
        $('input[type="radio"]').on('change click', function (ev) {

          //var encuenta_entrega_parcial = {};


          if ($(this).attr('tipo') == 'tiempo') {
            encuenta_entrega_completa.tiempo = $(this).val();
          }
          if ($(this).attr('tipo') == 'producto') {
            encuenta_entrega_completa.producto = $(this).val()

          }
          if ($(this).attr('tipo') == 'documento') {
            encuenta_entrega_completa.documento = $(this).val()

          }
          console.log(encuenta_entrega_completa)
          localStorage.setItem('encuesta_entrega_completa', JSON.stringify(encuenta_entrega_completa));

        });

      },
      pageBeforeRemove: function (event, page) {
        // do something before page gets removed from DOM
      },
    }
  },
  {
    path: '/validar-conformidad-parcial/',
    component: ValidacionConformidaParcial,
    on: {
      pageInit: function (event, page) {

        var encuenta_entrega_parcial = {"tiempo":"null","producto":"null","documento":"null"};
        localStorage.setItem('encuesta_entrega_parcial', '{"tiempo":"null","producto":"null","documento":"null"}')
        // console.log(globalparameter)
        $('input[type="radio"]').on('change click', function (ev) {


          if ($(this).attr('tipo') == 'tiempo') {
            encuenta_entrega_parcial.tiempo = $(this).val();
          }
          if ($(this).attr('tipo') == 'producto') {
            encuenta_entrega_parcial.producto = $(this).val()

          }
          if ($(this).attr('tipo') == 'documento') {
            encuenta_entrega_parcial.documento = $(this).val()

          }
          console.log(encuenta_entrega_parcial)
          localStorage.setItem('encuesta_entrega_parcial', JSON.stringify(encuenta_entrega_parcial));

        });

      },
    }
  },
  {
    path: '/validar-conformidad-parcial/',
    component: ValidacionConformidaParcial,
  },


  {
    path: '/motivo-rechazo-facturas/',
    component: MotivoRechazoFacturas,
    on: {
      pageInit: function (event, page) {

        localStorage.setItem('rechazo_parcial', '0')
        $('input[type="radio"]').on('change click', function (ev) {
          //   alert($(this).val())
          localStorage.setItem('rechazo_parcial', JSON.stringify($(this).val()));
        })

      }

    }

  },
  {
    path: '/alerta-validar-conformidad/',
    component: AlertaCoformidadIncidente,


  },
  {
    path: '/alerta-validar-conformidad-parcial/',
    component: AlertaCoformidadIncidenteParcial,
  },
  {
    path: '/alerta-validar-conformidad/',
    component: AlertaCoformidadIncidente,
  },
  {
    path: '/incidente/',
    component: Incidente,
  },
  {
    path: '/cerrado/',
    component: Cerrado,
  },
  {
    path: '/rechazado/',
    component: Rechazado,
    on: {
      pageInit: function (event, page) {

        var rechazo_total = JSON.parse(localStorage.getItem('rechazo_total'));
        $('input[type="radio"]').on('change click', function (ev) {
          //   alert($(this).val())
          localStorage.setItem('rechazo_total', JSON.stringify($(this).val()));
          let encuesta_t_entrega = $(this).attr('encuesta_t_entrega');
          let encuesta_producto = $(this).attr('encuesta_producto');
          let encuesta_documento = $(this).attr('encuesta_documento');

          let objectEncuenstas = {
            encuesta_t_entrega: encuesta_t_entrega,
            encuesta_producto: encuesta_producto,
            encuesta_documento: encuesta_documento
          }

          localStorage.setItem('encuestasRechazado', JSON.stringify(objectEncuenstas));
        })

      }

    }
  },
  {
    path: '/entrega-parcial/',
    component: EntregaParcial,
  },
  {
    path: '/finalizar-ruta/',
    component: FinalizarRuta,

    on: {
      pageInit: function (event, page) {

        var finalizar_ruta = JSON.parse(localStorage.getItem('finalizar_ruta'));
        $('input[type="radio"]').on('change click', function (ev) {
          //   alert($(this).val())
          localStorage.setItem('finalizar_ruta', $(this).val());
        })

      }

    }
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
