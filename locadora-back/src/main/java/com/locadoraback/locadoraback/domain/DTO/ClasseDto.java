package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ClasseDto {

    @JsonProperty("id")
    private Long idClasse;
    private String nome;
    private Double valor;

    @JsonProperty("prazodevolucao")
    private Integer prazoDevolucao;

    public Long getIdClasse() {
        return idClasse;
    }

    public void setIdClasse(Long idClasse) {
        this.idClasse = idClasse;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Integer getPrazoDevolucao() {
        return prazoDevolucao;
    }

    public void setPrazoDevolucao(Integer prazoDevolucao) {
        this.prazoDevolucao = prazoDevolucao;
    }
}
