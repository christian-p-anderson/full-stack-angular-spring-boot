package com.rest.webservices.restfulwebservices.Basic.Auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin(origins = "http://localhost:4200")
// gives permission for localhost:4200 to access the tomcat server on port 8080
@RestController
public class BasicAuthenticationController {

    @GetMapping("basicauth")
    public AuthenticationBean helloWorldBean() {
//        throw new RuntimeException("Some Error has Happened! Contact Support at ***-****");
        return new AuthenticationBean("Hello World - Changed");
    }

}
