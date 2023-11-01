import React from "react";

const data = {
  id: 1,
  attributes: {
    titulo: "test",
    descripcion:
      "#### Solutions\n- End-to-end control panel projects\n- Turn-key control systems\n- Complete control system design and engineering\n- Mechanical systems\n- Motor Control Centers\n- Allen Bradley – PLC programming\n- Continuous process control\n- Installation and commissioning\n- Remote monitoring\n\n![el-planeta-tierra.png](https://res.cloudinary.com/dqhvp0atv/image/upload/v1698782321/el_planeta_tierra_2a76e93b04.png)",
    anio: 2008,
    createdAt: "2023-10-31T20:15:54.439Z",
    updatedAt: "2023-11-01T03:41:24.420Z",
    publishedAt: "2023-10-31T20:17:15.636Z",
    locale: "es-MX",
    descripcion2: [
      {
        type: "heading",
        level: 3,
        children: [
          {
            text: "Scope of Services",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "All our designs include full equipment documentation and operations manuals to ensure problem free installation and deployment. In addition to full service custom controls we can also build control panels to your specifications, from your supplied drawings, using industry standard parts or those to meet your design stipulations. Ecologix designs and manufactures a wide range of control panels for variety of engineering sectors, including water, natural gas, petrochemical, railway, marine, food and beverage and manufacturing.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "",
            type: "text",
          },
        ],
      },
      {
        type: "heading",
        level: 3,
        children: [
          {
            text: "Solutions",
            type: "text",
          },
        ],
      },
      {
        type: "list",
        format: "unordered",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "End-to-end control panel projects",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Turn-key control systems",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Complete control system design and engineering",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Mechanical systems",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Motor Control Centers",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Allen Bradley – PLC programming",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Continuous process control",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Installation and commissioning",
                type: "text",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Remote monitoring",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function page() {
  return (
    <section>
      <h2>{data.attributes.titulo}</h2>
      <p>{data.attributes.anio}</p>
      <div>{data.attributes.descripcion}</div>
    </section>
  );
}
