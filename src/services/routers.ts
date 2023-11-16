import form1 from "@/formsJson/contactBiologicalTreatmentForm.json";
import form2 from "@/formsJson/contactAnaerobicRequestForm.json";
import form3 from "@/formsJson/contactSettlingClarifierSystem.json";
import form4 from "@/formsJson/contactReverseOsmosisForm.json";

export const FORM_ROUTER = [
  {
      id: "1",
      title: "Biological Treatment Background",
      slug: "biological-treatment-background",
      formData: form1,
  },
  {
      id: "2",
      title: "Anaerobic Request Form",
      slug: "anaerobic-request-form",
      formData: form2,
  },
  {
      id: "3",
      title: "Settling Clarifier System",
      slug: "settling-clarifier-system",
      formData: form3,
  },
  {
      id: "4",
      title: "Reverse Osmosis Design Request",
      slug: "reverse-osmosis-design-request",
      formData: form4,
  },
];
