import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import HeaderImage from "../assets/Header2.png";

const dataCompra = {
  noSalida: "20507",
  referencia: "SOL. NO",
  tipoSalida: "SUMINISTRO",
  fechaSalida: "11/03/2024 10:37:08 a.m.",
  destinatario: "DGA",
  representante: "LUIS ROBERTO ROMERO QUIROZ",
  partida:
    "214001 CONSUMIBLES PARA EQUIPOS DE COMPUTO Y BIENES INFORMATICOS Este texto es demasiado largo Dios mio!, por que escriben tanto",
  entrego: "ARANTZA GARCIA HERNANDEZ",
  justificacion: "ENTREGA DE SUMINISTROS AUTORIZADOS A UN SOLICITANTE",
  productos: [
    {
      clave: "UBI001",
      descripcion:
        "MEMORIA USB DE 32GB MEMORIA USB DE 32GB MEMORIA USB DE 32GB MEMORIA USB DE 32GB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI002",
      descripcion: "MEMORIA USB 128GB",
      qty: 5,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI003",
      descripcion: "MEMORIA USB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI003",
      descripcion: "MEMORIA USB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI003",
      descripcion: "MEMORIA USB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI003",
      descripcion: "MEMORIA USB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
    {
      clave: "UBI003",
      descripcion: "MEMORIA USB",
      qty: 10,
      medida: "PIEZA",
      precio: 50,
    },
  ],
};

const PDF2 = () => {
  const today = new Date();
  const importeTotal = dataCompra.productos.reduce(
    (acc, producto) => acc + producto.qty * producto.precio,
    0
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.boxFecha}>
            Fecha de impresion: {today.getDate()}/{today.getMonth() + 1}/
            {today.getFullYear()}
          </Text>
          <Image src={HeaderImage} />
        </View>

        <View style={styles.boxInfo}>
          <Text style={styles.textTable}>No. Salida:</Text>
          <Text style={styles.textData}>{dataCompra.noSalida}</Text>
          <Text style={styles.textTable}>Referencia:</Text>
          <Text style={styles.textData}>{dataCompra.referencia}</Text>
          <Text style={styles.textTable}>Tipo Salida:</Text>
          <Text style={styles.textData}>{dataCompra.tipoSalida}</Text>
          <Text style={styles.textTable}>Fecha Salida:</Text>
          <Text style={styles.textData}>{dataCompra.fechaSalida}</Text>
        </View>

        <View style={styles.boxDatosPersona}>
          <View style={styles.rowPersona}>
            <View style={styles.colPersonaLeft}>
              <Text style={styles.textDatosPersona}>Destinatario:</Text>
            </View>
            <View style={styles.colPersonaRight}>
              <Text style={styles.textDatosPersonaNormal}>
                {dataCompra.destinatario}
              </Text>
            </View>
          </View>

          <View style={styles.rowPersona}>
            <View style={styles.colPersonaLeft}>
              <Text style={styles.textDatosPersona}>Representante:</Text>
            </View>
            <View style={styles.colPersonaRight}>
              <Text style={styles.textDatosPersonaNormal}>
                {dataCompra.representante}
              </Text>
            </View>
          </View>

          <View style={styles.rowPersona}>
            <View style={styles.colPersonaLeft}>
              <Text style={styles.textDatosPersona}>Partida:</Text>
            </View>
            <View style={styles.colPersonaRight}>
              <Text style={styles.textDatosPersonaNormal}>
                {dataCompra.partida}
              </Text>
            </View>
          </View>

          <View style={styles.rowPersona}>
            <View style={styles.colPersonaLeft}>
              <Text style={styles.textDatosPersona}>Entregó:</Text>
            </View>
            <View style={styles.colPersonaRight}>
              <Text style={styles.textDatosPersonaNormal}>
                {dataCompra.entrego}
              </Text>
            </View>
          </View>

          <View style={styles.rowPersona}>
            <View style={styles.colPersonaLeft}>
              <Text style={styles.textDatosPersona}>Justificación:</Text>
            </View>
            <View style={styles.colPersonaRight}>
              <Text style={styles.textDatosPersonaNormal}>
                {dataCompra.justificacion}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxHeaderProducto}>
          <View style={styles.col1}>
            <Text style={styles.textTable}>Clave</Text>
          </View>

          <View style={styles.col2}>
            <Text style={styles.textTable}>Articulo</Text>
          </View>

          <View style={styles.col3}>
            <Text style={styles.textTable}>U. Medida</Text>
          </View>

          <View style={styles.col4}>
            <Text style={styles.textTable}>Cantidad</Text>
          </View>

          <View style={styles.col4}>
            <Text style={styles.textTable}>Precio</Text>
          </View>

          <View style={styles.col4}>
            <Text style={styles.textTable}>Importe</Text>
          </View>
        </View>

        {dataCompra.productos.map((producto) => {
          return (
            <View style={styles.table}>
              <View style={styles.rowPersona}>
                <View style={styles.col1}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.clave}
                  </Text>
                </View>
                <View style={styles.col2}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.descripcion}
                  </Text>
                </View>
                <View style={styles.col3}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.medida}
                  </Text>
                </View>
                <View style={styles.col4}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.qty}
                  </Text>
                </View>

                <View style={styles.col5}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.precio}
                  </Text>
                </View>

                <View style={styles.col6}>
                  <Text style={styles.textDatosPersonaNormal}>
                    {producto.qty * producto.precio}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}

        <View style={styles.table}>
          <View style={styles.rowPersona}>
            <View style={styles.col1}></View>
            <View style={styles.col2}></View>
            <View style={styles.col3}></View>
            <View style={styles.col4}></View>
            <View style={styles.col5}>
              <Text style={styles.textDatosPersonaNormal}>Total:</Text>
            </View>
            <View style={styles.col6}>
              <Text style={styles.textDatosPersonaNormal}>{importeTotal}</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxFirmas}>
          <View style={styles.itemFirma}>
            <Text style={styles.textTable}>Entrega</Text>
            <Text style={styles.textDatosPersonaNormal}>Nombre y firma</Text>
          </View>
          <View style={styles.itemFirma}>
            <Text style={styles.textTable}>Recibe</Text>
            <Text style={styles.textDatosPersonaNormal}>Nombre y firma</Text>
          </View>
        </View>

        <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export default PDF2;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
  boxInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 25,
    marginTop: 15,
    backgroundColor: "#bf975a",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  boxHeaderProducto: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 25,
    marginTop: 15,
    backgroundColor: "#bf975a",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  boxDatosPersona: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#651a2f",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  rowPersona: {
    width: "100%",
    flexDirection: "row",
    height: 15,
  },
  colPersonaLeft: {
    width: "15%",
    flexDirection: "column",
  },
  colPersonaRight: {
    width: "85%",
    flexDirection: "column",
  },
  //Tabla
  table: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bf975a",
  },
  //Textos
  textData: {
    fontSize: 10,
    color: "#fff",
  },
  textTable: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
  },
  textDatosPersona: {
    fontSize: 10,
    color: "#651a2f",
    fontWeight: "bold",
    textAlign: "left",
  },
  textDatosPersonaNormal: {
    fontSize: 10,
    color: "#000",
    textAlign: "left",
  },
  //Columnas de la tabla
  col1: {
    width: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    width: "45%",
    flexDirection: "column",
  },
  col3: {
    width: "15%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  col4: {
    width: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  col5: {
    width: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  col6: {
    width: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  //Box de la feccha
  boxFecha: {
    width: "100%",
    textAlign: "right",
    fontSize: 8,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  boxFirmas: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 25,
    marginTop: 35,
  },
  itemFirma: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "#bf975a",
  },
});
