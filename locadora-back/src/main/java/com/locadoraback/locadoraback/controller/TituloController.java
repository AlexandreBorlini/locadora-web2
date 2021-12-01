package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.TituloDto;
import com.locadoraback.locadoraback.service.TituloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/titulo")
public class TituloController {

    @Autowired
    private TituloService tituloService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TituloDto cadastrarTitulo(@RequestBody TituloDto dto){
        return tituloService.cadastrarTitulo(dto);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TituloDto listarTitulo(@PathVariable String id)
    {
        return tituloService.listarTitulo(Long.parseLong(id));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TituloDto> listarTitulos()
    {
        return tituloService.listarTitulos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarTitulo(@PathVariable String id)
    {
        tituloService.deletarTitulo(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TituloDto atualizar(@RequestBody TituloDto dto){
        return tituloService.atualizarTitulo(dto);
    }
}
