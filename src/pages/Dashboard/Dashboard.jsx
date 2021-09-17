import React from "react";

import CardComponents from "../../components/cards";
import GraphicComponents from "../../components/graphic";
import LeadsComponents from "../../components/leads";

import { dashboardMock } from "../../mocks/dashboard.mock";
import { Wrapper, SecondRow, ListCars } from "./styles";

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>Resumo</h1>
      <CardComponents data={dashboardMock.cards} />
      <SecondRow>
        <GraphicComponents />
        <LeadsComponents data={dashboardMock.leads} />
      </SecondRow>
      <ListCars>
        <div>Test-drives vencidos</div>
        <div>Test-drives do dia</div>
      </ListCars>
    </Wrapper>
  );
};

export default Dashboard;
