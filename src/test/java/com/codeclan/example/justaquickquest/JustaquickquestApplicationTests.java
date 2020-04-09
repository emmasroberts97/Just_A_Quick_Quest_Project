package com.codeclan.example.justaquickquest;

import com.codeclan.example.justaquickquest.models.Character;
import com.codeclan.example.justaquickquest.models.Treasure;
import com.codeclan.example.justaquickquest.repositories.CharacterRepository;
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

	@Test
	void contextLoads() {
	}

	@Test
	public void createCharacter(){
		Character character = new Character("Rob","Monday");
		characterRepository.save(character);
	}

	@Test
	public void canAddItem(){
		Character character =new Character("Rob","Monday");
		characterRepository.save(character);
		character.addItem(Treasure.CANDLE);
		assertEquals(1,character.getItemsCollected().size());

	}


}
