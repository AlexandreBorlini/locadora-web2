package com.locadoraback.locadoraback.domain.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.locadoraback.locadoraback.domain.entity.ClienteBase;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ClienteDto extends ClienteBase {

    @JsonProperty("id")
    private Long idCliente;

    public Long getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Long idCliente) {
        this.idCliente = idCliente;
    }
}
