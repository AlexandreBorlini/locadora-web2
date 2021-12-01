package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.DTO.ItemDto;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.entity.Item;
import com.locadoraback.locadoraback.domain.mapper.ItemMapper;
import com.locadoraback.locadoraback.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemMapper itemMapper;

    public ItemDto cadastrarItem(ItemDto dto){

        Item item = itemMapper.itemDtoToItem(dto);
        return itemMapper.itemToItemDto(itemRepository.save(item));
    }

    public ItemDto atualizarItem(ItemDto dto){

        listarItem(dto.getIdItem());
        Item item = itemMapper.itemDtoToItem(dto);
        return itemMapper.itemToItemDto(itemRepository.save(item));
    }

    public ItemDto listarItem(Long id) {
        return itemMapper.itemToItemDto(itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item com Id " + id + " Inválido")));
    }

    public List<ItemDto> listarItens(){
        return itemMapper.listItemToListItemDto(itemRepository.findAll());
    }

    public void deletarItem(Long id){
        itemRepository.deleteById(id);
    }
}
