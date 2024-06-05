package com.fanta.fixify.controller;

import com.fanta.fixify.entity.Specialist;
import com.fanta.fixify.service.SpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/specialists")
public class SpecialistController {

    private final SpecialistService specialistService;

    @Autowired
    public SpecialistController(SpecialistService specialistService) {
        this.specialistService = specialistService;
    }

    @GetMapping("/all")
    public List<Specialist> getAllSpecialists() {
        return specialistService.getAllSpecialists();
    }

    @GetMapping("/{id}")
    public Specialist getSpecialistById(@PathVariable Long id) {
        return specialistService.getSpecialistById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public Specialist createSpecialist(@RequestBody Specialist specialist) {
        return specialistService.createSpecialist(specialist);
    }

    @PutMapping("/{id}")
    public Specialist updateSpecialist(@PathVariable Long id, @RequestBody Specialist updatedSpecialist) {
        return specialistService.updateSpecialist(id, updatedSpecialist);
    }

    @DeleteMapping("/{id}")
    public void deleteSpecialist(@PathVariable Long id) {
        specialistService.deleteSpecialist(id);
    }
}
