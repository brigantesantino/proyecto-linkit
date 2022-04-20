const Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_APIKEY_AIRTABLE }).base(
  process.env.REACT_APP_BASE_AIRTABLE
);

export function postFormAirtableCandidatos(
  nombre,
  email,
  direccion,
  linkedIn,
  experiencia,
  moneda,
  remuneracionPretendida,
  roles,
  comoNosConociste,
  tecnologias
) {
  base("Candidatos").create(
    [
      {
        fields: {
          Name: nombre,
          Email: email,
          Direccion: direccion,
          Linkedin: linkedIn,
          Experiencia: [experiencia],
          Moneda: moneda,
          "Remuneracion pretendida": remuneracionPretendida,
          Roles: roles,
          "Como nos conociste": comoNosConociste,
          Tecnologias: tecnologias,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        console.log(
          "NOMBRE: ",
          nombre,
          "EMAIL: ",
          email,
          "DIRECC: ",
          direccion,
          "LI: ",
          linkedIn,
          "EXP: ",
          experiencia,
          "MONEDA:",
          moneda,
          "REM. PRET.: ",
          remuneracionPretendida,
          "ROLES:",
          roles,
          "COMONOS",
          comoNosConociste,
          "TECNOLOGIAS: ",
          tecnologias
        );
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}