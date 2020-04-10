package com.codeclan.example.justaquickquest.components;

import com.codeclan.example.justaquickquest.controllers.RoomController;
import com.codeclan.example.justaquickquest.models.Character;
import com.codeclan.example.justaquickquest.models.QuestionMaster;
import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.models.Treasure;
import com.codeclan.example.justaquickquest.repositories.QuestionMasterRespository;
import com.codeclan.example.justaquickquest.repositories.RoomRepository;
import com.codeclan.example.justaquickquest.repositories.TreasureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    QuestionMasterRespository questionMasterRespository;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    TreasureRepository treasureRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){
        QuestionMaster rubyRabbit = new QuestionMaster("Ruby Rabbit","Ruby me this!","img-url","that was ruby right!","that was ruby wrong");
        questionMasterRespository.save(rubyRabbit);
        QuestionMaster peterPython = new QuestionMaster("Peter Python", "Nicccccee to ssssssssee you", "img-url", "thatsssssss the bessssssst anssssswer","you are wrong, I bite you now");
        questionMasterRespository.save(peterPython);
        QuestionMaster cSharpSteve = new QuestionMaster("C Sharp Steve", "C is my father's name, you can call me Steve","img-url","That was C for correct!", "I'm afraid we don't C eye to eye on this one, you lose!");
        questionMasterRespository.save((cSharpSteve));
        Room oldCastle = new Room("The spooky old castle","you get to the top of the hill and there is a castle. It looks spooky, so you go inside. You find someone in the living room. They start to speak....","Sports" );
        roomRepository.save(oldCastle);
        Room anotherPlanet= new Room("Another Planet!?!?!?", "you open your eyes and look up, the stars look strange and you can see 2 moons. You are on another planet!","Animals");
        roomRepository.save(anotherPlanet);
        Room pirateShip=new Room("An old pirate ship","you can smell the sea air as you find yourself walking the plank! A voice bellows from behind you. Maybe you still have a chance","Science:Computers");
        roomRepository.save(pirateShip);
        Treasure flour = new Treasure("Flour","URL");
        treasureRepository.save(flour);
        Treasure butter = new Treasure("Butter","URL");
        treasureRepository.save(butter);
        Treasure candle = new Treasure("Candle","URL");
        treasureRepository.save(candle);
        Treasure eggs = new Treasure("Eggs", "URL");
        treasureRepository.save(eggs);
        Treasure sugar = new Treasure("Sugar","URL");
        treasureRepository.save(sugar);

    }

}
