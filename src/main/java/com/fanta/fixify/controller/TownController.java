package com.fanta.fixify.controller;

import com.fanta.fixify.entity.Town;
import com.fanta.fixify.service.TownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/towns")
public class TownController {

    private final TownService townService;

    @Autowired
    public TownController(TownService townService) {
        this.townService = townService;
    }

    @GetMapping("/all")
    public List<Town> getAllTown() {
        return townService.getAllTown();
    }

    @GetMapping("/{id}")
    public Town getTownById(@PathVariable Long id) {
        return townService.getTownById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public Town createTown(@RequestBody Town town) {
        return townService.createTown(town);
    }

    @PutMapping("/{id}")
    public Town updateTown(@PathVariable Long id, @RequestBody Town updatedCategory) {
        return townService.updateTown(id, updatedCategory);
    }

    @DeleteMapping("/{id}")
    public void deleteTown(@PathVariable Long id) {
        townService.deleteTown(id);
    }
}
