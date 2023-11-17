import axios from "axios";

const isDEV = true
const API_URL_STRAPI_PROD = process.env.API_URL_STRAPI_PROD;
const API_URL_STRAPI_DEV = process.env.API_URL_STRAPI_DEV;
const API_URL_STRAPI = isDEV? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD

// console.log('DEV', API_URL_STRAPI_DEV);
// console.log('PROD',API_URL_STRAPI_PROD);
// console.log('lol',API_URL_STRAPI);

// http://localhost:1337/api/navigation?populate[navigationPanel][populate][link][populate]=*&populate[navigationPanel][populate][sections][populate]=*

export async function fetchNavContent() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${API_URL_STRAPI}/navigation?populate[navigationPanel][populate][link][populate]=*&populate[navigationPanel][populate][sections][populate]=*`,
    headers: {},
  };

  const data: any = axios
    .request(config)
    .then((response) => {
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

export async function getServicios() {
  const res = await fetch(`${API_URL_STRAPI}/servicios/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getServiciosBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/servicios/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProyectos() {
  const res = await fetch(`${API_URL_STRAPI}/proyectos/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProyectosBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/proyectos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getCatProductos() {
  const res = await fetch(`${API_URL_STRAPI}/categoria-productos?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getCatProductosBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/categoria-productos/${slug}?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProductos() {
  const res = await fetch(`${API_URL_STRAPI}/productos/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProductosBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/productos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}


// Filtrar la informacion del fetch para solo traer lo basico
export async function getProcesos() {
  const res = await fetch(`${API_URL_STRAPI}/tipo-procesos?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProcesosBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/tipo-proceso/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getFormularioBySlug(slug:string) {
  const res = await fetch(`${API_URL_STRAPI}/formularios-contactos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getContactForm(API_URL:string) {
  const res = await fetch(`${API_URL}/formularios-contactos`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

