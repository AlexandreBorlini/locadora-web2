package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Socio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocioRepository extends JpaRepository<Socio, Long> {
}
