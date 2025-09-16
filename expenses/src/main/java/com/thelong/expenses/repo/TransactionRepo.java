package com.thelong.expenses.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.NativeQuery;

import com.thelong.expenses.model.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction, Integer> {
    @NativeQuery("""
            SELECT
                t.transaction_id,
                t.amount,
                t.description,
                t.created_at,
                c.category_id,
                c.name AS category_name,
                c.type AS category_type,
                u.user_id,
                u.username
            FROM transactions t
            JOIN categories c ON t.category_id = c.category_id
            JOIN users u ON t.user_id = ?1
            ORDER BY t.created_at DESC
            """)
    List<Object[]> getAllTransactionByUserId(int id);
}
