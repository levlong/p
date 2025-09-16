package com.thelong.expenses.model.converter;

import com.thelong.expenses.model.Category;
import com.thelong.expenses.model.dto.CategoryDto;

public class CategoryEntityToDto {
    public static CategoryDto convertToDto(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setCategory_id(category.getId());
        dto.setName(category.getName());
        dto.setType(category.getType());
        if (!category.getUser().equals(null)) {
            dto.setUser_id(category.getUser().getId());
        }
        return dto;
    }
}
