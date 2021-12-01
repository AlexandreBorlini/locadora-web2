package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface AtorMapper {

    AtorDto atorToAtorDto(Ator ator);
    Ator atorDtoToAtor(AtorDto atorDto);

    List<AtorDto> listAtorToListAtorDto(List<Ator> atores);
}
