package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Classe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Long> {
}
