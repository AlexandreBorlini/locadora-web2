package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Classe;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface ClasseMapper {

    ClasseDto classeToClasseDto(Classe classe);
    Classe classeDtoToClasse(ClasseDto classeDto);

    List<ClasseDto> listClasseToListClasseDto(List<Classe> classes);
}
