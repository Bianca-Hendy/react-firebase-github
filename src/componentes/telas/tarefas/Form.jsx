import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import TarefasContext from "./TarefasContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import CampoEntradaTexto from "../../comuns/CampoEntradaTexto";
import Dialogo from "../../comuns/Dialogo";
import { MenuItem } from "@mui/material";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, abreDialogo, setAbreDialogo } =
        useContext(TarefasContext);

    return (
        <>
            <Dialogo id="modalEdicao" Nome="Organização"
                open={abreDialogo} setOpen={setAbreDialogo}
                acaoCadastrar={acaoCadastrar} idform="formulario"
                maxWidth="sm">
                <Alerta alerta={alerta} />
                <CampoEntrada id="txtID" label="ID"
                    tipo="text" name="id" value={objeto.id}
                    onchange={handleChange} requerido={false}
                    readonly={true} />
                <CampoEntrada id="txtNome" label="Nome"
                    tipo="text" name="Nome" value={objeto.Nome}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={50}
                    msgvalido="Nome OK"
                    msginvalido="Informe o nome" />
                <CampoEntradaTexto id="txtLocal" label="Local"
                    rows={5}
                    tipo="text" name="Local"
                    value={objeto.Local}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Local OK"
                    msginvalido="Informe o Local" />
                <CampoSelect
                    id="selectStatus" label="Status"
                    idLabel="labelStatus"
                    name="Status" value={objeto.Status ?? null}
                    onchange={handleChange} requerido={false}
                    msgvalido="Status OK"
                    msginvalido="Informe o status">                    
                    <MenuItem value='Feito'>Feito</MenuItem>
                    <MenuItem value='Desativado'>Não feito</MenuItem>                    
                </CampoSelect>
            </Dialogo>
        </>
    )

}

export default Form;