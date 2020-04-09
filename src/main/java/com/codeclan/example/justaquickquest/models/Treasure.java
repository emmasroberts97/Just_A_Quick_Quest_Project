package com.codeclan.example.justaquickquest.models;

public enum Treasure {

    FLOUR("URL"),
    SUGAR("URL"),
    EGGS("URL"),
    BUTTER("URL"),
    CANDLE("URL");

    private final String url;

    Treasure(String url){
        this.url = url;
    }
    public String getUrl(){
        return this.url;
    }

}
