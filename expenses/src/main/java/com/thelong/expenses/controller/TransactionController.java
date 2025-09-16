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

import com.thelong.expenses.model.Transaction;
import com.thelong.expenses.model.dto.TransactionDto;
import com.thelong.expenses.service.TransactionServiceImpl;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionServiceImpl service;

    @GetMapping("/get/{id}")
    public ResponseEntity<List<TransactionDto>> all(@PathVariable int id) {
        return ResponseEntity.ok(service.all(id));
    }

    @PostMapping("/new")
    public ResponseEntity<Transaction> add(@RequestBody TransactionDto request) {
        Transaction newTransaction = service.create(request);

        return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Transaction> delete(@PathVariable int id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
