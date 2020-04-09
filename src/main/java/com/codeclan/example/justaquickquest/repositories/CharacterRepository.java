package com.codeclan.example.justaquickquest.repositories;

import com.codeclan.example.justaquickquest.models.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {
}
