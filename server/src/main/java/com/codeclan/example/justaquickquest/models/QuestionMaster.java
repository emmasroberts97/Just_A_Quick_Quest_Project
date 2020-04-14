package com.codeclan.example.justaquickquest.models;

import javax.persistence.*;

@Entity
@Table(name="questionmasters")
public class QuestionMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name= "catchphrase")
    private String catchphrase;

    @Column(name = "img")
    private String img;

    @Column(name = "right_answer_response")
    private String rightAnswerResponse;

    @Column(name = "wrong_answer_response")
    private String wrongAnswerResponse;

    public QuestionMaster(String name, String catchphrase, String img, String rightAnswerResponse, String wrongAnswerResponse) {
        this.name = name;
        this.catchphrase = catchphrase;
        this.img = img;
        this.rightAnswerResponse = rightAnswerResponse;
        this.wrongAnswerResponse = wrongAnswerResponse;
    }

    public QuestionMaster() {
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

    public String getCatchphrase() {
        return catchphrase;
    }

    public void setCatchphrase(String catchphrase) {
        this.catchphrase = catchphrase;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getRightAnswerResponse() {
        return rightAnswerResponse;
    }

    public void setRightAnswerResponse(String rightAnswerResponse) {
        this.rightAnswerResponse = rightAnswerResponse;
    }

    public String getWrongAnswerResponse() {
        return wrongAnswerResponse;
    }

    public void setWrongAnswerResponse(String wrongAnswerResponse) {
        this.wrongAnswerResponse = wrongAnswerResponse;
    }
}
