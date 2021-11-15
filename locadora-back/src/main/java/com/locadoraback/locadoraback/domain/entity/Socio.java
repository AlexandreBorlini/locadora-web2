package com.locadoraback.locadoraback.domain.entity;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
public class Socio extends ClienteBase{

    @Id
    @GeneratedValue
    private Long idSocio;

    @NotNull
    private String cpf;

    @NotNull
    private String endereco;

    @NotNull
    private String tel;

    @OneToMany
    @JoinTable(name="socio_dependente", joinColumns= {@JoinColumn(name="idSocio")}, inverseJoinColumns= {@JoinColumn(name="idCliente")})
    private List<Cliente> dependentes;

    public Long getIdSocio() {
        return idSocio;
    }

    public void setIdSocio(Long idSocio) {
        this.idSocio = idSocio;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public List<Cliente> getDependentes() {
        return dependentes;
    }

    public void setDependentes(List<Cliente> dependentes) {
        this.dependentes = dependentes;
    }
}
