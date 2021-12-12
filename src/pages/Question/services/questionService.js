const listQuestions = () => {
  return [
    {
      id: 1,
      title: "¿Para qué son los software de gestión documental?",
      text: `A lo largo de los años la tecnología nos ha permitido mejorar 
        la forma en la que gestionamos tareas y recursos permitiendo maximizar 
        nuestra productividad, de esta manera la tecnología es de gran ayuda
        para las empresas, un proceso que puede ser tedioso para una empresa
        es la gestión y administración de documentos los cuales se requerían de archivadores
        y ser etiquetados de manera detallada para su búsqueda posterior, pero gracias al software
        de gestión documental todo el flujo desde buscar el formato adecuado para contratar a alguien,
        llenar el formato, almacenarlo y luego poder consultarlo o compartirlo de forma sencilla y eficiente.`,
    },
    {
      id: 2,
      title: "¿Qué percibe del proyecto MiContrato?",
      text: `MiContrato plantea una solución unificada para documentos legales, en donde se pueden 
        encontrar los diferentes formatos con las respectivas normativas a tener en cuenta, pero mas allá
        de solo encontrar los formatos adecuados brinda también la forma de registrar la información para el documento,
        firmar documentos ya existentes, almacenar dichos documentos para compartir y consultar más adelante brindando
        las herramientas necesarias desde un solo servicio.
`,
    },
    {
      id: 3,
      title:
        "¿Qué es una prueba unitaria, que tipos de pruebas se realizan al frontend?",
      text: `Las pruebas unitarias toman como base el concepto del componente más pequeño
        y aislado de otros componentes y funcionalidades, a este componente se le realizan los
        test necesarios para comprobar su correcto funcionamiento,
        un ejemplo de ello es un botón que sume un uno cada vez que se le da click
        este cumple con ser una unidad pequeña, probamos que el botón reconozca el click y modifique la variable
        sumando un uno de esta forma tendremos el flujo correcto para el botón,
        otros test que se realizan en el frontend son:
        <ul>
          <li><b>Pruebas de integración</b>: prueba en la que se pueden incluir un componente con otro componentes o servicios usando mocks</li>
          <li><b>Pruebas funcionales</b>: prueba en la que se determina si el output de la aplicación es el esperado de manera visual</li>
          <li><b>Pruebas e2e</b>: prueba en donde se usa la aplicación completa y se valida su funcionamiento</li>
        </ul>
`,
    },
    {
      id: 4,
      title: "Seguridad api rest",
      text: `Existen diferentes métodos para darle seguridad a un api rest 
      como lo son las Api keys, JSON Web Tokens, Oauth etc.
      Pero uno de los más utilizados es JSON web tokens, este es un token el cual se genera en base a credenciales del usuario
      y se puede almacenar diversa información en él, este token se puede enviar en el header de una petición, como parámetro o en el body pero el estándar es el
      header de Authorization, el token cuenta con tres campos:
      <ul>
        <li><b>header</b>: Información del algoritmo de encriptado</li>
        <li><b>payload</b>: Información de expiración del token y la información que se agregue al generarlo</li>
        <li><b>signature</b>: La firma que se genera con una clave secreta desde el api</li>
      </ul>
      el flujo para su uso es el siguiente: el usuario solicita el inicio de sesión luego el api retorna el token, este token
      se almacena en el frontend y para cada petición autenticada se envía mediante un header, el api recibe la petición y aplica un middleware
      en el cual confirma la validez del token y la identidad del usuario, para el uso de JSON Web Tokens se recomienda fijar un tiempo de expiración corto ya que estos
      no se pueden revocar.
`,
    },
  ];
};

export { listQuestions };
