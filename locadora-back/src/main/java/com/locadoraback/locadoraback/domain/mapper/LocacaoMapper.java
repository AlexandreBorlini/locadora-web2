package com.locadoraback.locadoraback.domain.mapper;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.LocacaoDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Locacao;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface LocacaoMapper {

    LocacaoDto locacaoToLocacaoDto(Locacao locacao);
    Locacao locacaoDtoToLocacao(LocacaoDto locacaoDto);

    List<LocacaoDto> listLocacaoToListLocacaoDto(List<Locacao> locacao);
}
