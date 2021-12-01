package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.mapper.AtorMapper;
import com.locadoraback.locadoraback.repository.AtorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AtorService {

    @Autowired
    private AtorRepository atorRepository;

    @Autowired
    private AtorMapper atorMapper;

    public AtorDto cadastrarAtor(AtorDto dto){

        Ator ator = atorMapper.atorDtoToAtor(dto);
        return atorMapper.atorToAtorDto(atorRepository.save(ator));
    }

    public AtorDto atualizarAtor(AtorDto dto){

       listarAtor(dto.getIdAtor());
       Ator ator = atorMapper.atorDtoToAtor(dto);
       return atorMapper.atorToAtorDto(atorRepository.save(ator));
    }

    public AtorDto listarAtor(Long id) {
        return atorMapper.atorToAtorDto(atorRepository.findById(id)
                                .orElseThrow(() -> new EntityNotFoundException("Ator com Id " + id + " Inválido")));
    }

    public List<AtorDto> listarAtores(){
        return atorMapper.listAtorToListAtorDto(atorRepository.findAll());
    }

    public void deletarAtor(Long id){
        atorRepository.deleteById(id);
    }
}
