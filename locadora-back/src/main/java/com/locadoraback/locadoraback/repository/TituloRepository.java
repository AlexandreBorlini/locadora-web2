package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Titulo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TituloRepository extends JpaRepository<Titulo, Long> {
}
