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

    private final AtomicLong counter = new AtomicLong();
    private int time = (int) System.currentTimeMillis();
    




    @GetMapping("/ozone")
    @ResponseBody
    public Greeting sayHello(@RequestParam Map<String,String> requestParams) {

        time=Integer.parseInt(requestParams.get("time"));
        System.out.println(requestParams);
        //if(lat.contains(Double.parseDouble(requestParams.get("latitude"))) && lon.contains(Integer.parseInt(requestParams.get(longitude))))
        double lat = Double.parseDouble(requestParams.get("lat"));
        double lng = Double.parseDouble(requestParams.get("lon"));
        int output = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D( lng
                ,lat, 1, time, NoiseQuality.BEST));

        return new Greeting(counter.incrementAndGet(),  Math.abs(output), String.valueOf(time), lat, lng);
    }

    @GetMapping("/filltheus")
    @ResponseBody
    public List<Greeting> getAll(@RequestParam Map<String, String> requestParams){
        time = Integer.parseInt(requestParams.get("time"));
        double lng = Double.parseDouble(requestParams.get("lon"));
        double lat = Double.parseDouble(requestParams.get("lat"));

        return populate(time, lng, lat);
    }

    private List<Greeting> populate(Integer t, double lng, double lat){
        List<Greeting> returnList = new ArrayList<>();

        for (int i = 0; i < 10; i++){
            for (int j = 0; j < 50; j++){
                if (i == 0){
                    if (j == 0){
                        Integer returnInt = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(lng + 51.0/1, lat - 20.0/1, 1, t, NoiseQuality.BEST));
                        returnList.add(new Greeting( i* j, Math.abs(returnInt) , t.toString(), lat - 20.0/1, lng + 51.0/1));
                    }
                    else {
                        Integer returnInt = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(lng + 51.0/j, lat - 20.0/1, 1, t, NoiseQuality.BEST));
                        returnList.add(new Greeting( i* j, Math.abs(returnInt) , t.toString(), lat - 20.0/1, lng + 51.0/j));
                    }
                }
                else {
                    Integer returnInt = (int) (100 * com.flowpowered.noise.Noise.gradientCoherentNoise3D(lng + (j*3), lat - (i*3), 1, t, NoiseQuality.BEST));
                    returnList.add(new Greeting( i* j, Math.abs(returnInt) , t.toString(), lat - ((double)i * 1.75), lng + ((double)j + 1.25)));
                }

            }
        }
        return returnList;

    }


}
