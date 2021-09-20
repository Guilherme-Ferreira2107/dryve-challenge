import { Grid } from "@material-ui/core";

import car03 from "../../assets/images/car-09.png";
import car04 from "../../assets/images/car-10.png";

import TitleComponent from "../title";

import { Wrapper, BoxOpportunities } from "./styles";

const Opportunities = () => {
  return (
    <Wrapper className="c-container-cards">
      <TitleComponent value="Oportunidades" />
      <Grid container>
        <Grid item md={6}>
          <BoxOpportunities>
            <div>
              <p>Pedro Gandra de Carvalho</p>
              <div>
                <p>Valor: </p>
                <span>R$ 30.900</span>
              </div>
              <div>
                <p>Data: </p>
                <span>21 de junho</span>
              </div>
            </div>
            <img src={car03} alt="" className="c-mt-20" />
          </BoxOpportunities>
        </Grid>

        <Grid item md={6}>
          <BoxOpportunities>
            <div>
              <p>Pedro Gandra de Carvalho</p>
              <div>
                <p>Valor: </p>
                <span>R$ 90.900</span>
              </div>
              <div>
                <p>Data: </p>
                <span>12 de junho</span>
              </div>
            </div>
            <img src={car04} alt="" className="c-mt-20" />
          </BoxOpportunities>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Opportunities;
