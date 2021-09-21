import React from "react";

import { Link } from "react-router-dom";

import arrowIcon from "../../assets/icons/arrow-right.png";

import Informations from "../../components/informations";
import BuyIntention from "../../components/buyIntention";
import SellIntention from "../../components/sellIntention";
import Adverts from "../../components/adverts";
import Opportunities from "../../components/opportunities";
import TitleComponent from "../../components/title";

import { Wrapper, Header, ColsRight, ColsLeft } from "./styles";
import { Grid } from "@material-ui/core";

const ContactsEdit = () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/contatos" className="btn-back">
          <img src={arrowIcon} alt="" />
        </Link>
        <h3>Editar Contato</h3>
      </Header>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <ColsLeft className="c-container-cards">
            <TitleComponent value="Informações" />
            <Informations />
          </ColsLeft>
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          <ColsRight>
            <BuyIntention />
            <SellIntention />
            <Adverts />
            <Opportunities />
          </ColsRight>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactsEdit;
