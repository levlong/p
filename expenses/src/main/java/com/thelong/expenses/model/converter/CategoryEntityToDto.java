package com.thelong.expenses.model.converter;

import com.thelong.expenses.model.Category;
import com.thelong.expenses.model.dto.CategoryDto;

public class CategoryEntityToDto {
    public static CategoryDto convertToDto(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setUser_id(category.getUserId());
        dto.setName(category.getName());
        dto.setType(category.getType());
        return dto;
    }
}
