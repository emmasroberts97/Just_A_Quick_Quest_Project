package com.codeclan.example.justaquickquest.controllers;

import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/rooms")
public class RoomController {

    @Autowired
    RoomRepository roomRepository;

    @GetMapping
    public ResponseEntity<List<Room>> getAllRooms(){
        return new ResponseEntity<>(roomRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public  ResponseEntity getRoomByName(@PathVariable Long id){
        return new ResponseEntity<>(roomRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Room> postRoom(@RequestBody Room room){
        roomRepository.save(room);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<Room> updateRoom(@RequestBody Room room){
        roomRepository.save(room);
        return new ResponseEntity<>(room, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id")
    public ResponseEntity<Room> deleteRoom(@PathVariable Long id){
        Room found = roomRepository.getOne(id);
        roomRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
