package com.fanta.fixify.service;

import com.fanta.fixify.entity.Subcategory;
import com.fanta.fixify.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    @Autowired
    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    public List<Subcategory> getAllSubcategorys() {
        return subcategoryRepository.findAll();
    }

    public Optional<Subcategory> getSubcategoryById(Long id) {
        return subcategoryRepository.findById(id);
    }

    public Subcategory createSubcategory(Subcategory subcategory) {
        return subcategoryRepository.save(subcategory);
    }

    public Subcategory updateSubcategory(Long id, Subcategory updatedSubcategory) {
        Optional<Subcategory> existingSubcategory = subcategoryRepository.findById(id);
        if (existingSubcategory.isPresent()) {
            updatedSubcategory.setId(id);
            return subcategoryRepository.save(updatedSubcategory);
        }
        return null; // or throw exception
    }

    public void deleteSubcategory(Long id) {
        subcategoryRepository.deleteById(id);
    }
}
