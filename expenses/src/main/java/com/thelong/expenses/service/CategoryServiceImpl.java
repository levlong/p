package com.thelong.expenses.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thelong.expenses.model.Category;
import com.thelong.expenses.model.User;
import com.thelong.expenses.model.converter.CategoryEntityToDto;
import com.thelong.expenses.model.dto.CategoryDto;
import com.thelong.expenses.repo.CategoryRepo;
import com.thelong.expenses.repo.UserRepo;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Category create(CategoryDto request) {
        User requestUser = userRepo.findById(request.getUser_id())
                .orElseThrow(() -> new RuntimeException("User " + request.getUser_id() + " not found!"));

        Category newCategory = new Category();
        newCategory.setUser(requestUser);
        newCategory.setName(request.getName());
        newCategory.setType(request.getType());
        return categoryRepo.save(newCategory);
    }

    @Override
    public CategoryDto getById(int category_id) {
        Category category = categoryRepo.findById(category_id)
                .orElseThrow(() -> new RuntimeException("No category with id: " + category_id + " found!"));
        CategoryDto categoryDto = CategoryEntityToDto.convertToDto(category);
        return categoryDto;
    }

    @Override
    public List<CategoryDto> getAllByUserId(int id) {
        return categoryRepo.findAllByUserId(id).stream()
                .map(CategoryEntityToDto::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(int category_id) {
        Category category = categoryRepo.findById(category_id)
                .orElseThrow(() -> new RuntimeException("No category with id: " + category_id + " found!"));
        categoryRepo.delete(category);
    }
}
