package com.thelong.expenses.service;

import java.util.List;

import com.thelong.expenses.model.Transaction;
import com.thelong.expenses.model.dto.TransactionDto;

public interface TransactionService {
    Transaction create(TransactionDto request);
    void delete(int id);
    List<TransactionDto> all(int id);
}
