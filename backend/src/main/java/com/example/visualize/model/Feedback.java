package com.example.visualize.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;	
	private long mssv;
	private String name;
	private String feedbackText;
	
	public Feedback() {
		
	}
	
	public Feedback(long id, long mssv, String name, String feedbackText) {
		super();
		this.id = id;
		this.mssv = mssv;
		this.name = name;
		this.feedbackText = feedbackText;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getMssv() {
		return mssv;
	}
	public void setMssv(long mssv) {
		this.mssv = mssv;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFeedbackText() {
		return feedbackText;
	}
	public void setFeedbackText(String feedbackText) {
		this.feedbackText = feedbackText;
	}
	
	

}
