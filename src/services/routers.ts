import form1 from "@/formsJson/contactBiologicalTreatmentForm.json";
import form2 from "@/formsJson/contactAnaerobicRequestForm.json";
import form3 from "@/formsJson/contactSettlingClarifierSystem.json";
import form4 from "@/formsJson/contactReverseOsmosisForm.json";
import form5 from "@/formsJson/contactMBBR.json";


export const FORM_ROUTER = [
  {
      id: "1",
      title: "Antecedentes del tratamiento biológico",
      slug: "biological-treatment-background",
      formData: form1,
  },
  {
      id: "2",
      title: "Formulario de solicitud anaeróbica",
      slug: "anaerobic-request-form",
      formData: form2,
  },
  {
      id: "3",
      title: "Sistema clarificador de sedimentación",
      slug: "settling-clarifier-system",
      formData: form3,
  },
  {
      id: "4",
      title: "Solicitud de diseño de ósmosis inversa",
      slug: "reverse-osmosis-design-request",
      formData: form4,
  },
  {
    id: "5",
    title: "Reactor de biopelícula de lecho móvil Formulario de solicitud",
    slug: "mbbr-formulario-de-servicio",
    formData: form5,
},
];
