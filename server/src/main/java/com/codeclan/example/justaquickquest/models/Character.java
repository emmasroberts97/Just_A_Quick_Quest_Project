package com.codeclan.example.justaquickquest.models;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import com.codeclan.example.justaquickquest.models.Treasure;

@Entity
@Table(name="characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name ="name")
    private String name;

    @Column(name="life")
    private int life;

//    @Column(name="items")
//    private ArrayList<Treasure> itemsCollected;

    @Column(name="start_time")
    private String startTime;

    @Column(name="end_time")
    private String endTime;

    public Character(String name, String startTime) {
        this.name = name;
        this.life = 5;
//        this.itemsCollected =new ArrayList<>();
        this.startTime = startTime;
        this.endTime = "";
    }

    public Character(){

    }

    //Getters

    public Long getId() { return id; }

    public String getName() { return name; }

    public int getLife() { return life; }

//    public ArrayList<Treasure> getItemsCollected() { return itemsCollected; }

    public String getStartTime() { return startTime; }

    public String getEndTime() { return endTime; }

    //Setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLife(int life) {
        this.life = life;
    }

//    public void setItemsCollected(ArrayList<Treasure> itemsCollected) {
//        this.itemsCollected = itemsCollected;
//    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

//    public void addItem(Treasure treasure){
//        this.itemsCollected.add(treasure);
//    }
}
