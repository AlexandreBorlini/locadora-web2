package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.DiretorDto;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.entity.Diretor;
import com.locadoraback.locadoraback.domain.mapper.DiretorMapper;
import com.locadoraback.locadoraback.repository.DiretorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class DiretorService {

    @Autowired
    private DiretorRepository diretorRepository;

    @Autowired
    private DiretorMapper diretorMapper;

    public DiretorDto cadastrarDiretor(DiretorDto dto){

        Diretor diretor = diretorMapper.diretorDtoToDiretor(dto);
        return diretorMapper.diretorToDiretorDto(diretorRepository.save(diretor));
    }

    public DiretorDto atualizarDiretor(DiretorDto dto){

        listarDiretor(dto.getIdDiretor());
        Diretor diretor = diretorMapper.diretorDtoToDiretor(dto);
        return diretorMapper.diretorToDiretorDto(diretorRepository.save(diretor));
    }

    public DiretorDto listarDiretor(Long id) {
        return diretorMapper.diretorToDiretorDto(diretorRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Diretor com Id " + id + " Inválido")));
    }

    public List<DiretorDto> listarDiretores(){
        return diretorMapper.listDiretorToListDiretorDto(diretorRepository.findAll());
    }

    public void deletarDiretor(Long id){
        diretorRepository.deleteById(id);
    }
}
