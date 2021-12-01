package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
public class LocacaoDto {

    @JsonProperty("id")
    private Long idLocacao;
    @JsonProperty("datalocacao")
    private Date dataLocacao;
    private Date dataDevolucaoPrevista;
    private Date dataDevolucaoEfetiva;
    private Double valorCobrado;
    private Double multaCobrada;

    private ClienteDto cliente;

    private SocioDto socio;

    private ItemDto item;

    public Long getIdLocacao() {
        return idLocacao;
    }

    public void setIdLocacao(Long idLocacao) {
        this.idLocacao = idLocacao;
    }

    public Date getDataLocacao() {
        return dataLocacao;
    }

    public void setDataLocacao(Date dataLocacao) {
        this.dataLocacao = dataLocacao;
    }

    public Date getDataDevolucaoPrevista() {
        return dataDevolucaoPrevista;
    }

    public void setDataDevolucaoPrevista(Date dataDevolucaoPrevista) {
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    }

    public Date getDataDevolucaoEfetiva() {
        return dataDevolucaoEfetiva;
    }

    public void setDataDevolucaoEfetiva(Date dataDevolucaoEfetiva) {
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    }

    public Double getValorCobrado() {
        return valorCobrado;
    }

    public void setValorCobrado(Double valorCobrado) {
        this.valorCobrado = valorCobrado;
    }

    public Double getMultaCobrada() {
        return multaCobrada;
    }

    public void setMultaCobrada(Double multaCobrada) {
        this.multaCobrada = multaCobrada;
    }

    public ClienteDto getCliente() {
        return cliente;
    }

    public void setCliente(ClienteDto cliente) {
        this.cliente = cliente;
    }

    public SocioDto getSocio() {
        return socio;
    }

    public void setSocio(SocioDto socio) {
        this.socio = socio;
    }

    public ItemDto getItem() {
        return item;
    }

    public void setItem(ItemDto item) {
        this.item = item;
    }
}
