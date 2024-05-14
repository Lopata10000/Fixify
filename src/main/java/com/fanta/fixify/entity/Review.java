package com.fanta.fixify.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @Column(name = "author_id", nullable = false)
    private Long authorId;

    @Column(name = "recipient_id", nullable = false)
    private Long recipientId;

    @Column(name = "rating", nullable = false)
    private int rating;

    @Column(name = "comment")
    private String comment;

    @Column(name = "date_posted", nullable = false)
    private Timestamp datePosted;

}
