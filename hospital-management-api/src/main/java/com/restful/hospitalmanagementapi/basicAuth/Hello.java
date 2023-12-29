package com.restful.hospitalmanagementapi.basicAuth;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Hello {

    @GetMapping("/hello/{name}")
    public String helloUsername(@PathVariable String name){
        return "Hello "+name;
    }
    @GetMapping("/basicauth")
    public String basicAuthCheck(){
        return "Success";
    }
}
