package com.fanta.fixify.controller;

import com.fanta.fixify.entity.Category;
import com.fanta.fixify.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final CategoryService CategoryService;

    @Autowired
    public CategoryController(CategoryService CategoryService) {
        this.CategoryService = CategoryService;
    }

    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return CategoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id) {
        return CategoryService.getCategoryById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public Category createCategory(@RequestBody Category Category) {
        return CategoryService.createCategory(Category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable Long id, @RequestBody Category updatedCategory) {
        return CategoryService.updateCategory(id, updatedCategory);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Long id) {
        CategoryService.deleteCategory(id);
    }
}
