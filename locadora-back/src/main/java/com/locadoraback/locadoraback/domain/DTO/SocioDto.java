package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.locadoraback.locadoraback.domain.entity.ClienteBase;
import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
public class SocioDto extends ClienteBase {

    @JsonProperty("id")
    private Long idSocio;
    private String cpf;
    private String endereco;
    private String tel;

    @JsonProperty("dependentes")
    private List<ClienteDto> dependentes;

    public Long getIdSocio() {
        return idSocio;
    }

    public void setIdSocio(Long idSocio) {
        this.idSocio = idSocio;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public List<ClienteDto> getDependentes() {
        return dependentes;
    }

    public void setDependentes(List<ClienteDto> dependentes) {
        this.dependentes = dependentes;
    }
}
