package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.DiretorDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.service.DiretorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/diretor")
public class DiretorController {

    @Autowired
    private DiretorService diretorService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public DiretorDto cadastrarDiretor(@RequestBody DiretorDto dto){
        return diretorService.cadastrarDiretor(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DiretorDto> listarDiretores()
    {
        return diretorService.listarDiretores();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DiretorDto listarDiretor(@PathVariable String id)
    {
        return diretorService.listarDiretor(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarDiretor(@PathVariable String id)
    {
        diretorService.deletarDiretor(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public DiretorDto atualizar(@RequestBody DiretorDto dto){
        return diretorService.atualizarDiretor(dto);
    }
}
