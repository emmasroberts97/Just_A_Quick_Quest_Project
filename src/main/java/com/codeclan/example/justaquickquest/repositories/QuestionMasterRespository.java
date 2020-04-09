package com.codeclan.example.justaquickquest.repositories;

import com.codeclan.example.justaquickquest.models.QuestionMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionMasterRespository extends JpaRepository<QuestionMaster, Long> {
}
