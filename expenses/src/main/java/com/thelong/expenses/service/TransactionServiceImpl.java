package com.thelong.expenses.service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thelong.expenses.model.Transaction;
import com.thelong.expenses.model.dto.TransactionDto;
import com.thelong.expenses.model.enums.CategoryType;
import com.thelong.expenses.repo.TransactionRepo;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;

    @Override
    public Transaction create(TransactionDto request) {

        Transaction transaction = new Transaction();
        transaction.setUserId(request.getUser_id());
        transaction.setCategoryId(request.getCategory_id());
        transaction.setAmount(request.getAmount());
        transaction.setDescription(request.getDescription());
        
        return transactionRepo.save(transaction);
    }

    @Override
    public void delete(int id) {
        transactionRepo.deleteById(id);
    }

    @Override
    public List<TransactionDto> all(int id) {
        List<Object[]> transactions = transactionRepo.getAllTransactionByUserId(id);
        List<TransactionDto> dtos = new ArrayList<>();
        for (Object[] row : transactions) {
            dtos.add(new TransactionDto(
                    (int) row[0], // transaction_id
                    (BigDecimal) row[1], // amount
                    (String) row[2], // description
                    (Timestamp) row[3], // created_at
                    (int) row[4], // category_id
                    (String) row[5], // category_name
                    CategoryType.valueOf((String) row[6]), // category_type
                    (int) row[7], // user_id
                    (String) row[8] // username
            ));
        }
        return dtos;
    }
}
