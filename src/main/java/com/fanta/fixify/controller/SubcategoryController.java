package com.fanta.fixify.controller;

import com.fanta.fixify.entity.Subcategory;
import com.fanta.fixify.service.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subcategory")
public class SubcategoryController {

    private final SubcategoryService subcategoryService;

    @Autowired
    public SubcategoryController(SubcategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    @GetMapping
    public List<Subcategory> getAllSubcategory() {
        return subcategoryService.getAllSubcategorys();
    }

    @GetMapping("/{id}")
    public Subcategory getSubcategoryById(@PathVariable Long id) {
        return subcategoryService.getSubcategoryById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public Subcategory createSubcategory(@RequestBody Subcategory subcategory) {
        return subcategoryService.createSubcategory(subcategory);
    }

    @PutMapping("/{id}")
    public Subcategory updateSubcategory(@PathVariable Long id, @RequestBody Subcategory updatedCategory) {
        return subcategoryService.updateSubcategory(id, updatedCategory);
    }

    @DeleteMapping("/{id}")
    public void deleteSubcategory(@PathVariable Long id) {
        subcategoryService.deleteSubcategory(id);
    }
}
