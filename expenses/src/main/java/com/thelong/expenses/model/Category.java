package com.thelong.expenses.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import com.thelong.expenses.model.enums.CategoryType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private int id;

    private int userId;

    private String name;

    @Enumerated(EnumType.STRING)
    private CategoryType type;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Timestamp created_at;
}
