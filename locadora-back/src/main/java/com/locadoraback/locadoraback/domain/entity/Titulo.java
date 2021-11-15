package com.locadoraback.locadoraback.domain.entity;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
public class Titulo {

    @Id
    @GeneratedValue
    private Long idTitulo;

    @NotNull
    private String nome;

    private String ano;

    @NotNull
    private String categoria;

    private String sinopse;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idDiretor")
    private Diretor diretor;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idClasse")
    private Classe classe;

    @ManyToMany
    @NotNull
    @JoinTable(name="ator_titulo", joinColumns= {@JoinColumn(name="idTitulo")}, inverseJoinColumns= {@JoinColumn(name="idAtor")})
    private List<Ator> atores;

    public Long getIdTitulo() {
        return idTitulo;
    }

    public void setIdTitulo(Long idTitulo) {
        this.idTitulo = idTitulo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getSinopse() {
        return sinopse;
    }

    public void setSinopse(String sinopse) {
        this.sinopse = sinopse;
    }

    public Diretor getDiretor() {
        return diretor;
    }

    public void setDiretor(Diretor diretor) {
        this.diretor = diretor;
    }

    public Classe getClasse() {
        return classe;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }

    public List<Ator> getAtores() {
        return atores;
    }

    public void setAtores(List<Ator> atores) {
        this.atores = atores;
    }
}
