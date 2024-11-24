package com.akshaygautam.learning_azure;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "localhost:3000")
public class DemoController {

    @GetMapping("/table/{number}")
    public String getTable(@PathVariable int number) {
        StringBuilder table = new StringBuilder();
        for (int i = 1; i <= 10; i++) {
            table.append(number).append(" x ").append(i).append(" = ").append(number * i).append("\\n");
        }
        return "{ \"data\": \"" + table.toString() + "\" }";
    }
    

    @GetMapping("/hello/{name}")
    public String sayHello(@PathVariable String name) {
        return "{ \"data\": \"Hello, " + name + "\" }";
    }
}
