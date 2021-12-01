package com.locadoraback.locadoraback.service;

import com.locadoraback.locadoraback.domain.DTO.AtorDto;
import com.locadoraback.locadoraback.domain.DTO.ClienteDto;
import com.locadoraback.locadoraback.domain.entity.Ator;
import com.locadoraback.locadoraback.domain.entity.Classe;
import com.locadoraback.locadoraback.domain.entity.Cliente;
import com.locadoraback.locadoraback.domain.mapper.ClienteMapper;
import com.locadoraback.locadoraback.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteMapper clienteMapper;

    public ClienteDto cadastrarCliente(ClienteDto dto){

        Cliente cliente = clienteMapper.clienteDtoToCliente(dto);
        return clienteMapper.clienteToClienteDto(clienteRepository.save(cliente));
    }

    public ClienteDto atualizarCliente(ClienteDto dto){

        listarCliente(dto.getIdCliente());
        Cliente cliente = clienteMapper.clienteDtoToCliente(dto);
        return clienteMapper.clienteToClienteDto(clienteRepository.save(cliente));
    }

    public ClienteDto listarCliente(Long id) {
        return clienteMapper.clienteToClienteDto(clienteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cliente com Id " + id + " Inválido")));
    }

    public List<ClienteDto> listarClientes(){
        return clienteMapper.listClienteToListClienteDto(clienteRepository.findAll());
    }

    public void deletarCliente(Long id){
        clienteRepository.deleteById(id);
    }
}
