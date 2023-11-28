import React from "react";
import "./Contacto.scss";
import bgImage from "@/assets/Contact-min.png";
import FormContact from "@/components/FormContact";
export default function ContactoPage() {
  const bgContactForm = {
    backgroundImage: `url(${bgImage.src})`,
  };
  return (
    <main className="mainContacto">
      <section className="contactLocation">
        <div className="infoContainer">
          <div className="leftTitle ">
            <div className="headerLeft">
              <h1>Nuestras Oficinas</h1>
              <hr />
            </div>
          </div>
          <div className="rightTitle "></div>

          <div className=" leftStyle">
            <div className="LocationLeft ">
              <div className="LocationAdress">
                <h4>Oficina Principal</h4>

                <p>
                  Direccion: Callejón Manuel M. Doria No. 12612 Col. Libertad
                  22400. Tijuana, B.C., México.
                </p>
                <p>Tel: +52 (664) 210-1017</p>
                <p>Tel: +52 (664) 609-4415</p>
                <p>E-mail: info@iqea.mx</p>
              </div>
            </div>
          </div>
          <div className=" rightStyle">
            <div className="LocationRight">
              <h2>Libertad, Tijuana</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1670.850320520102!2d-117.00066263897197!3d32.53618907774928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94864522b7e6d%3A0xdfd592b4b40b8e2a!2siqea!5e0!3m2!1ses-419!2smx!4v1697842992958!5m2!1ses-419!2smx"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className=" leftStyle">
            <div className="LocationLeft ">
              <div className="LocationAdress">
                <p>
                  Direccion: Callejón Manuel M. Doria No. 12612 Col. Libertad
                  22400. Tijuana, B.C., México.
                </p>
                <p>Tel: +52 (664) 210-1017</p>
                <p>Tel: +52 (664) 609-4415</p>
                <p>E-mail: info@iqea.mx</p>
              </div>
            </div>{" "}
          </div>
          <div className=" rightStyle">
            <div className="LocationRight">
              <h2>Plaza Sevilla, Tijuana</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.6181714725194!2d-116.94547266465811!3d32.49889786062777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9386071cabe8b%3A0x1fdfe5d1cd47dcbd!2sPlaza%20Sevilla!5e0!3m2!1ses-419!2smx!4v1697845166519!5m2!1ses-419!2smx"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className=" leftStyle">
            <div className="LocationLeft ">
              <div className="LocationAdress">
                <p>
                  Direccion: Callejón Manuel M. Doria No. 12612 Col. Libertad
                  22400. Tijuana, B.C., México.
                </p>
                <p>Tel: +52 (664) 210-1017</p>
                <p>Tel: +52 (664) 609-4415</p>
                <p>E-mail: info@iqea.mx</p>
              </div>
            </div>{" "}
          </div>
          <div className=" rightStyle">
            <div className="LocationRight">
              <h2>Puerto Interior, Silao</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.7793026628235!2d-101.50936249100553!3d21.00161456818944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9c8439f882e5%3A0x27bed198ab71f8f6!2sG100%20Desarrollos!5e0!3m2!1ses-419!2smx!4v1697845267349!5m2!1ses-419!2smx"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
      <section className="contactFrase">
        <div className="frase">
          <p>
            Si desea solicitar información sobre un producto o servicion,
            comuniquese al teléfono+52 (664) 210-1017 o llene el siguiente
            formulario con sus datos y a la brevedad estaremos en contacto con
            usted.
          </p>
        </div>
      </section>
      <section className="contactForm" style={bgContactForm}>
        <FormContact />
        {/* <Image src={bgImage} alt=""/> */}
      </section>
    </main>
  );
}
