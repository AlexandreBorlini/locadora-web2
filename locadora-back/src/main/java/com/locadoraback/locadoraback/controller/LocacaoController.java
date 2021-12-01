package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.LocacaoDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.service.LocacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/locacao")
public class LocacaoController {

    @Autowired
    private LocacaoService locacaoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LocacaoDto cadastrarLocacao(@RequestBody LocacaoDto dto){
        return locacaoService.cadastrarLocacao(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<LocacaoDto> listarLocacoes()
    {
        return locacaoService.listarLocacoes();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public LocacaoDto listarLocacao(@PathVariable String id)
    {
        return locacaoService.listarLocacao(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarLocacao(@PathVariable String id)
    {
        locacaoService.deletarLocacao(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LocacaoDto atualizar(@RequestBody LocacaoDto dto){
        return locacaoService.atualizarLocacao(dto);
    }
}
