package com.thelong.expenses.service;

import java.util.List;

import com.thelong.expenses.model.Category;
import com.thelong.expenses.model.dto.CategoryDto;

public interface CategoryService {
    Category create(CategoryDto request);
    CategoryDto getById(int category_id);
    List<CategoryDto> getAllByUserId(int user_id);
    void delete(int category_id);
}
