package com.example.visualize.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.visualize.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	
}
