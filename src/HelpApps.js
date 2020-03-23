import $ from 'jquery';
export function whatsApp(telefono_prefijo, mensaje) {
  var url;
  var texto = `*PERUFARMA DISTRIBUIDORES INFORMA*:`+mensaje;

  texto = encodeURIComponent(texto);
  telefono_prefijo = '51'+telefono_prefijo.replace(/^\+/, ''); //Codigo de Peru
  if ($.isMobile) {
    url = "whatsapp://send?phone=" + telefono_prefijo + "&text=" + texto;
  } else {
    url = "https://api.whatsapp.com/send?phone=" + telefono_prefijo + "&text=" + texto;
  }

  window.open(url);

};

export function WazeOpen(latitud, longitud) {
  var url;

  if ($.isMobile) {
    url = "waze://ul?q=" + latitud + "," + longitud + "&navigate=yes&zoom=16";
  } else {
    url = "https://waze.com/ul?q=" + latitud + "," + longitud + "&navigate=yes&zoom=16";
  }

  window.open(url);

};


export function whatsApp_Compartir(e) {
  e.preventDefault();
  var url;
  var texto = encodeURIComponent(document.URL);
  if ($.isMobile) {
    url = "whatsapp://send?text=" + texto;
  } else {
    url = "https://api.whatsapp.com/send?text=" + texto;
  }
  window.open(url);

}

export function call(nrotelefono) {
  var url = "tel:" + nrotelefono;
  window.open(url);

}


