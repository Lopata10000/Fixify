package com.fanta.fixify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @ManyToOne
    @JoinColumn(name = "specialist_id")
    private Specialist specialistId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category categoryId;

    @ManyToOne
    @JoinColumn(name = "town_id", nullable = false)
    private Town townId;

    @JsonIgnore
    @OneToMany(mappedBy = "projectId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "address",nullable = false, columnDefinition = "TEXT")
    private String address;

    @Column(name = "status", nullable = false, columnDefinition = "TEXT")
    private String status = "Очікує";

    @Column(name = "budget", nullable = false, precision = 10)
    private BigDecimal budget;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    public Project(Long id) {
        this.id = id;
    }
}
