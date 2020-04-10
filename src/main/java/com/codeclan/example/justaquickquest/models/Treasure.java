package com.codeclan.example.justaquickquest.models;

public enum Treasure {

    FLOUR("flour"),
    SUGAR("sugar"),
    EGGS("eggs"),
    BUTTER("butter"),
    CANDLE("candle");

    private String ingredient;

    private Treasure(String ingredient){
        this.ingredient = ingredient;
    }

    public String getIngredient(){
        return this.ingredient;
    }

    public void setIngredient(String ingredient){
        this.ingredient = ingredient;
    }

    @Override
    public String toString ()
    {
        return this.ingredient;
    }

}
