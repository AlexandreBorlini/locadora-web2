package com.locadoraback.locadoraback.domain.entity;

import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
public class Classe {

    @Id
    @GeneratedValue
    private Long idClasse;

    @NonNull
    private String nome;

    @NonNull
    private Double valor;

    @NonNull
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
