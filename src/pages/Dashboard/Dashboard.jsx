import React from "react";
import ReactApexChart from "react-apexcharts";

import { dashboardMock } from "../../mocks/dashboard.mock";
import { Wrapper, Cards, Graphics, ListCars } from "./styles";

const Dashboard = () => {
  const series = [
    {
      name: "series1",
      data: [45, 42, 40, 38, 35, 38, 48, 40, 35, 41, 28, 41, 47, 45],
      color: "#0065FF",
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    background: "linear-gradient(207.01deg, #99CDFF -11.16%, #EAF9FF 84.31%)",
    labels: series,
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    xaxis: {
      categories: [
        "08/Dez",
        "09/Dez",
        "10/Dez",
        "11/Dez",
        "12/Dez",
        "13/Dez",
        "14/Dez",
        "15/Dez",
        "16/Dez",
        "17/Dez",
        "18/Dez",
        "19/Dez",
        "20/Dez",
        "21/Dez",
      ],
      tickAmount: 10,
    },
    yaxis: {
      opposite: false,
      tickAmount: 4,
      min: 20,
      max: 50,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const valorConvertido = series[seriesIndex][dataPointIndex];
        return `
        <div class="tooltip"> 
          <div><b>${valorConvertido}</b></div>
          <small>${w.globals.categoryLabels[dataPointIndex]}</small>
        </div>
      `;
      },
    },
    markers: {
      size: 4,
      colors: "#0065FF",
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
      hover: {
        size: 6,
        sizeOffset: 3,
      },
    },
  };

  return (
    <Wrapper>
      <h1>Resumo</h1>

      <Cards>
        {dashboardMock.cards.map((item, idx) => {
          return (
            <div className="content-card" key={idx}>
              <h5>{item.title}</h5>
              <div className="second-row">
                <h3>{item.description}</h3>
                <div>
                  <img src={item.urlIcon} alt={item.title} />
                </div>
              </div>
            </div>
          );
        })}
      </Cards>
      <Graphics>
        <div className="graphs container-cards">
          <h5>
            Leads {"("}últimos 30 dias{")"}
          </h5>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width="100%"
          />
        </div>
        <div className="leads container-cards">
          <h5>
            Leads por portal {"("}últimos 30 dias{")"}
          </h5>
        </div>
      </Graphics>
      <ListCars>
        <div>Test-drives vencidos</div>
        <div>Test-drives do dia</div>
      </ListCars>
    </Wrapper>
  );
};

export default Dashboard;
