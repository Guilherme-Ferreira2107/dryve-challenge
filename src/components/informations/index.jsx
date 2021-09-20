import React, { useState } from "react";

import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

import filterPlus from "../../assets/icons/plus-blue.png";

import { FormEdit, AddBtn, InputSend } from "./styles";

const Informations = () => {
  const { register, handleSubmit } = useForm();
  const [gender, setGender] = useState("masculino");

  const onSubmit = (data) => console.log(data);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto #0065FF",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#0065FF",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#0065FF",
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  return (
    <FormEdit onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup
        row
        aria-label="typePeople"
        name="row-radio-buttons-group"
        defaultValue="fisic"
      >
        <FormControlLabel
          name="typePeople"
          value="fisic"
          control={<BpRadio />}
          label="Pessoa Física"
          {...register("typePeopleSelect")}
        />
        <FormControlLabel
          name="typePeople"
          value="juridic"
          control={<BpRadio />}
          label="Pessoa Jurídica"
          {...register("typePeopleSelect")}
        />
      </RadioGroup>

      <h2>Dados pessoais</h2>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            fullWidth
            name="firstName"
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value="Pedro"
            {...register("firstName")}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            fullWidth
            name="lastName"
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
            value="Gandra de Carvalho"
            {...register("lastName")}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            fullWidth
            name="email"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value="pedrogandra@gmail.com"
            {...register("email")}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            fullWidth
            name="phoneNumber"
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            value="(16) 99610-4666"
            {...register("phoneNumber")}
          />
        </Grid>
        <Grid item md={3} className="box-birthday">
          <TextField
            fullWidth
            name="birthday"
            id="outlined-basic"
            label="Nascimento"
            variant="outlined"
            value="20/03/1986"
            {...register("birthday")}
          />
        </Grid>
        <Grid item md={3}>
          <Select
            fullWidth
            variant="outlined"
            id="demo-simple-select-standard-label"
            value={gender}
            onChange={handleChangeGender}
          >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="feminino">Feminino</MenuItem>
          </Select>
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            name="rg"
            id="outlined-basic"
            label="RG"
            variant="outlined"
            value="44.000.112-3"
            {...register("rg")}
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            name="cpf"
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            value="331.552.920-96"
            {...register("cpf")}
          />
        </Grid>
      </Grid>

      <h2>Endereço</h2>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Grid item md={4} className="box-cep">
            <TextField
              fullWidth
              name="cep"
              id="outlined-basic"
              label="CEP"
              variant="outlined"
              value="14025-670"
              {...register("cep")}
            />
          </Grid>
        </Grid>

        <Grid item md={8}>
          <TextField
            fullWidth
            name="street"
            label="Endereço"
            variant="outlined"
            value="Rua Capitão Adelmio Norberto da Silva"
            {...register("street")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="number"
            label="Número"
            variant="outlined"
            value="785"
            {...register("number")}
          />
        </Grid>

        <Grid item md={6}>
          <TextField
            fullWidth
            name="complement"
            label="Complemento"
            variant="outlined"
            value="1º e 2º andar"
            {...register("complement")}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            fullWidth
            name="district"
            label="Bairro"
            variant="outlined"
            value="Alto da Boa Vista"
            {...register("district")}
          />
        </Grid>

        <Grid item md={8}>
          <Select fullWidth variant="outlined" value="ribeiraopreto">
            <MenuItem value="ribeiraopreto">Ribeirão Preto</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}>
          <Select fullWidth variant="outlined" value="sp">
            <MenuItem value="sp">São Paulo</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <h2>Dados bancários</h2>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Select fullWidth variant="outlined" name="bank" value="001">
            <MenuItem value="001">341 - Itaú Unibanco S/A</MenuItem>
          </Select>
        </Grid>

        <Grid item md={3}>
          <Select
            fullWidth
            variant="outlined"
            name="accountcurrent"
            value="accountcurrent"
          >
            <MenuItem value="accountcurrent">Corrente</MenuItem>
          </Select>
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            name="agency"
            label="Agência"
            variant="outlined"
            value="3320"
            {...register("agency")}
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            name="account"
            label="Conta"
            variant="outlined"
            value="92861"
            {...register("account")}
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            name="digit"
            label="Dígito"
            variant="outlined"
            value="5"
            {...register("digit")}
          />
        </Grid>
      </Grid>

      <h2>Tags</h2>
      <AddBtn>
        <button>
          <img src={filterPlus} alt="" />
          <span>Adicionar</span>
        </button>
      </AddBtn>

      <InputSend>
        <input type="submit" value="Salvar" />
      </InputSend>
    </FormEdit>
  );
};

export default Informations;
