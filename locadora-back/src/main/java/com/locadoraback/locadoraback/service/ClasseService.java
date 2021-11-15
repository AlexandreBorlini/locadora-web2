package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.ClasseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClasseService {

    @Autowired
    ClasseRepository classeRepository;
}
