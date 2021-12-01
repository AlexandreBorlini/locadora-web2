package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.DiretorDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Diretor;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface DiretorMapper {

    DiretorDto diretorToDiretorDto(Diretor diretor);
    Diretor diretorDtoToDiretor(DiretorDto diretorDto);

    List<DiretorDto> listDiretorToListDiretorDto(List<Diretor> diretores);
}
