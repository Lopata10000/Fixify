package com.fanta.fixify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "towns")
public class Town {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "town_id")
    private Long id;

    @Column(name = "town_name", nullable = false, unique = true, length = 100)
    private String town_name;

    @JsonIgnore
    @OneToMany(mappedBy = "townId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Project> projects;
    public Town(Long id) {
        this.id = id;
    }
}
