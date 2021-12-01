package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.LocacaoDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.entity.Socio;
import com.locadoraback.locadoraback.domain.mapper.SocioMapper;
import com.locadoraback.locadoraback.repository.SocioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class SocioService {

    @Autowired
    private SocioRepository socioRepository;

    @Autowired
    private SocioMapper socioMapper;

    public SocioDto cadastrarSocio(SocioDto dto){

        Socio socio = socioMapper.socioDtoToSocio(dto);
        return socioMapper.socioToSocioDto(socioRepository.save(socio));
    }

    public SocioDto atualizarSocio(SocioDto dto){

        listarSocio(dto.getIdSocio());
        Socio socio = socioMapper.socioDtoToSocio(dto);
        return socioMapper.socioToSocioDto(socioRepository.save(socio));
    }

    public SocioDto listarSocio(Long id) {
        return socioMapper.socioToSocioDto(socioRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Socio com Id " + id + " Inválido")));
    }

    public List<SocioDto> listarSocios(){
        return socioMapper.listSocioToListSocioDto(socioRepository.findAll());
    }

    public void deletarSocio(Long id){
        socioRepository.deleteById(id);
    }
}
