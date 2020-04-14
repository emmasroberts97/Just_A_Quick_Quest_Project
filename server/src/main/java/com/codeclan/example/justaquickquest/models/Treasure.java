package com.codeclan.example.justaquickquest.models;

import javax.persistence.*;

@Entity
@Table(name = "treasures")
public class Treasure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ingredient")
    private String ingredient;

    @Column(name = "url")
    private String picture;

    public Treasure(String ingredient, String picture) {
        this.ingredient = ingredient;
        this.picture = picture;
    }

    public Treasure() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
