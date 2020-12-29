package com.rest.webservices.restfulwebservices.Controllers;


import com.rest.webservices.restfulwebservices.Models.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin(origins = "http://localhost:4200") // gives permission for localhost:4200 to access the tomcat server on port 8080
@RestController
public class HelloWorldController {

    @GetMapping("hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    //hello-world-bean
    @GetMapping("hello-world-bean")
    public HelloWorldBean helloWorldBean() {
//        throw new RuntimeException("Some Error has Happened! Contact Support at ***-****");
        return new HelloWorldBean("Hello World - Changed");
    }

    //hello-world/path-variable/in28Mintues
    @GetMapping("hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
