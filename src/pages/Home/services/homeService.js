import Img1 from "../../../assets/svg/img1.svg";
import Img2 from "../../../assets/svg/img2.svg";
import Img3 from "../../../assets/svg/img3.svg";

const listItems = () => {
  return [
    {
      title: "Sobre mi ",
      image: Img1,
      text: `Mi nombre es Kelly Miranda soy Ingeniera de sistemas enfocada en el desarrollo Web, 
      diseño de interfaces y experiencia de usuario, al iniciar mis estudios no entendía claramente
      cual sería mi lugar dentro del mundo del desarrollo, pero con el estudio, practica y la experiencia
      de trabajo encontré mi vocación y plasmo toda esa buena vibra en cada uno de los diseños y funcionalidades en las
      que puedo contribuir.`,
      variant: "primary",
    },
    {
      title: "Hobbies",
      image: Img2,
      text: `Me apasiona el arte, cada una de las formas en la que este se puede expresar como, por ejemplo
      la literatura, considero que un buen libro acompañado de una taza de chocolate es ideal para relajarse,
      me encanta el dibujo de igual forma y en mis tiempos libres ilustro un poco mis ideas y pensamientos`,
      variant: "secondary",
    },
    {
      title: "Sueños",
      image: Img3,
      text: `A corto plazo he definido una meta y es mejorar cada día en plasmar diseños e ilustraciones digitales
      creando así una personalidad para cada uno de ellos y poner este conocimiento en beneficio de la empresa,
      en el largo plazo llegar a tener mi propia marca que se especialice en brindar una transformación e identidad digital a los clientes.`,
      variant: "tertiary",
    },
  ];
};

export { listItems };
