package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.LocacaoDto;
import com.locadoraback.locadoraback.domain.DTO.TituloDto;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.entity.Titulo;
import com.locadoraback.locadoraback.domain.mapper.TituloMapper;
import com.locadoraback.locadoraback.repository.TituloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class TituloService {

    @Autowired
    private TituloRepository tituloRepository;

    @Autowired
    private TituloMapper tituloMapper;

    public TituloDto cadastrarTitulo(TituloDto dto){

        Titulo titulo  = tituloMapper.tituloDtoToTitulo(dto);
        return tituloMapper.tituloToTituloDto(tituloRepository.save(titulo));
    }

    public TituloDto atualizarTitulo(TituloDto dto){

        listarTitulo(dto.getIdTitulo());
        Titulo titulo = tituloMapper.tituloDtoToTitulo(dto);
        return tituloMapper.tituloToTituloDto(tituloRepository.save(titulo));
    }

    public TituloDto listarTitulo(Long id) {
        return tituloMapper.tituloToTituloDto(tituloRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Titulo com Id " + id + " Inválido")));
    }

    public List<TituloDto> listarTitulos(){
        return tituloMapper.listTituloToListTituloDto(tituloRepository.findAll());
    }

    public void deletarTitulo(Long id){
        tituloRepository.deleteById(id);
    }
}
