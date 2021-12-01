package com.locadoraback.locadoraback.domain.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
public class ClienteBase {

    @NotNull
    private String nome;

    @NotNull
    @JsonProperty("numinscricao")
    private Long numInscricao;

    @NotNull
    @JsonProperty("datanascimento")
    private Date dataNascimento;

    @NotNull
    private String sexo;

    @NotNull
    @JsonProperty("estahativo")
    private Boolean ativo;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getNumInscricao() {
        return numInscricao;
    }

    public void setNumInscricao(Long numInscricao) {
        this.numInscricao = numInscricao;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }
}
