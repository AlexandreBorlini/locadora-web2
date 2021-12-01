package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Classe;
import com.locadoraback.locadoraback.domain.mapper.ClasseMapper;
import com.locadoraback.locadoraback.repository.ClasseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ClasseService {

    @Autowired
    private ClasseRepository classeRepository;

    @Autowired
    private ClasseMapper classeMapper;

    public ClasseDto cadastrarClasse(ClasseDto dto){

        Classe classe = classeMapper.classeDtoToClasse(dto);
        return classeMapper.classeToClasseDto(classeRepository.save(classe));
    }

    public ClasseDto atualizarClasse(ClasseDto dto){

        listarClasse(dto.getIdClasse());
        Classe classe = classeMapper.classeDtoToClasse(dto);
        return classeMapper.classeToClasseDto(classeRepository.save(classe));
    }

    public ClasseDto listarClasse(Long id) {
        return classeMapper.classeToClasseDto(classeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Classe com Id " + id + " Inválido")));
    }

    public List<ClasseDto> listarClasses(){
        return classeMapper.listClasseToListClasseDto(classeRepository.findAll());
    }

    public void deletarClasse(Long id){
        classeRepository.deleteById(id);
    }
}
