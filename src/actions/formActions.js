const Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_APIKEY_AIRTABLE }).base(
  process.env.REACT_APP_BASE_AIRTABLE
);

export function postFormAirtable(
  nombre,
  email,
  linkedin,
  motivoDeContacto,
  interesadoEnRoles,
  interesadoEnOtrosRoles,
  comoNosConociste,
  mensaje
) {
  base("Empresas").create(
    [
      {
        fields: {
          "Name": nombre,
          "Email": email,
          "LinkedIn": linkedin,
          "Motivo de Contacto": motivoDeContacto,
          "Mensaje": mensaje,
          "Interesado en Roles": interesadoEnRoles,
          "Como Nos Conociste": comoNosConociste,
          "Interesado en Otros Roles": interesadoEnOtrosRoles,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        console.log('inter',interesadoEnRoles);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}

