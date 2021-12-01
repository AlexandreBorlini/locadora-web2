package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;
import org.springframework.context.annotation.Bean;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface ClienteMapper {

    ClienteDto clienteToClienteDto(Cliente cliente);
    Cliente clienteDtoToCliente(ClienteDto clienteDto);

    List<ClienteDto> listClienteToListClienteDto(List<Cliente> clientes);
}
