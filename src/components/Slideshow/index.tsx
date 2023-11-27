'use-client'
import React, {
  ReactNode,
  useEffect,
  useRef,
  useCallback,
  CSSProperties,
} from "react";
import "./Slideshow.scss";

type SlideshowProps = {
  animationTime?: number;
  transitionTime?: number;
  controls?: boolean;
  autoplay?: boolean;
  styleProps?: CSSProperties;
  slideContainerWidth?: number;
  slideContainerHeight?: number;
  // eslint-disable-next-line no-undef
  children: string | JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
};

const Slideshow = (props: SlideshowProps) => {
  const {
    animationTime = 800,
    transitionTime = 8000,
    controls = true,
    autoplay = false,
    styleProps,
    slideContainerWidth,
    slideContainerHeight,
    children,
  } = props;

  const slideshowRef = useRef<any>(null);
  const intervaloSlideshow = useRef(null);

  const nextImage = useCallback(() => {
    // Comprobamos que exista 1 imagen o mas
    if (slideshowRef.current&&slideshowRef.current.children.length > 0) {
      // definismos la primer imagen del carrusel
      const firstSlide = slideshowRef.current.children[0];

      // Establecemos la animacion de transicion de elementos
      slideshowRef.current.style.transition = `${animationTime}ms ease-out all`;

      // Definimos el ancho del slide
      const slideSize = (slideshowRef.current.children[0] as any).offsetWidth;

      // Movemos las imagenes
      slideshowRef.current.style.transform = `translateX(-${slideSize}px)`;

      // definimos funcion para reiniciar la animacion
      const transition = () => {
        slideshowRef.current.style.transition = "none";
        slideshowRef.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final
        slideshowRef.current.appendChild(firstSlide);

        // eliminamos el event listener
        slideshowRef.current.removeEventListener("transitionend", transition);
      };

      // Eventlistener para cuando termina la primer animacion
      slideshowRef.current.addEventListener("transitionend", transition);
    }
  }, [animationTime]);


  const prevImage = () => {
    // Comprobamos que exista 1 imagen o mas
    if (slideshowRef.current.children.length > 0) {
      // calculamos la cantidad de children
      const indexLastElement = slideshowRef.current.children.length - 1;

      // definimos el ultimo elemento de arreglo
      const ultimoElemento = slideshowRef.current.children[indexLastElement];

      // agarramos el ultimo y se coloca al inicio
      slideshowRef.current.insertBefore(
        ultimoElemento,
        slideshowRef.current.firstChild
      );

      slideshowRef.current.style.transition = "none";

      // Definimos el ancho del slide
      const slideSize = (slideshowRef.current.children[0] as any).offsetWidth;

      // movemos el slide
      slideshowRef.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshowRef.current.style.transition = `${animationTime}ms ease-out all`;
        slideshowRef.current.style.transform = "translateX(0)";
      });
    }
  };

  useEffect(() => {
    if (autoplay) {
      // se crea un intervalo de tiempo para el Autoplay
      (intervaloSlideshow as any).current = setInterval(() => {
        nextImage();
      }, transitionTime);

      // se limpia el intervalo cuando el mouse entra al carrusel
      slideshowRef.current.addEventListener("mouseenter", () => {
        clearInterval((intervaloSlideshow as any).current);
      });

      // se crea intervalo cuando el mouse sale del carrusel
      slideshowRef.current.addEventListener("mouseleave", () => {
        (intervaloSlideshow as any).current = setInterval(() => {
          nextImage();
        }, transitionTime);
      });
    }
  }, [autoplay, transitionTime, animationTime]);

  // Esta propiedad me permite ajustar el ancho de contenedor visible del slide para ver mas objetos
  const slideContainerStyle = {
    width: `${slideContainerWidth}px`,
    height: `${slideContainerHeight}px`,
  };
  return (
    <div className="ContenedorPrincipal" style={styleProps}>
      <div
        className="SlideshowContainer"
        ref={slideshowRef}
        style={slideContainerStyle}
      >
        {children}
      </div>

      {controls && (
        <div className="SlideControls">
          <button className="SlideBtn left" onClick={prevImage}>
            <IconArrowLeft />
          </button>
          <button className="SlideBtn right" onClick={nextImage}>
            <IconArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

// require image and text
const Slide = ({ children }: any) => {


  return <div className="Slide">{children}</div>;
};

type PropsRight = { className?: string };
function IconArrowRight({ className }: PropsRight) {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className={className}
    >
      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
    </svg>
  );
}
type PropsLeft = { className?: string };
function IconArrowLeft({ className }: PropsLeft) {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className={className}
    >
      <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
    </svg>
  );
}

export { Slideshow, Slide };
