package com.rest.webservices.restfulwebservices.Controllers;


import com.rest.webservices.restfulwebservices.Models.HelloWorldBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
public class HelloWorldController {



    @GetMapping("hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    //hello-world-bean
    @GetMapping("hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }
}
