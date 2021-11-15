package com.locadoraback.locadoraback.domain.entity;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
public class Diretor {

    @Id
    @GeneratedValue
    private Long idDiretor;

    @NotNull
    private String nome;

    public Long getIdDiretor() {
        return idDiretor;
    }

    public void setIdDiretor(Long idDiretor) {
        this.idDiretor = idDiretor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
