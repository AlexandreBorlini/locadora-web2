package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;
}
