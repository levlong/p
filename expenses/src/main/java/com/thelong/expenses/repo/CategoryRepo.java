package com.thelong.expenses.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thelong.expenses.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    List<Category> findAllByUserId(int id);
}
