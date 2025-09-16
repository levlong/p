package com.thelong.expenses.model.dto;

import java.math.BigDecimal;
import java.sql.Timestamp;

import com.thelong.expenses.model.enums.CategoryType;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TransactionDto {
    private int transaction_id;
    private BigDecimal amount;
    private String description;
    private Timestamp created_at;
    private int category_id;
    private String category_name;
    private CategoryType category_type;
    private int user_id;
    private String username;
}
