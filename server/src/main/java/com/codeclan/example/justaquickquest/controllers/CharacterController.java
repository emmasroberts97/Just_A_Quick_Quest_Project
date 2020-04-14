package com.codeclan.example.justaquickquest.controllers;

import com.codeclan.example.justaquickquest.models.Character;
import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/characters")
public class CharacterController {

    @Autowired
    CharacterRepository characterRepository;

    @GetMapping
    public ResponseEntity<List<Character>> getAllCharacters(){
        return new ResponseEntity<>(characterRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getCharacterById(@PathVariable Long id){
        return new ResponseEntity<>(characterRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Character> postCharacter(@RequestBody Character character){
        characterRepository.save(character);
        return new ResponseEntity<>(character, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<Character> updateCharacter(@RequestBody Character character){
        characterRepository.save(character);
        return new ResponseEntity<>(character, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Character> deleteCharacter(@PathVariable Long id){
        Character found = characterRepository.getOne(id);
        characterRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
