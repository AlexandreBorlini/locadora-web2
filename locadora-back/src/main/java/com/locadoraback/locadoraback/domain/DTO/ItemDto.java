package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
public class ItemDto {

    @JsonProperty("id")
    private Long idItem;
    @JsonProperty("numserie")
    private Long numeroSerie;
    @JsonProperty("dtaquisicao")
    private Date dataAquisicao;
    @JsonProperty("tipoItem")
    private String tipo;
    private TituloDto titulo;

    public Long getIdItem() {
        return idItem;
    }

    public void setIdItem(Long idItem) {
        this.idItem = idItem;
    }

    public Long getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(Long numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public Date getDataAquisicao() {
        return dataAquisicao;
    }

    public void setDataAquisicao(Date dataAquisicao) {
        this.dataAquisicao = dataAquisicao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public TituloDto getTitulo() {
        return titulo;
    }

    public void setTitulo(TituloDto titulo) {
        this.titulo = titulo;
    }
}
