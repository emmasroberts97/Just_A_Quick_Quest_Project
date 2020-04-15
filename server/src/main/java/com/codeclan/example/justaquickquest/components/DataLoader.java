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

        questionMasterRespository.deleteAll();
        roomRepository.deleteAll();
        treasureRepository.deleteAll();

        QuestionMaster rubyRabbit = new QuestionMaster("Ruby Rabbit","Ruby me this!","rubyRabbit","that was ruby right!","that was ruby wrong");
        questionMasterRespository.save(rubyRabbit);
        QuestionMaster peterPython = new QuestionMaster("Peter Python", "Nicccccee to ssssssssee you", "peterPython", "thatsssssss the bessssssst anssssswer","you are wrong, I bite you now");
        questionMasterRespository.save(peterPython);
        QuestionMaster cSharpSteve = new QuestionMaster("C Sharp Steve", "C is my father's name, you can call me Steve","cSharpSteve","That was C for correct!", "I'm afraid we don't C eye to eye on this one, you lose!");
        questionMasterRespository.save(cSharpSteve);
        QuestionMaster javaTheHut = new QuestionMaster("Java The Hut", "Definitely not infringing copyright","javaTheHut","I'll have a slice of that! Correct!", "That answer was worse than a reheated slice for breakfast, you fail!");
        questionMasterRespository.save(javaTheHut);
        QuestionMaster pascAlan = new QuestionMaster("Pasc Alan","A Ha!","pascalan","Kiss My Face! Correct","You should be ashamed of yourself. Wrong");
        questionMasterRespository.save(pascAlan);
        QuestionMaster html = new QuestionMaster("HTMElephant","The real elephant in the room is that I look like a hamster","html","You should be a moderator for Stack Overflow. Well done!","You are weakest hyperlink! Goodbye.");
        questionMasterRespository.save(html);
        QuestionMaster nial = new QuestionMaster("Nial","Greetings Traveller","nial","Yous are all doing so well","Oh crumbs!");
        questionMasterRespository.save(nial);
        QuestionMaster craig = new QuestionMaster("Craig++","Just one more was my middle name, now it's ++","craig","that one ran with zero errors!","failed to compile!");
        questionMasterRespository.save(craig);
        QuestionMaster sqlSquirrel = new QuestionMaster("SQL Squirrel","I store nuts in a relational database!","sqlSquirrel","You sure got that request!","aww nuts!");
        questionMasterRespository.save(sqlSquirrel);
        QuestionMaster machineCodeMouse = new QuestionMaster("Machine Code Mouse","01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001","machineCodeMouse","01100011 01101111 01110010 01110010 01100101 01100011 01110100 00100001","01110111 01110010 01101111 01101110 01100111 00100001");
        questionMasterRespository.save(machineCodeMouse);

        Room oldCastle = new Room("The spooky old castle","You get to the top of the hill and there is a castle. It looks spooky, so you go inside. You find someone in the living room. They start to speak....","Sports" );
        roomRepository.save(oldCastle);
        Room anotherPlanet= new Room("Another Planet!?!?!?", "You open your eyes and look up, the stars look strange and you can see 2 moons. You are on another planet!","Animals");
        roomRepository.save(anotherPlanet);
        Room pirateShip=new Room("An old pirate ship","You can smell the sea air as you find yourself walking the plank! A voice bellows from behind you. Maybe you still have a chance","Science:Computers");
        roomRepository.save(pirateShip);
        Room creepyBasement= new Room("A creepy, dark, dank basement","You start descending a slippery, rickety, staircase. When you reach the bottom, all you can see is a single lit candle on a table. Then from behind you, you hear a voice..... ","general");
        roomRepository.save(creepyBasement);
        Room cowboySaloon= new Room("An old timey western saloon","As you walk through the saloon doors you hear ragtime piano music mixed with heated conversations about card game and cattle rustling. As you scan your eyes around the room you notice someone sat at a table in the corner who beckons you over.....","Celebrities");
        roomRepository.save(cowboySaloon);
        Room corporateOffice = new Room("A modern, open plan corporate office","You swipe a keycard and the door swings open to reveal a busy office filled with people in jazzy shirts, because today is Friday. You walk over to your desk and notice a request from someone for a video chat. You answer the call.....","Mythology");
        roomRepository.save(corporateOffice);
        Room underTheSea= new Room("Somewhere under the sea!","You feel pressure all over your body, as you open your eyes, you realise you are at the bottom of a deep, deep sea. Thankful you packed your scuba gear, you look around you. A school of fish brush past you as you notice a shadowy creature lurking below. You swim toward it.....","Entertainment:Film");
        roomRepository.save(underTheSea);
        Room hauntedForest = new Room("A haunted forest!","You hear what you think is wind blowing through the trees, but something doesn's quite sound right. Sensing an unnatural presence surrounding you, you press on through the dense foliage. All of a sudden you come to a clearing where a group of figures are chanting an incantation. As you approach, all but one of them scatter, the final one turns and starts to speak....","Science:Computers");
        roomRepository.save(hauntedForest);
        Room topOfAMountain = new Room("The top of a tall mountain!","Hope you aren't scared of heights! A small cabin is at the very peak of this mountain. You scale the cliffs until you reach it. As you open the door you hear a voice from inside beckoning you.....","Entertainment:Comics");
        roomRepository.save(topOfAMountain);
        Room farInTheFuture = new Room("2000 years into the future!","You see cars hovering past you, while men and women walk around in shiny silver outfits. Maybe the futuristic supermarket across the street will have something of use for you. But in the future, supermarkets have an entrance exam.....","Science:Gadgets");
        roomRepository.save(farInTheFuture);


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
