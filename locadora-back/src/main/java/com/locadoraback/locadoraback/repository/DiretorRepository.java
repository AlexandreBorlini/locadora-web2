package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Diretor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiretorRepository extends JpaRepository<Diretor, Long> {
}
