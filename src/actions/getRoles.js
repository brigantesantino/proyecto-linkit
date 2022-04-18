const Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_APIKEY_AIRTABLE }).base(
  process.env.REACT_APP_BASE_AIRTABLE
);

export function getFormAirtable() {
  base("Roles disponibles")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          let objetoRol = {
            nombre: record.get("Nombre del puesto"),
            codigo: record.get("Codigo"),
            descripcion: record.get("Descripcion"),
            ubicacion: record.get("Ubicacion"),
            fechaDeCreacion: record.get("Fecha de creacion"),
            modalidadDeTrabajo: record.get("Modalidad de trabajo"),
            sobreElCliente: record.get("Sobre el cliente"),
            responsabilidades: record.get("Responsabilidades")
          };
          console.log(objetoRol);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}