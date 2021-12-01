package com.locadoraback.locadoraback.controller;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClasseDto;
import com.locadoraback.locadoraback.domain.DTO.ItemDto;
import com.locadoraback.locadoraback.domain.DTO.SocioDto;
import com.locadoraback.locadoraback.domain.entity.Item;
import com.locadoraback.locadoraback.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ItemDto cadastrarItem(@RequestBody ItemDto dto){
        return itemService.cadastrarItem(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ItemDto> listarItens()
    {
        return itemService.listarItens();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ItemDto listarItem(@PathVariable String id)
    {
        return itemService.listarItem(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarItem(@PathVariable String id)
    {
        itemService.deletarItem(Long.parseLong(id));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ItemDto atualizar(@RequestBody ItemDto dto){
        return itemService.atualizarItem(dto);
    }
}
