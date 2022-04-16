//const base = require('airtable').base(process.env.REACT_APP_BASE_AIRTABLE)
const Airtable = require('airtable')
var base = new Airtable({apiKey: process.env.REACT_APP_APIKEY_AIRTABLE}).base(process.env.REACT_APP_BASE_AIRTABLE);

/* console.log(process.env.REACT_APP_BASE_AIRTABLE)
    console.log(process.env.REACT_APP_APIKEY_AIRTABLE)
    console.log(process.env.REACT_APP_URL_AIRTABLE) */

export function postFormAirtable(form){
    console.log(form)
    console.log(Object.keys(form))
    console.log(form.target)
    const { nombre , email , linkedin , motivoDeContacto, interesadoEnRoles, comoNosConociste , mensaje } = form.values
    base('Table 1').create([
        {
          "fields": {
            "Name": nombre,
            "Email": email,
            "LinkedIn": linkedin,
            "Motivo de Contacto": motivoDeContacto,
            "Interesado en Roles": [
              interesadoEnRoles
            ],
            "Como Nos Conociste": [
              comoNosConociste
            ],
            "Mensaje": mensaje
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
}
