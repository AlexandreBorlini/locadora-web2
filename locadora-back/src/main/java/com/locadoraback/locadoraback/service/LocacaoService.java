package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.LocacaoDto;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.entity.Locacao;
import com.locadoraback.locadoraback.domain.mapper.LocacaoMapper;
import com.locadoraback.locadoraback.repository.LocacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class LocacaoService {

    @Autowired
    private LocacaoRepository locacaoRepository;

    @Autowired
    private LocacaoMapper locacaoMapper;

    public LocacaoDto cadastrarLocacao(LocacaoDto dto){

        Locacao locacao = locacaoMapper.locacaoDtoToLocacao(dto);
        return locacaoMapper.locacaoToLocacaoDto(locacaoRepository.save(locacao));
    }

    public LocacaoDto atualizarLocacao(LocacaoDto dto){

        listarLocacao(dto.getIdLocacao());
        Locacao locacao = locacaoMapper.locacaoDtoToLocacao(dto);
        return locacaoMapper.locacaoToLocacaoDto(locacaoRepository.save(locacao));
    }

    public LocacaoDto listarLocacao(Long id) {
        return locacaoMapper.locacaoToLocacaoDto(locacaoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Locacao com Id " + id + " Inválido")));
    }

    public List<LocacaoDto> listarLocacoes(){
        return locacaoMapper.listLocacaoToListLocacaoDto(locacaoRepository.findAll());
    }

    public void deletarLocacao(Long id){
        locacaoRepository.deleteById(id);
    }
}
