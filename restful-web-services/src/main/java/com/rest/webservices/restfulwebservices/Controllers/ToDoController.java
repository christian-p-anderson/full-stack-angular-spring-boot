package com.rest.webservices.restfulwebservices.Controllers;

import com.rest.webservices.restfulwebservices.Models.Todo;
import com.rest.webservices.restfulwebservices.Services.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoController {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);
    }

    // DELETE /users/{username}/todos/{id}
    @DeleteMapping("users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Edit / update a Todo
    // PUT /users/{user_name}/todos/{todo_id}

    @PutMapping("users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateToDo(
            @PathVariable String username,
            @PathVariable long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    // Create a new Todo
    // POST /users/{user_name}/todos/
    @PostMapping("users/{username}/todos")
    public ResponseEntity<Todo> updateToDo(
            @PathVariable String username,
            @RequestBody Todo todo) {
        Todo createdTodo = todoService.save(todo);

        // Location
        // Get current resource url
        // /users/{username}/todos/{id}
        // Step 68
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        // this takes the current path and appends the id of the todo into the path

        return ResponseEntity.created(uri).build();
    }
}
