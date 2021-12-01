package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.domain.DTO.TituloDto;
import com.locadoraback.locadoraback.service.SocioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/socio")
public class SocioController {

    @Autowired
    private SocioService socioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SocioDto cadastrarSocio(@RequestBody SocioDto dto){
        return socioService.cadastrarSocio(dto);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SocioDto listarSocio(@PathVariable String id)
    {
        return socioService.listarSocio(Long.parseLong(id));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<SocioDto> listarSocios()
    {
        return socioService.listarSocios();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarSocio(@PathVariable String id)
    {
        socioService.deletarSocio(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SocioDto atualizar(@RequestBody SocioDto dto){
        return socioService.atualizarSocio(dto);
    }
}
