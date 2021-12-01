package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Socio;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface SocioMapper {

    SocioDto socioToSocioDto(Socio socio);
    Socio socioDtoToSocio(SocioDto socioDto);

    List<SocioDto> listSocioToListSocioDto(List<Socio> socios);
}
