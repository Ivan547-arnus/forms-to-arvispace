let agreements = {
    data() {
        return {
            buttonAccept:{
                type:'primary-button-block',
                content:'Aceptar',
                typeButton:'button'
            }
        }
    },
    components:{
        'primary-button-block':primaryButtonBlock
    },
    methods: {
        acceptAgreements(){
            comunicateWebView("close","");
        }
    },
    template:`
        <div class="container">
            <h1 class="text-center Lousie-George-Bold">AVISO DE PRIVACIDAD</h1>
            <p>
                CONSULTORES EN DESARROLLO TECNOLOGICO DE SISTEMAS DTI S.A. DE C.V., es una sociedad mercantil de nacionalidad mexicana, con domicilio en Carretera Industrias Oriente 2-C, colonia Centro, localidad Panzacola, C.P. 90796, Papalotla de Xicohtencatl, Tlaxcala, es la responsable del uso y protección de los datos personales que proporcione para tener acceso y utilizar los servicios de <i class="Lousie-George-Bold">“ARVISPACE”</i>, Aplicación Móvil  de Realidad Aumentada que pone a disposición diversos servicios, datos que serán protegidos conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares; al respecto le informamos lo siguiente: 
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades, que son necesarias para el servicio que solicita: identificación y localización; información sobre productos y servicios; prestación de servicios en caso de concretarse; validar la veracidad y calidad de la información proporcionada por usted; dar seguimiento a tu proceso de compra y entrega de los productos adquiridos; notificación sobre actualizaciones de la aplicación, marcas inscritas y promociones; atender dudas, quejas, comentarios, sugerencias, soporte y aclaraciones; para realizar seguimiento sobre la interacción de su cuenta con las diferentes marcas; Supervisar y mejorar nuestra respuesta del servicio de asistencia al cliente; conservar su información para el cumplimiento de disposiciones legales y requerimientos de autoridades y/o entidades regulatorias.
                De manera adicional se utilizarán para: publicidad y mercadotecnia; notificaciones; prospección comercial; para conocer sus hábitos de consumo, gustos, preferencias.
                Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, y la forma en que podrá ejercer sus derechos ARCO, puede consultar el <a href="#">aviso de privacidad integral</a>. 
            </p>
            <primary-button-block
                @clicked-button="acceptAgreements"
                :field="buttonAccept"
            ></primary-button-block>
            <br>
            <br>
        </div>
    `
};