import form1 from "@/formsJson/contactBiologicalTreatmentForm.json";
import form2 from "@/formsJson/contactAnaerobicRequestForm.json";
import form3 from "@/formsJson/contactSettlingClarifierSystem.json";
import form4 from "@/formsJson/contactReverseOsmosisForm.json";
import form5 from "@/formsJson/contactMBBR.json";
import form6 from "@/formsJson/contactFisicoQuimicoForm.json";


export const FORM_ROUTER = [
  {
    id: "1",
    title: "Osmosis inversa",
    slug: "reverse-osmosis-design-request",
    formData: form4,
  },
  {
    id: "2",
    title: "Tratamiento Fisico-Quimico",
    slug: "tratamiento-fisico-quimico",
    formData: form6,
  },
  {
    id: "3",
    title: "Tratamiento biológico",
    slug: "biological-treatment-background",
    formData: form1,
  },
  {
    id: "4",
    title: "Tratamiento anaeróbica",
    slug: "anaerobic-request-form",
    formData: form2,
  },
  {
    id: "5",
    title: "Sedimentador",
    slug: "settling-clarifier-system",
    formData: form3,
  },
  {
    id: "6",
    title: "Biofiltracion",
    slug: "mbbr-formulario-de-servicio",
    formData: form5,
  },
];
