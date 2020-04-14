package com.codeclan.example.justaquickquest.controllers;

import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.models.Treasure;
import com.codeclan.example.justaquickquest.repositories.RoomRepository;
import com.codeclan.example.justaquickquest.repositories.TreasureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/treasures")
public class TreasureController {

    @Autowired
    TreasureRepository treasureRepository;

    @GetMapping
    public ResponseEntity<List<Treasure>> getAllTreasures(){
        return new ResponseEntity<>(treasureRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public  ResponseEntity getTreasureByName(@PathVariable Long id){
        return new ResponseEntity<>(treasureRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Treasure> postTreasure(@RequestBody Treasure treasure){
        treasureRepository.save(treasure);
        return new ResponseEntity<>(treasure, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<Treasure> updateTreasure(@RequestBody Treasure treasure){
        treasureRepository.save(treasure);
        return new ResponseEntity<>(treasure, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Treasure> deleteTreasure(@PathVariable Long id){
        Treasure found = treasureRepository.getOne(id);
        treasureRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
