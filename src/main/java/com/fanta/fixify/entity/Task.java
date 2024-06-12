package com.fanta.fixify.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long id;

    @Column(name = "task_name ", nullable = false, unique = true, length = 100)
    private String taskName;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

}
