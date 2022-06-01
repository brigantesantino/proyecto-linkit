var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_APIKEY_AIRTABLE }).base(
  process.env.REACT_APP_BASE_AIRTABLE
);
export function postContactoAirtable(nombre, email, motivoDeContacto, mensaje) {
  base("Contactos").create(
    [
      {
        fields: {
          Nombre: nombre,
          Email: email,
          "MotivoDeContacto": motivoDeContacto,
          Mensaje: mensaje,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}
