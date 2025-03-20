package com.example.visualize.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.visualize.model.Feedback;
import com.example.visualize.repository.FeedbackRepository;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	@PostMapping
	public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
		Feedback saveFeedback = feedbackRepository.save(feedback);
		return new ResponseEntity<Feedback>(saveFeedback,HttpStatus.CREATED);
	}
	@GetMapping
	public ResponseEntity<List<Feedback>>getAllFeedback(){
		List<Feedback> listFeedBack=feedbackRepository.findAll();
		return new ResponseEntity<List<Feedback>>(listFeedBack,HttpStatus.OK);
	}
}
