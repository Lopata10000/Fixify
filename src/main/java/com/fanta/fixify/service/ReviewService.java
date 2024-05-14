package com.fanta.fixify.service;

import com.fanta.fixify.entity.Review;
import com.fanta.fixify.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(Long id) {
        return reviewRepository.findById(id);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review updatedReview) {
        Optional<Review> existingReview = reviewRepository.findById(id);
        if (existingReview.isPresent()) {
            updatedReview.setId(id);
            return reviewRepository.save(updatedReview);
        }
        return null; // or throw exception
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
