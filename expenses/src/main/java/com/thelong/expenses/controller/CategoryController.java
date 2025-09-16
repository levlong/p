package com.thelong.expenses.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thelong.expenses.model.Category;
import com.thelong.expenses.model.dto.CategoryDto;
import com.thelong.expenses.service.CategoryServiceImpl;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    CategoryServiceImpl service;

    @PostMapping("/new")
    public ResponseEntity<Category> newCategory(@RequestBody CategoryDto request) {
        Category addedCategory = service.create(request);
        return new ResponseEntity<>(addedCategory, HttpStatus.CREATED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<List<CategoryDto>> all(@PathVariable int id) {
        List<CategoryDto> categories = service.getAllByUserId(id);
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/one/{id}")
    public ResponseEntity<CategoryDto> get(@PathVariable int id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Category> remove(@PathVariable int id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
