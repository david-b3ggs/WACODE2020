package com.wacode.ozoneilizer.ozone;

import java.sql.Time;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

import com.flowpowered.noise.NoiseQuality;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
public class OzoneController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private double latitude = 0.0f;
    private double longitude = 0.0f;
    private int time = (int) System.currentTimeMillis();
    Random rand = new Random();
    private long CurrentTime = System.currentTimeMillis();
    private int AccessCounter = 0;




    @GetMapping("/ozone")
    @ResponseBody
    public Greeting sayHello(@RequestParam Map<String,String> requestParams) {

        time=Integer.parseInt(requestParams.get("time"));
        System.out.println(requestParams);
        //if(lat.contains(Double.parseDouble(requestParams.get("latitude"))) && lon.contains(Integer.parseInt(requestParams.get(longitude))))
        int output = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(Double.parseDouble(requestParams.get("lon"))
                ,Double.parseDouble(requestParams.get("lat")), 1, time, NoiseQuality.BEST));

        return new Greeting(counter.incrementAndGet(),  Math.abs(output), String.valueOf(time));
    }

    @GetMapping("/ozone/filltheus")
    @ResponseBody
    public List<Greeting> getAll(@RequestParam Map<String, String> requestParams){
        time = Integer.parseInt(requestParams.get("time"));
        double lng = Double.parseDouble(requestParams.get("longitude"));
        double lat = Double.parseDouble(requestParams.get("latitude"));

        return populate(time, lng, lat);
    }

    private List<Greeting> populate(Integer t, double lng, double lat){
        List<Greeting> returnList = new ArrayList<>();

        for (int i = 0; i < 10; i++){
            for (int j = 0; j < 50; j++){
                Integer returnInt = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(lng + 51.0/j, lat - 20.0/i, 1, t, NoiseQuality.BEST));
                returnList.add(new Greeting( i* j, returnInt , t.toString()));
            }
        }

        return returnList;

    }


}
