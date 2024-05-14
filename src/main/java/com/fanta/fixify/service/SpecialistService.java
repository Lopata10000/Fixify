package com.fanta.fixify.service;

import com.fanta.fixify.entity.Specialist;
import com.fanta.fixify.repository.SpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialistService {

    private final SpecialistRepository specialistRepository;

    @Autowired
    public SpecialistService(SpecialistRepository specialistRepository) {
        this.specialistRepository = specialistRepository;
    }

    public List<Specialist> getAllSpecialists() {
        return specialistRepository.findAll();
    }

    public Optional<Specialist> getSpecialistById(Long id) {
        return specialistRepository.findById(id);
    }

    public Specialist createSpecialist(Specialist specialist) {
        return specialistRepository.save(specialist);
    }

    public Specialist updateSpecialist(Long id, Specialist updatedSpecialist) {
        Optional<Specialist> existingSpecialist = specialistRepository.findById(id);
        if (existingSpecialist.isPresent()) {
            updatedSpecialist.setId(id);
            return specialistRepository.save(updatedSpecialist);
        }
        return null; // or throw exception
    }

    public void deleteSpecialist(Long id) {
        specialistRepository.deleteById(id);
    }
}
