package com.fanta.fixify.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "specialists")
public class Specialist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "specialist_id")
    private Long id;

    @Column(name = "user_id", unique = true)
    private Long userId;

    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "rating", nullable = false, precision = 3)
    private double rating;

    @Column(name = "services_offered", columnDefinition = "TEXT")
    private String servicesOffered;

}