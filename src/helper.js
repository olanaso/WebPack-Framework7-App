export function objectToString(obj) {
  return JSON.stringify(obj);

}

export function StringToObject(str) {
  return JSON.parse(str);
}

export function tiempoTranscurrido(fecha_registro) {


  //var nacimiento = new Date(1936, 11, 29)
  var hoy = new Date()

  var tiempoPasado= hoy - fecha_registro
  var segs = 1000;
  var mins = segs * 60;
  var hours = mins * 60;
  var days = hours * 24;
  var months = days * 30.416666666666668;
  var years = months * 12;

//calculo
  var anos = Math.floor(tiempoPasado / years);

  tiempoPasado = tiempoPasado - (anos * years);
  var meses = Math.floor(tiempoPasado / months)

  tiempoPasado = tiempoPasado - (meses * months);
  var dias = Math.floor(tiempoPasado / days)

  tiempoPasado = tiempoPasado - (dias * days);
  var horas = Math.floor(tiempoPasado / hours)

  tiempoPasado = tiempoPasado - (horas * hours);
  var minutos = Math.floor(tiempoPasado / mins)

  tiempoPasado = tiempoPasado - (minutos * mins);
  var segundos = Math.floor(tiempoPasado / segs)

  let resultado='Han pasado ';

  if(anos!==0){
    resultado+=anos+' años '
  }
  if(meses!==0){
    resultado+=meses+' meses '
  }
  if(dias!==0){
    resultado+=dias+' dias '
  }
  if(horas!==0){
    resultado+=horas+' horas '
  }

  if(minutos!==0){
    resultado+=minutos+' minutos '
  }

  if(segundos!==0){
    resultado+=segundos+' segundos '
  }
  resultado+=' desde que marcaste la llegada'

  return resultado

}

