package com.codeclan.example.justaquickquest.models;

import javax.persistence.*;

@Entity
@Table(name= "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name="description", length = 1024)
    private String description;

    @Column(name = "category")
    private String category;

    public Room(String name, String description, String category) {
        this.name = name;
        this.description = description;
        this.category = category;
    }

    public Room() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
