import iconCar from "../assets/icons/card-car.png";
import iconPrice from "../assets/icons/card-price.png";
import iconKM from "../assets/icons/card-km.png";
import iconCalendar from "../assets/icons/card-calendar.png";
import logoOlx from "../assets/images/logo-olx.png";
import logoWebmotors from "../assets/images/logo-webmotors.png";
import logoIcarros from "../assets/images/logo-icarros.png";
import logoAutoline from "../assets/images/logo-autoline.png";
import logoMercadoLivre from "../assets/images/logo-mercadolivre.png";
import car01 from "../assets/images/car-01.png";
import car02 from "../assets/images/car-02.png";
import car03 from "../assets/images/car-03.png";
import car04 from "../assets/images/car-04.png";
import car05 from "../assets/images/car-05.png";
import car06 from "../assets/images/car-06.png";

export const dashboardMock = {
  cards: [
    {
      title: "Veículos publicados",
      description: "26",
      urlIcon: iconCar,
    },
    {
      title: "Preço médio",
      description: "R$ 41.5K",
      urlIcon: iconPrice,
    },
    {
      title: "Km médio",
      description: "68.800 km",
      urlIcon: iconKM,
    },
    {
      title: "Idade média do estoque",
      description: "4 anos",
      urlIcon: iconCalendar,
    },
  ],
  leads: [
    {
      title: "OLX",
      valueLeads: "26",
      urlIcon: logoOlx,
    },
    {
      title: "Webmotors",
      valueLeads: "29",
      urlIcon: logoWebmotors,
    },
    {
      title: "iCarros",
      valueLeads: "18",
      urlIcon: logoIcarros,
    },
    {
      title: "Autoline",
      valueLeads: "7",
      urlIcon: logoAutoline,
    },
    {
      title: "OLX",
      valueLeads: "6",
      urlIcon: logoOlx,
    },
    {
      title: "MercadoLivre",
      valueLeads: "5",
      urlIcon: logoMercadoLivre,
    },
    {
      title: "iCarros",
      valueLeads: "4",
      urlIcon: logoIcarros,
    },
  ],
  listCars: {
    expired: [
      {
        urlImage: car01,
        title: "LAND ROVER FREELANDER",
        info: {
          brand: "SE 3.2 I6",
          year: "2009/2008",
          info: "Gasolina",
          km: "143.580 km",
          price: "R$ 32.500",
        },
        status: "Vencido",
        published: "Há 3 dias",
      },
      {
        urlImage: car02,
        title: "HYUNDAI HB20",
        info: {
          brand: "COMFORT 1.0 12V FLEX",
          year: "2016/2016",
          info: "Etanol/Gasolina",
          km: "93.385 km",
          price: "R$ 36.800",
        },
        status: "Vencido",
        published: "Há 2 dias",
      },
      {
        urlImage: car03,
        title: "NISSAN SENTRA",
        info: {
          brand: "SV 2.0 16V CVT FLEX",
          year: "2014/2014",
          info: "Etanol/Gasolina",
          km: "76.286 km",
          price: "R$ 42.500",
        },
        status: "Vencido",
        published: "Há 6 horas",
      },
      {
        urlImage: car01,
        title: "LAND ROVER FREELANDER",
        info: {
          brand: "SE 3.2 I6",
          year: "2009/2008",
          info: "Gasolina",
          km: "143.580 km",
          price: "R$ 32.500",
        },
        status: "Vencido",
        published: "Há 3 dias",
      },
    ],
    daily: [
      {
        urlImage: car04,
        title: "HYUNDAI TUCSON",
        info: {
          brand: "GLS 4X2 2.0 16V AT FLEX",
          year: "2013/2012",
          info: "Etanol/Gasolina",
          km: "201.910 km",
          price: "R$ 39.000",
        },
        status: "Agendado",
        published: "Seg, 21/Dez às 16:00",
      },
      {
        urlImage: car05,
        title: "CHEVROLET CAPTIVA",
        info: {
          brand: "SPORT 2.4 16V",
          year: "2012/2012",
          info: "Gasolina",
          km: "81.057 km",
          price: "R$ 38.000",
        },
        status: "Agendado",
        published: "Qua, 23/Dez às 08:00",
      },
      {
        urlImage: car06,
        title: "CHEVROLET CRUZE SPORT6",
        info: {
          brand: "LT 1.4 TB FLEX",
          year: "2018/2017",
          info: "Etanol/Gasolina",
          km: "51.823 km",
          price: "R$ 74.800",
        },
        status: "Agendado",
        published: "Qua, 23/Dez às 11:00",
      },
      {
        urlImage: car04,
        title: "HYUNDAI TUCSON",
        info: {
          brand: "GLS 4X2 2.0 16V AT FLEX",
          year: "2013/2012",
          info: "Etanol/Gasolina",
          km: "201.910 km",
          price: "R$ 39.000",
        },
        status: "Agendado",
        published: "Seg, 21/Dez às 16:00",
      },
    ],
  },
};
