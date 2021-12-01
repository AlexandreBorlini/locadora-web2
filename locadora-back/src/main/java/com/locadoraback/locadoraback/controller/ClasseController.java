package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.service.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/classe")
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClasseDto cadastrarClasse(@RequestBody ClasseDto dto){
        return classeService.cadastrarClasse(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClasseDto> listarClasses()
    {
        return classeService.listarClasses();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarClasse(@PathVariable String id)
    {
        classeService.deletarClasse(Long.parseLong(id));
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ClasseDto listarClasse(@PathVariable String id)
    {
        return classeService.listarClasse(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClasseDto atualizar(@RequestBody ClasseDto dto){
        return classeService.atualizarClasse(dto);
    }
}
