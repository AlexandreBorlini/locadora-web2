package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.SocioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SocioService {

    @Autowired
    SocioRepository socioRepository;
}
