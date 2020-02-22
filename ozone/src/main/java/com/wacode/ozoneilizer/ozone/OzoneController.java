package com.wacode.ozoneilizer.ozone;

import java.sql.Time;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

import com.flowpowered.noise.NoiseQuality;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
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
        //if(lat.contains(Double.parseDouble(requestParams.get("latitude"))) && lon.contains(Integer.parseInt(requestParams.get(longitude))))
        int output = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(Double.parseDouble(requestParams.get("longitude")),Double.parseDouble(requestParams.get("latitude")), 1, time, NoiseQuality.BEST));



        return new Greeting(counter.incrementAndGet(),  Math.abs(output), String.valueOf(time));

    }


}
