package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.AtorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtorService {

    @Autowired
    AtorRepository atorRepository;
}
