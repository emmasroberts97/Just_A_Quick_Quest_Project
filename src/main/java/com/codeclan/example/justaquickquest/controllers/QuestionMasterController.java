package com.codeclan.example.justaquickquest.controllers;

import com.codeclan.example.justaquickquest.models.QuestionMaster;
import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.repositories.QuestionMasterRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/questionmasters")
public class QuestionMasterController {

    @Autowired
    QuestionMasterRespository questionMasterRespository;

    @GetMapping
    public ResponseEntity<List<QuestionMaster>> getAllQuestionMasters(){
        return new ResponseEntity<>(questionMasterRespository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getQuestionMasterById(@PathVariable Long id){
        return new ResponseEntity<>(questionMasterRespository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<QuestionMaster> postQuestionMaster(@RequestBody QuestionMaster questionMaster){
        questionMasterRespository.save(questionMaster);
        return new ResponseEntity<>(questionMaster, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<QuestionMaster> updateQuestionMaster(@RequestBody QuestionMaster questionMaster){
        questionMasterRespository.save(questionMaster);
        return new ResponseEntity<>(questionMaster, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id")
    public ResponseEntity<QuestionMaster> deleteQuestionMaster(@PathVariable Long id){
        QuestionMaster found = questionMasterRespository.getOne(id);
        questionMasterRespository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
