package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;
}
