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
        questionMasterRespository.save(cSharpSteve);
        QuestionMaster javaTheHut = new QuestionMaster("Java The Hut", "definitely not infringing copyright","javaTheHut","I'll have a slice of that! Correct!", "That answer was worse than a reheated slice for breakfast, you fail!");
        questionMasterRespository.save(javaTheHut);
        QuestionMaster pascAlan = new QuestionMaster("Pasc Alan","A Ha!","pascalan","Kiss My Face! Correct","You should be ashamed of yourself. Wrong");
        questionMasterRespository.save(pascAlan);
        QuestionMaster howardThomasMartinLuthor = new QuestionMaster("Howard Thomas Martin Luthor","come browse with me","http","You should be a moderator for Stack Overflow. Well done!","You are weakest hyperlink! Goodbye.");
        questionMasterRespository.save(howardThomasMartinLuthor);
        QuestionMaster nial = new QuestionMaster("Nial","Greetings Traveller","nial","Yous are all doing so well","Oh crumbs!");
        questionMasterRespository.save(nial);


        Room oldCastle = new Room("The spooky old castle","you get to the top of the hill and there is a castle. It looks spooky, so you go inside. You find someone in the living room. They start to speak....","Sports" );
        roomRepository.save(oldCastle);
        Room anotherPlanet= new Room("Another Planet!?!?!?", "you open your eyes and look up, the stars look strange and you can see 2 moons. You are on another planet!","Animals");
        roomRepository.save(anotherPlanet);
        Room pirateShip=new Room("An old pirate ship","you can smell the sea air as you find yourself walking the plank! A voice bellows from behind you. Maybe you still have a chance","Science:Computers");
        roomRepository.save(pirateShip);
        Room creepyBasement= new Room("A creepy, dark, dank basement","you start descending a slippery, rickety, staircase. When you reach the bottom, all you can see is a single lit candle on a table. Then from behind you, you hear a voice..... ","general");
        roomRepository.save(creepyBasement);
        Room cowboySaloon= new Room("an old timey western saloon","as you walk through the saloon doors you hear ragtime piano music mixed with heated conversations about card game and cattle rustling. As you scan your eyes around the room you notice someone sat at a table in the corner who beckons you over.....","Celebrities");
        roomRepository.save(cowboySaloon);
        Room corporateOffice = new Room("a modern, open plan corporate office","you swipe a keycard and the door swings open to reveal a busy office filled with people in jazzy shirts, because today is Friday. You walk over to your desk and notice a request from someone for a video chat. You answer the call.....","Mythology");
        roomRepository.save(corporateOffice);
        Room underTheSea= new Room("somewhere under the sea!","");
        roomRepository.save(underTheSea)

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
