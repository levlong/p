package com.thelong.expenses.model.dto;

import com.thelong.expenses.model.enums.CategoryType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {
    private int user_id;
    private String name;
    private CategoryType type;
}
