import axios from "axios";

const isDEV = true;
const API_URL_STRAPI_PROD = process.env.API_URL_STRAPI_PROD;
const API_URL_STRAPI_DEV = process.env.API_URL_STRAPI_DEV;
const API_URL_STRAPI = isDEV ? API_URL_STRAPI_DEV : API_URL_STRAPI_PROD;
const CLIENT_API_URL_STRAPI = process.env.CLIENT_API_URL_STRAPI;

// console.log('DEV', CLIENT_API_URL_STRAPI);
// console.log('PROD',CLIENT_API_URL_STRAPI);
// console.log('lol',API_URL_STRAPI);
// http://localhost:1337/api/categoria-productos?fields[0]=title&fields[1]=slug&populate[productos][fields][2]=titulo&populate[productos][fields][3]=slug
// http://localhost:1337/api/navigation?populate[navigationPanel][populate][link][populate]=*&populate[navigationPanel][populate][sections][populate]=*

// export async function getVisitasPortafolioBySlug(slug: string) {
//   try {
//     const res = await fetch(`${API_URL_STRAPI}/visitas-portafolios/${slug}`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const { data } = await res.json();
//     return data;
//   } catch (error) {
//     // Aquí puedes manejar el error de la manera que prefieras
//     console.error("Error fetching data:", error);
//     // Puedes lanzar el error nuevamente si lo deseas
//     throw error;
//   }
// }

export async function getVisitasPortafolioBySlug(slug: string) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${CLIENT_API_URL_STRAPI}/visitas-portafolios/${slug}`,
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

export async function fetchProductContent() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${CLIENT_API_URL_STRAPI}/categoria-productos?fields[0]=title&fields[1]=slug&populate[productos][fields][2]=titulo&populate[productos][fields][3]=slug`,
    headers: {},
  };

  const data: any = axios
    .request(config)
    .then((response) => {
      return JSON.stringify(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

export async function fetchProcesosContent() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${CLIENT_API_URL_STRAPI}/tipo-procesos?fields[0]=titulo&fields[1]=slug&populate[procesos][fields][2]=titulo&populate[procesos][fields][3]=slug`,
    headers: {},
  };

  const data: any = axios
    .request(config)
    .then((response) => {
      return JSON.stringify(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

export async function fetchServiciosContent() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${CLIENT_API_URL_STRAPI}/servicios?fields[0]=titulo&fields[1]=slug`,
    headers: {},
  };

  const data: any = axios
    .request(config)
    .then((response) => {
      return JSON.stringify(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

export async function fetchSTratamientoContent() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${CLIENT_API_URL_STRAPI}/sistemas-tratamientos?fields[0]=titulo&fields[1]=slug`,
    headers: {},
  };

  const data: any = axios
    .request(config)
    .then((response) => {
      return JSON.stringify(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

export async function getServicios() {
  const res = await fetch(`${API_URL_STRAPI}/servicios?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getServiciosBySlug(slug: string) {
  const res = await fetch(`${API_URL_STRAPI}/servicios/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProjectsGalery() {
  const res = await fetch(
    `${API_URL_STRAPI}/proyectos?fields[0]=titulo&fields[1]=slug&fields[2]=alcance&fields[3]=isPublic&populate[cover][fields][4]=*&populate[tags][fields][5]=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  // console.log(data)
  const projectsData = data.map((project: any) => {
    const { titulo, slug, cover, alcance, tags } = project.attributes;
    const coverImage = cover.data?.attributes.url;

    // const arrTags = tags.data?.map((tag:any)=>{
    //   const newTag = tag.attributes.tag
    //   return newTag
    // })

    const newProject = {
      id: project.id,
      title: titulo,
      slug: slug,
      cover: coverImage,
      scope: alcance,
      altText: cover.data?.attributes.alternativeText,
      tags: tags.data,
    };
    return newProject;
  });
  return projectsData;
}

export async function getProyectos() {
  const res = await fetch(
    `${API_URL_STRAPI}/proyectos?fields[0]=titulo&fields[1]=slug&fields[2]=isPublic&populate[cover][fields][3]=*&populate[tags][fields][4]=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getProyectosNavigator() {
  try {
    const res = await fetch(
      `${CLIENT_API_URL_STRAPI}/proyectos?fields[0]=titulo&fields[1]=slug&fields[2]=isPublic`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    // Aquí puedes manejar el error de la manera que prefieras
    console.error("Error fetching data:", error);
    // Puedes lanzar el error nuevamente si lo deseas
    throw error;
  }
}

export async function getProyectosBySlug(slug: string) {
  const res = await fetch(`${API_URL_STRAPI}/proyectos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getCatProductos() {
  const res = await fetch(
    `${API_URL_STRAPI}/categoria-productos?fields[0]=title&fields[1]=slug&fields[2]=descripcion&populate[cover][fields][3]=*&populate[productos][fields][4]=titulo&populate[productos][fields][5]=slug&populate[productos][populate][cover]=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getCatProductosBySlug(slug: string) {
  const res = await fetch(
    `${API_URL_STRAPI}/categoria-productos/${slug}?populate=*`
  );

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

export async function getProductosBySlug(slug: string) {
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

export async function getProcesosBySlug(slug: string) {
  const res = await fetch(`${API_URL_STRAPI}/tipo-procesos/${slug}?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getFormularioBySlug(slug: string) {
  const res = await fetch(`${API_URL_STRAPI}/formularios-contactos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getContactForm(API_URL: string) {
  const res = await fetch(`${API_URL}/formularios-contactos`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getSistemasTratamiento() {
  const res = await fetch(`${API_URL_STRAPI}/sistemas-tratamientos?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getSistemasTratamientoBySlug(slug: string) {
  const res = await fetch(`${API_URL_STRAPI}/sistemas-tratamientos/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}
