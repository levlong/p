package com.thelong.expenses.controller.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thelong.expenses.model.dto.UserRequest;
import com.thelong.expenses.service.UserServiceImpl;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserServiceImpl service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRequest user) {
        return ResponseEntity.ok(service.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<String> verify(@RequestBody UserRequest user) {
        return ResponseEntity.ok(service.verify(user));
    }
}
