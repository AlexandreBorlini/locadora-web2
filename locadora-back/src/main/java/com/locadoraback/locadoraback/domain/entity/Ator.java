package com.locadoraback.locadoraback.domain.entity;

import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
public class Ator {

    @Id
    @GeneratedValue
    private Long idAtor;

    @NonNull
    private String nome;

    public Long getIdAtor() {
        return idAtor;
    }

    public void setIdAtor(Long idAtor) {
        this.idAtor = idAtor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
