package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
public class TituloDto {

    @JsonProperty("id")
    private Long idTitulo;
    private String nome;
    private String ano;
    private String categoria;
    private String sinopse;
    private DiretorDto diretor;
    private ClasseDto classe;
    private List<AtorDto> atores;

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

    public DiretorDto getDiretor() {
        return diretor;
    }

    public void setDiretor(DiretorDto diretor) {
        this.diretor = diretor;
    }

    public ClasseDto getClasse() {
        return classe;
    }

    public void setClasse(ClasseDto classe) {
        this.classe = classe;
    }

    public List<AtorDto> getAtores() {
        return atores;
    }

    public void setAtores(List<AtorDto> atores) {
        this.atores = atores;
    }
}
