//const base = require('airtable').base(process.env.REACT_APP_BASE_AIRTABLE)
const Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_APIKEY_AIRTABLE }).base(
  process.env.REACT_APP_BASE_AIRTABLE
);

/* console.log(process.env.REACT_APP_BASE_AIRTABLE)
    console.log(process.env.REACT_APP_APIKEY_AIRTABLE)
    console.log(process.env.REACT_APP_URL_AIRTABLE) */

export function postFormAirtable(
  nombre,
  email,
  linkedin,
  motivoDeContacto,
  interesadoEnRoles,
  comoNosConociste,
  mensaje
) {
  console.log(
    nombre,
    email,
    linkedin,
    motivoDeContacto,
    interesadoEnRoles,
    comoNosConociste,
    mensaje
  );
  base("Table 1").create(
    [
      {
        fields: {
          Name: nombre,
          Email: email,
          LinkedIn: linkedin,
          "Motivo de Contacto": motivoDeContacto,
          Mensaje: mensaje,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        console.log(
          nombre,
          email,
          linkedin,
          motivoDeContacto,
          mensaje
        );
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}
