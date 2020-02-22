package com.wacode.ozoneilizer.ozone;

public class Greeting {

    private final long id;
    private final int ozoneLevel;
    private String time;

    public Greeting(long id, int ozoneLevel, String time) {
        this.id = id;
        this.ozoneLevel = ozoneLevel;
        this.time = time;
    }

    public long getId() {
        return id;
    }

    public int getozoneLevel() {
        return ozoneLevel;
    }
    public String getTime() {
        return time;
    }

}