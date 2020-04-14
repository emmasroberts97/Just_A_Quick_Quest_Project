package com.codeclan.example.justaquickquest.repositories;

import com.codeclan.example.justaquickquest.models.Treasure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreasureRepository extends JpaRepository<Treasure, Long> {
}
