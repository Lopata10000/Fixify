package com.fanta.fixify.service;


import com.fanta.fixify.entity.Town;
import com.fanta.fixify.repository.TownRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TownService {

    private final TownRepository townRepository;

    @Autowired
    public TownService(TownRepository townRepository) {
        this.townRepository = townRepository;
    }

    public List<Town> getAllTown() {
        return townRepository.findAll();
    }

    public Optional<Town> getTownById(Long id) {
        return townRepository.findById(id);
    }

    public Town createTown(Town town) {
        return townRepository.save(town);
    }

    public Town updateTown(Long id, Town updatedTown) {
        Optional<Town> existingTown = townRepository.findById(id);
        if (existingTown.isPresent()) {
            updatedTown.setId(id);
            return townRepository.save(updatedTown);
        }
        return null; // or throw exception
    }

    public void deleteTown(Long id) {
        townRepository.deleteById(id);
    }
}

