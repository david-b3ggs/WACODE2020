package com.wacode.ozoneilizer.ozone;

public class Greeting {

    private final long id;
    private final int ozoneLevel;
    private final double lat;
    private final double lng;
    private String time;

    public Greeting(long id, int ozoneLevel, String time, double lat, double lng) {
        this.id = id;
        this.ozoneLevel = ozoneLevel;
        this.lat = lat;
        this.lng = lng;
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

    public double getLat() {
        return lat;
    }

    public double getLng() {
        return lng;
    }
}