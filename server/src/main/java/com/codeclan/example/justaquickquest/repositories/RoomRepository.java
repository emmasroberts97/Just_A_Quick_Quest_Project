package com.codeclan.example.justaquickquest.repositories;

import com.codeclan.example.justaquickquest.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
