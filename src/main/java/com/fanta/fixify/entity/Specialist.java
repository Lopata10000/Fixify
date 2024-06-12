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
@Table(name = "specialists")
public class Specialist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "specialist_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", unique = true)
    private User userId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category categoryId;

    @JsonIgnore
    @OneToMany(mappedBy = "specialistId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Project> projects;

    @JsonIgnore
    @OneToMany(mappedBy = "specialistId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "rating", nullable = false, precision = 3)
    private double rating;

    @Column(name = "services_offered", columnDefinition = "TEXT")
    private String servicesOffered;

    public Specialist(Long id) {
        this.id = id;
    }
}
