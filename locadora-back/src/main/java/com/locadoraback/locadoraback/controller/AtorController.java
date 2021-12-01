package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.service.AtorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ator")
public class AtorController {

    @Autowired
    private AtorService atorService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AtorDto cadastrarAtor(@RequestBody AtorDto dto){
        return atorService.cadastrarAtor(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AtorDto> listarAtores()
    {
        return atorService.listarAtores();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AtorDto atualizarAtor(@RequestBody AtorDto dto){
        return atorService.atualizarAtor(dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarAtor(@PathVariable String id)
    {
        atorService.deletarAtor(Long.parseLong(id));
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AtorDto listarAtor(@PathVariable String id)
    {
        return atorService.listarAtor(Long.parseLong(id));
    }
}
