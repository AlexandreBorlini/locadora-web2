package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtorRepository extends JpaRepository<Ator, Long> {
}
