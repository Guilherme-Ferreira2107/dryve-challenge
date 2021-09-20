import { Grid } from "@material-ui/core";
import React from "react";

import CardComponents from "../../components/cards";
import GraphicComponents from "../../components/graphic";
import LeadsComponents from "../../components/leads";
import ListCarsComponents from "../../components/listCars";

import { dashboardMock } from "../../mocks/dashboard.mock";
import { Wrapper, ListCars } from "./styles";

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>Resumo</h1>
      <CardComponents data={dashboardMock.cards} />
      <Grid container spacing={3}>
        <Grid item sm={12} md={9}>
          <GraphicComponents />
        </Grid>
        <Grid item sm={12} md={3}>
          <LeadsComponents data={dashboardMock.leads} />
        </Grid>
      </Grid>
      <ListCars>
        <Grid container spacing={3} className="c-mt-16">
          <Grid item sm={12} md={6}>
            <ListCarsComponents
              title="Test-drives vencidos"
              data={dashboardMock.listCars.expired}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <ListCarsComponents
              title="Test-drives do dia"
              data={dashboardMock.listCars.daily}
            />
          </Grid>
        </Grid>
      </ListCars>
    </Wrapper>
  );
};

export default Dashboard;
