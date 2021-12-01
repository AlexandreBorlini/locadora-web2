package com.locadoraback.locadoraback.repository;

import com.locadoraback.locadoraback.domain.entity.Item;
import com.locadoraback.locadoraback.domain.entity.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocacaoRepository extends JpaRepository<Locacao, Long> {
}
