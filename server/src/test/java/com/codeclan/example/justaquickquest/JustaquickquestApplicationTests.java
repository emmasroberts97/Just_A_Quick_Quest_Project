package com.codeclan.example.justaquickquest;

import com.codeclan.example.justaquickquest.models.Character;
import com.codeclan.example.justaquickquest.models.QuestionMaster;
import com.codeclan.example.justaquickquest.models.Room;
import com.codeclan.example.justaquickquest.models.Treasure;
import com.codeclan.example.justaquickquest.repositories.CharacterRepository;
import com.codeclan.example.justaquickquest.repositories.QuestionMasterRespository;
import com.codeclan.example.justaquickquest.repositories.RoomRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;


@SpringBootTest
class JustaquickquestApplicationTests {

	@Autowired
	CharacterRepository characterRepository;

	@Autowired
	RoomRepository roomRepository;

	@Autowired
	QuestionMasterRespository questionMasterRespository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createCharacter(){
		Character character = new Character("Rob","Monday");
		characterRepository.save(character);
	}

//	@Test
//	public void canAddItem(){
//		Character character =new Character("Rob","Monday");
//		characterRepository.save(character);
//		character.addItem(Treasure.CANDLE);
//		assertEquals(1,character.getItemsCollected().size());

//	}

	@Test
	public void createRoom(){
		Room room = new Room("Scary Tower", "This is a scary tower", "Pop Culture");
		roomRepository.save(room);
	}

	@Test
	public void createQuestionMaster(){
		QuestionMaster questionMaster = new QuestionMaster("Ruby Rabbit", "Ruh Roh", "url", "well done", "you're dumb");
		questionMasterRespository.save(questionMaster);
	}


}
