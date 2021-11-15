package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.TituloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TituloService {

    @Autowired
    TituloRepository tituloRepository;
}
