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

const ContactsEdit = () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/contatos" className="btn-back">
          <img src={arrowIcon} alt="" />
        </Link>
        <h3>Editar Contato</h3>
      </Header>

      <div className="c-d-flex">
        <ColsLeft className="c-container-cards">
          <TitleComponent value="Informações" />
          <Informations />
        </ColsLeft>
        <ColsRight>
          <BuyIntention />
          <SellIntention />
          <Adverts />
          <Opportunities />
        </ColsRight>
      </div>
    </Wrapper>
  );
};

export default ContactsEdit;
