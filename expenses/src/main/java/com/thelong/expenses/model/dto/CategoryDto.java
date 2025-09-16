package com.thelong.expenses.model.dto;

import com.thelong.expenses.model.enums.CategoryType;

import lombok.Data;

@Data
public class CategoryDto {
    private int category_id;
    private int user_id;
    private String name;
    private CategoryType type;
}
