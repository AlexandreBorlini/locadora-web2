package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.DiretorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiretorService {

    @Autowired
    DiretorRepository diretorRepository;
}
