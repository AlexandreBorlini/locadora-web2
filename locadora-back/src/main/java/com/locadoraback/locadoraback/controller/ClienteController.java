package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClienteDto cadastrarCliente(@RequestBody ClienteDto dto){
        return clienteService.cadastrarCliente(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClienteDto> listarClientes()
    {
        return clienteService.listarClientes();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarCliente(@PathVariable String id)
    {
        clienteService.deletarCliente(Long.parseLong(id));
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ClienteDto listarCliente(@PathVariable String id)
    {
        return clienteService.listarCliente(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClienteDto atualizar(@RequestBody ClienteDto dto){
        return clienteService.atualizarCliente(dto);
    }
}
