package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Posttext")
public class modeltext {
   @Id
   @GeneratedValue
   int slno;
   String text;
public int getSlno() {
	return slno;
}
public void setSlno(int slno) {
	this.slno = slno;
}
public String getText() {
	return text;
}
public void setText(String text) {
	this.text = text;
}
   
   
}
